const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('mousemove', (evt) => {
        const link_height = link.clientHeight;
        const link_width = link.clientWidth;

        const { layerX, layerY } = evt;

        const yRotation = ((layerX - link_width / 2) / link_width) * 20;
        const xRotation = ((layerY - link_height / 2) / link_height) * 20;

        const string = `
            perspective(500px)
            scale(1.1)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)`;

        link.style.transform = string;
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = `
            perspective(500px)
            scale(1)
            rotateX(0)
            rotateY(0)`;
    });
});
