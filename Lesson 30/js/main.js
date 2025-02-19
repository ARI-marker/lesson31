

var meridian = "AM";

if(hours >= noon){
    meridian = "PM";
}

var clockTime = hours + ":" + minutes + ":" + seconds + ":" + meridian;








var oneSecond = 1000;

setInterval(showCurrentTime , oneSecond);

function changeTime(){
    var time = new Date().getHours();
    console.log(time);

    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById('timeImage')

    if( time == wakeuptime){
        image = "img/morning.gif";
        console.log("morning");
    }
    else if(time==sleeptime){
        image = "img/night.gif";
        console.log("night");
    }
    imageHTML.src = image;
    console.log(imageHTML.src)
}

function updateClock(){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

    wakeuptime = wakeUpTimeSelector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector');

    dstime = dsTimeSelector.value;

    var sleepTimeSelector = document.getElementById('sleepTimeSelector');

    sleeptime = sleepTimeSelector.value;
}

var saveButton = document.getElementById('saveButton');

saveButton.addEventListener("click",updateClock);