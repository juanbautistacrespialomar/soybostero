/* Service Worker — Soy Bostero
   - HTML / navegación: network-first (siempre la última versión deployada si hay red; cache solo offline).
   - Resto de assets: cache-first.
   Para forzar actualización limpia, subí el número de versión del cache. */

const CACHE = "soy-bostero-v11";
// Caché APARTE para las imágenes de los escudos. No lleva número de versión a propósito:
// así, cuando subís una versión nueva de la app (y cambia CACHE), los escudos ya bajados
// NO se borran y no hay que volver a descargarlos.
const ESC_CACHE = "soy-bostero-escudos";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./boca-icon-192.png",
  "./boca-icon-512.png",
  "./boca-icon-maskable.png",
  "./Logo_app.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
    // OJO: ya NO llamamos skipWaiting() acá.
    // La versión nueva queda "en espera" hasta que el usuario toque "Actualizar".
  );
});

// El cliente (la app) nos avisa que el usuario quiere la versión nueva ya
self.addEventListener("message", e => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== ESC_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Búsquedas de escudos (API de TheSportsDB): siempre a la red, nunca al caché.
  // Las IMÁGENES de los escudos sí se cachean (más abajo) para verlas sin internet.
  const url = new URL(req.url);
  if (url.hostname.endsWith("thesportsdb.com") && url.pathname.startsWith("/api/")) return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  // Imágenes de escudos -> a su caché permanente; el resto de los archivos -> caché de la versión
  const destino = url.hostname.endsWith("thesportsdb.com") ? ESC_CACHE : CACHE;

  e.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(destino).then(c => c.put(req, copy));
        return res;
      }).catch(() => cached)
    )
  );
});
