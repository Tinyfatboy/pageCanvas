var $canvasWrapper = $('.canvasWrapper')

let width = $canvasWrapper.width()
let height = $canvasWrapper.height()

var $canvas = $('<canvas></canvas>').attr('height', height).attr('width', width)
var canvas = $canvas[0]
$canvas.appendTo($canvasWrapper)

$canvas.css({
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'white',
    borderRadius: '3vw'
})

let lastPoint =null

$canvas.on('touchstart', function (e) {
    let touch = e.originalEvent.touches[0]
    let {x, y} = getMousePosition(canvas, touch)
    lastPoint = {x: x, y: y}

    if(panelState === 'pen'){
        addPoint(x, y)
    }else if(panelState === 'erase'){

    }else if(panelState === 'painter'){
        paintPoint(x, y)
    }
})

$canvas.on('touchmove', function (e) {
    e.preventDefault()
    let touch = e.originalEvent.touches[0]
    let {x, y} = getMousePosition(canvas, touch)

    if(panelState === 'pen'){
        drawLine(lastPoint.x, lastPoint.y, x, y)
    }else if(panelState === 'erase'){

    }else if(panelState === 'painter'){
        paintPoint(x, y)
    }
    lastPoint = {x: x, y: y}
})

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    return {x, y}
}

function addPoint(x, y) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(x, y, 1, 1);
}

function drawLine(x1, y1, x2, y2) {
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function paintPoint(x, y) {
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(x,y,5,0,Math.PI*2)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.stroke()
}

