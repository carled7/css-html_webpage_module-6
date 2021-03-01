
let video = document.getElementById("video");

let controlPanel = document.getElementById("control-panel");
controlPanel.style.visibility = "hidden";

function showPlayer(){
    controlPanel.style.visibility = "inherit";
}
function hidePlayer(){
    controlPanel.style.visibility = "hidden";
}

function playFunction(){
    video.volume = 0.5;
    video.play();
    console.log(video.volume);
}
function pauseFunction(){
    video.pause();
}
function skipForward(){
    video.currentTime +=10;
}
function skipBack(){
    video.currentTime -=10;
}
function turnUp(){
    video.volume += 0.1;
}
function turnDown(){
    video.volume -= 0.05;
}