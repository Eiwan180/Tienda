# Práctica 13 - La Tienda: composición, eventos y estado

---

### Ejercicio 1: El marco de la página

#### ¿Por qué el Layout no necesita saber que es una tienda?
El componente `Layout` actúa como un contenedor estructural genérico (provee el marco visual con encabezado, pie y una zona de contenido mediante `children`). Al no estar acoplado a la lógica específica de la tienda (como productos, carrito o precios), se vuelve un componente **reutilizable y desacoplado**. Su única responsabilidad es definir la disposición visual común de la aplicación, pudiendo reutilizarse en cualquier otro sitio web o sección que comparta la misma estructura de diseño.

---

### Ejercicio 2: El catálogo

#### ¿Qué pasa si escribes `onClick={onAgregar(producto)}` sin la flecha?
Si se omite la función flecha y se invoca directamente la función dentro del atributo `onClick` (es decir, escribiendo `onClick={onAgregar(producto)}`), la función **se ejecutará inmediatamente cada vez que el componente se renderice** (en el ciclo de renderizado), en lugar de esperar a que el usuario haga clic en el botón. Esto provoca un bucle infinito de renderizados y actualizaciones de estado que colapsarán la aplicación. La función flecha `onClick={() => onAgregar(producto)}` asegura que la función solo se ejecute cuando ocurra el evento de clic del usuario.

---

### Ejercicio 3: Filtrar y agregar al carrito

#### ¿Por qué con `carrito.push(...)` el contador no se mueve y no sale ningún error?
En React, las variables del estado son inmutables y el framework detecta cambios basándose en la asignación de referencias nuevas (por ejemplo, mediante funciones actualizadoras como `setCarrito`). 
* **Mutación directa:** El método `.push()` muta el arreglo existente de manera interna sin cambiar su referencia en memoria. 
* **Consecuencia:** Al no cambiar la referencia del arreglo, React asume que el estado no ha cambiado, por lo que **no vuelve a renderizar el componente** (el contador no se actualiza en pantalla). 
* **Ausencia de error:** Sintácticamente, `push` es un método válido de JavaScript para arreglos, por lo que JavaScript no arroja ningún error en consola; simplemente rompe el principio de inmutabilidad que requiere React para disparar la re-renderización de la interfaz.
