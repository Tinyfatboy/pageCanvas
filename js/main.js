let lastPoint =null;

function drawOnPhone() {
    $canvas.on('touchstart', function (e) {
        let event = e.originalEvent.touches[0];
        let {x, y} = getMousePosition(canvas, event);
        lastPoint = {x: x, y: y};

        if(panelState === 'pen'){
            addPoint(x, y)
        }else if(panelState === 'erase'){
            eraseCanvas(x, y)
        }else if(panelState === 'painter'){
            paintPoint(x, y)
        }
    });

    $canvas.on('touchmove', function (e) {
        e.preventDefault();
        let event = e.originalEvent.touches[0];
        let {x, y} = getMousePosition(canvas, event);

        if(!lastPoint){
            return
        }
        if(panelState !== 'erase'){
            drawLine(lastPoint.x, lastPoint.y, x, y)
        }else{
            eraseCanvas(x, y)
        }
        lastPoint = {x: x, y: y}
    })
}

function drawOnPad() {
    $canvas.on('mousedown', function (e) {
        let event = e.originalEvent;
        let {x, y} = getMousePosition(canvas, event);
        lastPoint = {x: x, y: y};

        if(panelState === 'pen'){
            addPoint(x, y)
        }else if(panelState === 'erase'){
            eraseCanvas(x, y)
        }else if(panelState === 'painter'){
            paintPoint(x, y)
        }
        $canvas.on('mousemove', mouseMove)
    });


    $canvas.on('mouseup', function () {
        $canvas.unbind('mousemove', mouseMove)
    })

    $canvas.on('mouseleave', function () {
        $canvas.unbind('mousemove', mouseMove)
    })
}

function mouseMove(e) {
    let event = e.originalEvent;
    let {x, y} = getMousePosition(canvas, event);

    if(!lastPoint){
        return
    }
    if (panelState !== 'erase') {
        drawLine(lastPoint.x, lastPoint.y, x, y)
    } else {
        eraseCanvas(x, y)
    }
    lastPoint = {x: x, y: y}
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return {x, y}
}

function addPoint(x, y) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(x, y, 1, 1);
}

function drawLine(x1, y1, x2, y2) {
    var ctx = canvas.getContext('2d');
    if(panelState === 'painter'){
        ctx.lineWidth = 12;
        ctx.lineCap="round"
    }else {
        ctx.lineWidth = 1;
        ctx.lineCap="butt"
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke()
}

function paintPoint(x, y) {
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke()
}

function eraseCanvas(x, y){
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2,false);
    ctx.clip();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.restore()
}

