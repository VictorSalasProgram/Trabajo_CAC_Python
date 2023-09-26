const img_el =  document.getElementById('img')
const img_height = img_el.clientHeight
const img_width = img_el.clientWidth

img_el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yyRotation = (
        (layerX - img_width / 2) / img_width
    ) * 20

    const xxRotation = (
        (layerY - img_height / 2) / img_height
    ) * 20

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xxRotation}deg)
        rotateY(${yyRotation}deg)`

        img_el.style.transform = string    
})

img_el.addEventListener('mouseout', () => {
  img_el.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})