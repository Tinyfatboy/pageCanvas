var $canvasWrapper = $('.canvasWrapper');

let width = $canvasWrapper.width();
let height = $canvasWrapper.height();

var deviceWidth = window.screen.width

var $canvas = $('<canvas></canvas>').attr('height', height).attr('width', width);
var canvas = $canvas[0];
$canvas.appendTo($canvasWrapper);

$canvas.css({
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'white'
});

