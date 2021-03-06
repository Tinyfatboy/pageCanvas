var $colorPanel = $('.colorPanel')
var currentColor = 'black'

if(deviceWidth > 415){
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
    let $colorSVG = $('.currentColorSvg') //选择器SVG
    $colorSVG.find('circle')[0].setAttribute('fill', color)
}

if(renderWidth > 415){
    touchScreenColor()
}

window.onresize= function () {
    let width = $canvasWrapper.width();
    let height = $canvasWrapper.height();

    $canvas.attr('height', height).attr('width', width);
    setCurrentColor('black')
    renderWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if(renderWidth > 415){
        touchScreenColor()
    }
}

function changeColor(canvas, color) {
    var ctx = canvas.getContext('2d')
    ctx.strokeStyle = color
    ctx.fillStyle = color
}

function touchScreenColor() {
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
