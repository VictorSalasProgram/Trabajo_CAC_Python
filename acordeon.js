function manejarMediaQuery(mq) {
    const contenedor = document.querySelector('.contenedor');
  
    if (contenedor) {
      const detallesEnContenedor = contenedor.querySelectorAll('details');
  
      if (mq.matches) {
        // Media query coincide (pantalla grande)
        detallesEnContenedor.forEach((detalle) => {
          detalle.setAttribute('open', true);
        });
      } else {
        // Media query no coincide (pantalla pequeña)
        detallesEnContenedor.forEach((detalle) => {
          detalle.removeAttribute('open');
        });
      }
    }
  }
  
  const mq = window.matchMedia('(min-width: 768px)');
  
  // Llama a la función al cargar la página y cada vez que cambia la media query
  window.addEventListener('load', () => {
    manejarMediaQuery(mq);
  });
  
  mq.addListener(manejarMediaQuery);
  


// Esta función establece el atributo 'open' en todos los elementos <details> dentro de un contenedor
function abrirDetallesEnContenedor(contenedorClass) {
    const contenedor = document.querySelector(`.${contenedorClass}`);
    if (contenedor) {
      const detallesEnContenedor = contenedor.querySelectorAll('details');
      detallesEnContenedor.forEach((detalle) => {
        detalle.setAttribute('open', true);
      });
    }
  }
  
  // Llama a la función para abrir los detalles en el contenedor con la clase .contenedor
  abrirDetallesEnContenedor('contenedor');
  