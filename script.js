// $('#jumbo-video').bind('ended', function () {
//   $('#jumbo-video').replaceWith('<img id="poster" src="assets/jumbotron.jpg" />');
// });
// $(document).ready(function(){
//   var video = document.getElementById("jumbo-video");
//   var muteButton = document.getElementById("mute");
//   var playButton = document.getElementById("play-pause");

//   muteButton.addEventListener("click", function() {
//     if (video.muted == false) {
//       // Mute the video
//       video.muted = true;

//       // Update the button text
//       muteButton.innerHTML = "Ljud på";
//     } else {
//       // Unmute the video
//       video.muted = false;

//       // Update the button text
//       muteButton.innerHTML = "Ljud av";
//     }
//   });

//   playButton.addEventListener("click", function() {
//     if (video.paused == true) {
//       // Play the video
//       video.play();

//       // Update the button text to 'Pause'
//       playButton.innerHTML = "Pause";
//     } else {
//       // Pause the video
//       video.pause();

//       // Update the button text to 'Play'
//       playButton.innerHTML = "Play";
//     }
//   });

// });

var vid = videojs("jumbo-video");
vid.on("ended", function(){
    vid.posterImage.show();
    vid.bigPlayButton.show();
    vid.currentTime(0);
});

var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-32252579-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var delta, el, prefixes, seasonbegin, seasonend, today, transform2D;

today = new Date();

seasonbegin = new Date('July 1, ' + today.getFullYear());

seasonend = new Date('December 31, ' + today.getFullYear());

if (seasonbegin < today && today < seasonend) {
  document.getElementById('countdown_info').innerHTML = "Säsongen slutar om";
  delta = Math.floor((seasonend.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) + 1);
  document.getElementById('countdown').innerHTML = delta;
} else {
  if (today > seasonend) {
    seasonbegin.setDate(seasonbegin.getDate() + 365);
  }
  delta = Math.floor((seasonbegin.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) + 1);
  document.getElementById('countdown').innerHTML = delta;
}

if (delta === 1) {
  document.getElementById('countdown_days').innerHTML = "dag";
}

document.getElementById('contact-us').addEventListener('click', function() {
  var shake;
  shake = document.getElementById('shake');
  shake.className = 'active';
  return setTimeout(function() {
    return shake.className = '';
  }, 400);
});

prefixes = 'transform WebkitTransform MozTransform msTransform'.split(' ');

el = document.createElement('div');

transform2D = 0;

while (transform2D !== true) {
  transform2D = document.createElement('div').style[prefixes[transform2D++]] !== undefined || transform2D;
}

if (transform2D) {
  document.documentElement.className = 'csstransforms';
}
