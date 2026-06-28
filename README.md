# Soy Bostero ⭐

App personal para llevar el registro de los partidos de Boca que fui a ver
a la cancha: resultados, efectividad, promedio de goles y tabla de goleadores.

PWA en un solo archivo (HTML + JS vanilla, sin frameworks). Los datos se
guardan en el navegador (localStorage), así que viven en tu dispositivo.

## Archivos del repo

- `index.html` — la app completa.
- `Logo.png` — el escudo. **Obligatorio.** Se usa como logo del header,
  favicon e ícono del PWA. Cuadrado, idealmente 512×512px.
- `manifest.json` — config del PWA (nombre, colores, íconos).

## Usar / desplegar

1. Subí los tres archivos a la raíz del repositorio.
2. Activá GitHub Pages (Settings → Pages → branch `main` / `/root`).
3. Entrá a la URL que te da GitHub.

## Cómo funciona

- **Resumen:** KPIs (jugados, ganados, empatados, perdidos, goles, diferencia,
  efectividad y promedio) más cortes por año, por torneo y por técnico.
- **Partidos:** tabla ordenable y con filtros. Doble clic en una fila o el
  lápiz para editar. Botón "+ Cargar partido" para agregar.
- **Goleadores:** ranking editable. "GEC" = goles en contra del rival (en
  propia) que cuentan a favor.
- **Datos:** Backup (.json), Restaurar, Importar Excel y Exportar Excel.

## Cálculos

- **Efectividad** = (3 × ganados + empatados) / (3 × jugados) × 100.
  Es la fórmula estándar (puntos cosechados sobre puntos posibles).
- **Promedio de goles** = goles a favor / partidos.
- **Partidos por penales:** se guardan los goles de los 90' y el resultado
  (G/E/P) se fija manualmente en el modal. Ej.: ganó por penales = G;
  empató en los 90' y perdió por penales = E.

## Backup y copia en blanco

- En **Datos → Backup** descargás un `.json` con todo.
- En **Datos → Restaurar** lo volvés a cargar (reemplaza lo que haya).
- Para regalarle la app a alguien en blanco: usá la versión sin datos
  semilla; cada uno carga lo suyo y maneja su propio backup.
