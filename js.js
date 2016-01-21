/**
 * Created by dmitriy on 19.01.16.
 */
function gradient(fColor,lColor,cl){
    var elements=document.getElementsByClassName(cl);
    for(var i = 0;i<elements.length;i++){
        m(elements[i]);
    }

    function m(elem) {
        var letterArr = elem.innerHTML.split('');
        var buf = '';
        var fColorArr;
        var lColorArr;
        var n = [];
        var i;
        var letterColor = fColor;

        fColorArr = splitColor(fColor);
        lColorArr = splitColor(lColor);


        for (i = 0; i < 3; i++) {
            n[i] = (parseInt(lColorArr[i], 16) - parseInt(fColorArr[i], 16)) / letterArr.length;
        }


        for (i = 0; i < letterArr.length; i++) {
            buf += '<span style="color:' + letterColor + '">' + letterArr[i] + '</span>';
            letterColor = rgbColor(fColorArr, n, i);
        }

        elem.innerHTML = buf;
    }

    function splitColor(c){
        var buf = [];
        for(var i = 0;i<3;i++) buf[i] = c.slice(1+i*2,3+i*2);
        return buf;
    }

    function rgbColor(a,b,c){
        var buf = [];
        for(var i = 0;i<3;i++) buf[i] = Math.floor(parseInt(a[i],16)+b[i]*c);
        return 'rgb('+buf.join(",")+')';
    }
}