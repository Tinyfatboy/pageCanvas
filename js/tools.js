var $pen = $('.pen')
var $clear = $('.clear')
var $erase = $('.erase')
var $painter = $('.painter')
var $download = $('.download')

var $panel = $('.panel')

var panelState = 'pen'
testPanel(panelState)

$panel.on('touchstart', function (e) {
    var targetElement = e.originalEvent.target
    while (targetElement.tagName !== 'DIV') {
        if (targetElement === $panel[0]) {
            targetElement = null
            break
        } else {
            targetElement = targetElement.parentNode
        }
    }

    if (targetElement) {
        panelState = targetElement.className
        if (panelState !== 'download' && panelState !== 'clear') {
            testPanel(panelState)
        }
        else if(panelState === 'clear'){
            console.log(canvas);
            clearCanvas(canvas)
        }
    }
})

function testPanel(panelState) {
    if (panelState === 'pen') {
        $panel.children('div').css('background', '#FFFFFF')
        $pen.css('background', '#F074A4')
    } else if (panelState === 'erase') {
        $panel.children('div').css('background', '#FFFFFF')
        $erase.css('background', '#F074A4')
    } else if (panelState === 'painter') {
        $panel.children('div').css('background', '#FFFFFF')
        $painter.css('background', '#F074A4')
    } else {
        $panel.children('div').css('background', '#FFFFFF')
        $pen.css('background', '#F074A4')
    }
}

function clearCanvas(canvas) {
    var ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}