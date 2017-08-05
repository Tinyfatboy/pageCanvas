var $pen = $('.pen')
var $erase = $('.erase')
var $painter = $('.painter')

var $panel = $('.panel')

var panelState = 'pen'
testPanel(panelState)

if(deviceWidth > 415){
    toolsOnPad()
}else {
    toolsOnPhone()
}

function toolsOnPhone() {
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
            e.preventDefault()
            let preState = panelState
            panelState = targetElement.className
            if(panelState === 'clear'){
                clearCanvas(canvas)
                panelState = preState
            }else if(panelState === 'download'){
                download()
                panelState = preState
            }else{
                testPanel(panelState)
            }
        }
    })

}

function toolsOnPad() {
    $panel.on('click', function (e) {
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
            e.preventDefault()
            let preState = panelState
            panelState = targetElement.className
            if(panelState === 'clear'){
                clearCanvas(canvas)
                panelState = preState
            }else if(panelState === 'download'){
                download()
                panelState = preState
            }else{
                testPanel(panelState)
            }
        }
    })
}

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

function download() {
    var downloadLink = $('<a></a>')
    downloadLink.attr('href', canvas.toDataURL())
    downloadLink.attr('download', 'myPainting.png')
    var event = new MouseEvent('click')
    downloadLink.on('click', function () {

    })
    downloadLink[0].dispatchEvent(event)
}