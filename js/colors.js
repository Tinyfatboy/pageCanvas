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
    let $colorSVG = $('.currentColorSvg')
    $colorSVG.find('circle')[0].setAttribute('fill', color)
}

if(randerWidth > 415){
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