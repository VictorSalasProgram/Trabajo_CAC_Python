/*Efecto menú hamburguesa*/

const menuIconElement = document.querySelector('.menu-icon');

menuIconElement.addEventListener('mousemove', (evt) => {
    const { layerX, layerY } = evt;

    const menuIconWidth = menuIconElement.clientWidth;
    const menuIconHeight = menuIconElement.clientHeight;

    const yRotation = ((layerX - menuIconWidth / 2) / menuIconWidth) * 20;
    const xRotation = ((layerY - menuIconHeight / 2) / menuIconHeight) * 20;

    const transformString = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;

    menuIconElement.style.transform = transformString;
});

menuIconElement.addEventListener('mouseout', () => {
    menuIconElement.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`;
});

/*Menú desplegable*/

const navLinks = document.querySelectorAll('.nav-link');
const checkBox = document.getElementById('check');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkBox.checked = false; // Cerrar el menú al hacer clic en un enlace
  });
});
