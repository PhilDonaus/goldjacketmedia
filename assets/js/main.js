function scrollTo(hash) {
    location.hash = "#" + hash;
}

var framenum = 0,
    playbackConst = window.innerHeight,
    setHeight = document.getElementById("set-height"),
    video = document.getElementById("v0");

video.addEventListener('loadedmetadata', function(){
  setHeight.style.height = Math.floor(video.duration) * playbackConst + "px";
});

function scrollPlay(){
  var framenum = window.pageYOffset/playbackConst;
  video.currentTime = framenum;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

