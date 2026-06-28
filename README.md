# Soy Bostero ⭐

App personal para llevar el registro de los partidos de Boca que fui a ver
a la cancha: resultados, efectividad, promedio de goles y tabla de goleadores.

PWA en un solo archivo (HTML + JavaScript vanilla, sin frameworks). Los datos
se guardan en el navegador (localStorage), así que viven en tu dispositivo.

## Archivos del repo

- `index.html` — la app completa.
- `manifest.json` — config del PWA (nombre, colores, íconos).
- `Logo.png` — **ícono de la app**: favicon e ícono del PWA (pantalla de
  inicio). Puede tener fondo. Cuadrado, idealmente 512×512px.
- `Logo app.png` — **logo del header**, el que se ve adentro sobre el azul.
  Va con **fondo transparente**. Como el nombre tiene un espacio, en el código
  aparece codificado como `Logo%20app.png` (es lo mismo; así lo pide la URL).

Son **dos logos distintos**: `Logo.png` es el ícono de la app (afuera) y
`Logo app.png` es el del header (adentro).

## Usar / desplegar

1. Subí los cuatro archivos a la raíz del repositorio.
2. Activá GitHub Pages (Settings → Pages → branch `main` / carpeta `/root`).
3. Entrá a la URL que te da GitHub.

> Nota: GitHub distingue mayúsculas. Los archivos tienen que llamarse
> exactamente `Logo.png` y `Logo app.png`.

## Pantallas

- **Resumen:** KPIs (jugados, ganados, empatados, perdidos, goles a favor y
  en contra, diferencia, efectividad y promedio) más cortes por año, por
  torneo y por técnico. Tiene un botón flotante amarillo (+) abajo a la
  derecha para cargar un partido sin cambiar de pantalla.
- **Partidos:** tabla ordenable (clic en el encabezado) y con filtros por
  año, torneo, resultado y buscador. Doble clic en una fila o el lápiz para
  editar.
- **Goleadores:** ranking editable. "GEC" = goles en contra del rival (en
  propia) que cuentan a favor.
- **Datos:** Backup (.json), Restaurar, Importar Excel y Exportar Excel.

## Buscadores anti-duplicados

Al cargar un partido o un goleador, los campos Rival, Torneo, Instancia,
Técnico, Cancha y Jugador sugieren los valores que ya existen (autocompletado
nativo). Podés tipear algo nuevo, pero la sugerencia evita tener "River" y
"river" como dos cosas distintas. En goleadores, si cargás un nombre que ya
existe (sin distinguir mayúsculas ni acentos), suma los goles al que ya está.

## Cálculos

- **Efectividad** = (3 × ganados + empatados) / (3 × jugados) × 100.
  Es la fórmula estándar: puntos cosechados sobre puntos posibles.
- **Promedio de goles** = goles a favor / partidos.
- **Partidos por penales:** se guardan los goles de los 90' y el resultado
  (G/E/P) se fija a mano en el modal. Ej.: empató en los 90' y ganó por
  penales = G; empató y perdió por penales = E.

## Backup y copia en blanco

- En **Datos → Backup** descargás un `.json` con todos tus datos.
- En **Datos → Restaurar** lo volvés a cargar (reemplaza lo que haya, con
  confirmación previa).
- Para regalarle la app a alguien en blanco: usá la versión sin datos semilla;
  cada uno carga lo suyo y maneja su propio backup.

## Stack

HTML + CSS + JavaScript vanilla. Única dependencia en runtime: SheetJS (CDN)
para importar/exportar Excel. Fuentes: Oswald + Roboto (Google Fonts).
