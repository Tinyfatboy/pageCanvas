var $colorPanel = $('.colorPanel')
var currentColor = 'black'

if(deviceWidth > 415){
    setCurrentColor(canvas, currentColor)

    $colorPanel.on('click', function (e) {
        var targetElement = e.originalEvent.target
        while (targetElement.tagName !== 'DIV') {
            if (targetElement === $colorPanel[0]) {
                targetElement = null
                break
            } else {
                targetElement = targetElement.parentNode
            }
        }

        if (targetElement) {
            e.preventDefault()
            currentColor = targetElement.className
            setCurrentColor(currentColor)
            changeColor(canvas, currentColor)
        }
    })
}

function setCurrentColor(color) {
    let $colorSVG = $('SVG.currentColorSvg')
    $colorSVG.children('circle').attr('fill', color)

}

function changeColor(canvas, color) {
    var ctx = canvas.getContext('2d')
    ctx.strokeStyle = color
    ctx.fillStyle = color
}