var $colorPanel = $('.colorPanel')
var currentColor = 'black'

if(deviceWidth > 415){
    setCurrentColor(currentColor)

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
    let ctx = canvas.getContext('2d')
    ctx.arc(30,30,5,0,Math.PI*2)
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke()
    $colorSVG.find('circle')[0].setAttribute('fill', color)
    ctx.arc(10,10,5,0,Math.PI*2)
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke()
}

if(randerWidth > 415){
    setCurrentColor(currentColor)
    $colorPanel.on('touchstart', function (e) {
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

function changeColor(canvas, color) {
    var ctx = canvas.getContext('2d')
    ctx.strokeStyle = color
    ctx.fillStyle = color
}