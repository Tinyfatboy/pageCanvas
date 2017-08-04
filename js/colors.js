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
            console.log(currentColor)
            setCurrentColor(canvas, currentColor)
        }
    })
}

function setCurrentColor(canvas, color) {
    var ctx = canvas.getContext('2d')
    ctx.strokeStyle = color
    ctx.fillStyle = color
}