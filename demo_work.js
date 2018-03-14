// JavaScript Document

var i=10000000;

function timedCount()
{
    var str;
    console.time('控制台计时器1');
    for(var x = 0;x<i;x++){
        str = 'worker' + x;
    }
    postMessage(str);
    console.timeEnd('控制台计时器1');
}

timedCount();