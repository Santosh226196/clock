// new date()

function clock() {
    // assiging date
    let dat = new Date();
    let hours = dat.getHours()
    let minutes = dat.getMinutes()
    let sec = dat.getSeconds()
    let day = dat.getDay()
    let date = dat.getDate()
    let month = dat.getMonth()
    let year = dat.getFullYear()

    // switch
    switch (day) {
        case 0:
            day = "sunday"
            break;
        case 1:
            day = "monday"
            break;
        case 2:
            day = "tuesday"
            break;
        case 3:
            day = "wed"
            break;
        case 4:
            day = "thurs"
            break;
        case 5:
            day = "friday"
            break;
        case 6:
            day = "satrday"
            break;
        case 7:
            day = "sun"
            break;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes ="0" + minutes;
    }
    if(sec<10){
        sec = "0" + sec
    }

    month=month +1
    document.getElementById('class').innerHTML=hours + ":" + minutes + ":" + sec;

    document.getElementById('day-time').innerHTML= day + "," + date + "." + month + "." + year;



    }
    window.onload= function(){
        clock()
}
setInterval(clock , 1000);