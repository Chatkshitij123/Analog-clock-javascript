// let's understand the concept
// 12 hr = 360 deg;
// 1 hr = 360/12 = 30
// h hour = 30h + 
// 60 min = 30
//1 min = 30/60 = 1/2; m min = 1/2m
//60 min = 360 deg
//1 min = 360/60 = 6 deg
//m min = 6m
//same for sec 6s
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    //getting hour, mins, secs from date;
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);