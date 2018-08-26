var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
ctx.lineWidth = 15;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '40px Trebuchet MS';
ctx.fillStyle = 'black';

/**
 * @closure
 */
var draw = (function () {
    var start = 1.5 * Math.PI; // Start circle from top
    var end = (2 * Math.PI) / 100; // One percent of circle

    /**
     * Draw percentage of a circle
     *
     * @param int x Coordinate
     * @param int y Coordinate
     * @param int p Percentage of circle
     * @param string text Text to print
     * @param string color Stroke color
     * @return void
     */
    return function (x, y, p, text, color) {
        p = p || 100; // If 0% we draw full circle
        ctx.strokeStyle = color;

        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.arc(x, y, 50, start, p * end + start, false);
        ctx.stroke();
    };
}());

var clock = function () {
    // Get times
    var date = new Date;
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    // Find percentage
    var hp = 100 / 12 * (h % 12);
    var mp = 100 / 60 * m;
    var sp = 100 / 60 * s;
    // Ensure double digits
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    // Draw
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    draw(125, 100, hp, h, 'palevioletred');
    draw(250, 100, mp, m, 'limegreen');
    draw(375, 100, sp, s, 'steelblue');

    setTimeout(clock, 500);
};

clock();