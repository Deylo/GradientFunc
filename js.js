/**
 * Created by dmitriy on 19.01.16.
 */
function gradient(fColor,lColor,cl) {
    var elements = document.getElementsByClassName(cl);
    for (var i = 0; i < elements.length; i++) {
        generateHTML(elements[i]);
    }

    function generateHTML(elem) {
        var letterArr = elem.innerHTML.split('');
        var buf = '';
        var i;
        var rgbArr=generateRgb(fColor,lColor,letterArr.length);

        for (i = 0; i < letterArr.length; i++) {
            buf += '<span style="color:' + rgbArr[i] + '">' + letterArr[i] + '</span>';
        }
        elem.innerHTML = buf;
    }

    function generateRgb(fC, lC, n) {
        var rgb=[];
        var buf = [];
        var avrColor=[];
        var fColorArr;
        var lColorArr;
        var i;
        fColorArr = splitToRgb(fC);
        lColorArr = splitToRgb(lC);

        for (i = 0; i < 3; i++) {
            avrColor[i] = (lColorArr[i] - fColorArr[i])/n;
        }

        for(i = 0;i < n;i++){
            for (var j = 0; j < 3; j++) buf[j] = Math.floor(fColorArr[j] + avrColor[j] * i);
            rgb.push('rgb('+buf.join(',')+')');
        }
        return rgb;
    }

    function splitToRgb(c) {
        var buf = [];
        for (var i = 0; i < 3; i++) buf[i] = parseInt(c.slice(1 + i * 2, 3 + i * 2),16);
        return buf;
    }
}