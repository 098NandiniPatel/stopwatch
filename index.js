var hr=min=sec=ms=00;
var startBtn=document.getElementById('start');
var stopBtn=document.getElementById('stop');
var resetBtn=document.getElementById('reset');
var appendHr=document.getElementById('hour');
var appendMin=document.getElementById('minute');
var appendSec=document.getElementById('second');
var appendMs=document.getElementById('milisecond');

var counter;


function startTimer(){
    ms++;
    if(ms<9){
        appendMs.innerHTML="0"+ms;
    }
    if(ms>9){
        appendMs.innerHTML=ms;
    }
    if(ms>99){
        sec++;
        appendSec.innerHTML="0"+sec;
        ms=0;
        appendMs.innerHTML="0"+0;
    }
   
    if(sec>9){
        appendSec.innerHTML=sec;
    }
    if(sec>59){
        min++;
        appendMin.innerHTML="0"+min;
        sec=0;
        appendSec.innerHTML="0"+0;
    }

    if(min>9){
        appendMin.innerHTML=min;
    }
    if(min>59){
        hr++;
        appendHr.innerHTML="0"+hr;
    }
    if(hr>9){
        appendHr.innerHTML=hr;
    }
}
startBtn.onclick=function(){
    counter=setInterval(startTimer);
};
stopBtn.onclick=function(){
    clearInterval(counter);
};

resetBtn.onclick=function(){
    clearInterval(counter);
    hr="00";
    min="00";
    sec="00";
    ms="00";
    appendHr.innerHTML=hr;
    appendMin.innerHTML=min;
    appendSec.innerHTML=sec;
    appendMs.innerHTML=ms;

}

