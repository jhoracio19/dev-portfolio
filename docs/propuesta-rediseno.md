# Propuesta de rediseño del portfolio

## Dirección

Un portfolio de desarrollador orientado a mostrar productos reales y facilitar el contacto. La propuesta ya está implementada en la aplicación Angular; se puede revisar con `npm start` en http://127.0.0.1:4200.

La segunda propuesta adopta una interfaz futurista centrada en productos reales. RemindHome y Otorrino forman una composición con profundidad, retícula técnica y una firma JH/dev. En móvil también aparece esta composición después del mensaje y las acciones. La entrada se anima una sola vez y respeta la preferencia de movimiento reducido.

## Sistema visual

| Elemento                  | Propuesta                                                                   |
| ------------------------- | --------------------------------------------------------------------------- |
| Fondo                     | Carbón azulado `#080C14`                                                    |
| Superficies               | `#101827`                                                                   |
| Texto principal           | `#EDF4FF`                                                                   |
| Texto secundario          | `#A5B4CB`                                                                   |
| Bordes                    | `#29384C`                                                                   |
| Acentos                   | Cian `#71E4F5` y violeta `#AD9AFF`                                          |
| Tipografía                | Inter: titulares con peso 600 y espaciado compacto; cuerpo entre 14 y 17 px |
| Contenido                 | Ancho máximo de 1180 px, alineación a la izquierda                          |
| Botones                   | Dos variantes, altura mínima de 46 px y radio de 10 px                      |
| Tarjetas                  | Radio de 16 px; sin decoraciones que compitan con las capturas              |

El contraste y la jerarquía se concentran en títulos, imágenes y acciones. Las tecnologías son información de apoyo. Los detalles se abren a petición del visitante y no dependen de animaciones de entrada.

## Recorrido

1. Portada: especialidad concreta, Ver proyectos, Hablemos y acceso al CV.
2. Reconocimiento: tercer lugar entre 25 equipos en Industry Hack Tec.
3. Trabajo seleccionado: RemindHome, Otorrino Tlaxcala y Cabaña María María.
4. Experiencia resumida en aportaciones legibles.
5. Hackathones con detalles desplegables.
6. Stack compacto por área.
7. Biografía y formación; certificados y arquitectura disponibles al expandir.
8. Contacto con correo visible, envío, copia y enlaces profesionales.

El catálogo conserva los 18 proyectos y los filtros, ordena primero los trabajos para clientes y comparte botones, colores y tarjetas con el inicio. El enlace genérico de código de FlowCard se retiró; no se inventó un repositorio alternativo.

## Contexto de los proyectos

Cada destacado incluye problema, implementación y resultado publicado. El contenido procede de la información existente en el repositorio. No se añaden cifras de conversión, testimonios ni atribuciones de trabajo individual que no estuvieran documentadas. Los casos pueden ampliarse posteriormente con evidencia y responsabilidades confirmadas.

## Accesibilidad y estados

- Enlaces reales con fragmentos, compatibles con teclado y navegación entre rutas.
- Enlace para saltar al contenido y foco visible.
- Menú móvil con Escape, devolución del foco, recorrido de Tab contenido y bloqueo de scroll.
- Desplazamiento con margen para que la cabecera no cubra las secciones.
- Buscador con nombre accesible y resultados anunciados.
- Idioma español/inglés, incluido el atributo `lang` del documento.
- Copia del correo con confirmación y alternativa si el navegador la rechaza.
- Preferencia de movimiento reducido respetada; cursor personalizado limitado a puntero preciso sin reducción de movimiento.

## Verificación de la segunda propuesta

### Movimiento e interacción

Lenis comparte un solo ciclo de animación con el cursor. Los enlaces internos y los eventos de scroll del router pasan por el servicio de desplazamiento, con un margen de 100 px para la cabecera. El desplazamiento táctil sigue siendo nativo y la preferencia de movimiento reducido se respeta también al cambiarla durante la sesión.

Los bloques aparecen al entrar en pantalla una sola vez. Los detalles animan su altura al abrir y cerrar, admiten inversión con clics rápidos y conservan el control por teclado. El menú móvil anima panel e icono y mantiene inaccesibles los enlaces mientras está cerrado.

Pruebas de interacción: apertura, cierre con Enter, clics rápidos, bloqueo de scroll del menú, Escape y devolución del foco, navegación desde el catálogo, margen de anclas, interpolación de rueda y ausencia de animación con movimiento reducido.

### Diseño

- Compilación de producción y tres rutas prerenderizadas.
- Capturas revisadas de portada en escritorio y móvil y del stack en escritorio.
- Sin desbordamiento horizontal a 320, 390, 768 y 1440 px después de ajustar las órbitas decorativas.
- Imágenes cargadas comprobadas sin recursos rotos.
- Movimiento reducido: la composición permanece visible y sin animación.

## Verificación de la primera propuesta

- Compilación de producción y prerenderizado de las rutas.
- Revisión visual de escritorio, móvil de 390 × 844 px y tablet de 768 × 1024 px.
- Comprobación adicional a 320 px de ancho: sin desbordamiento horizontal.
- En móvil de 390 × 844 px, acciones principales alrededor de 402 px desde el inicio; proyectos alrededor de 664 px. Antes se observaron aproximadamente 1100 px y 5100 px, respectivamente.
- Menú: Escape cierra y devuelve el foco; navegación desde catálogo a Experiencia con sección a 100 px del borde superior.
- Catálogo: filtro de clientes muestra tres trabajos; búsqueda sin coincidencias presenta recuperación; limpiar filtros devuelve 18 proyectos.
- Cambio de idioma y confirmación al copiar el correo comprobados en el navegador.

Estas comprobaciones son de interfaz y funcionamiento local; no son un estudio con usuarios ni una medición de conversión. La propuesta no se ha publicado.
