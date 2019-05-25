function onloaded() {
	stopLoading();
}
function stopLoading() {
	document.getElementsByTagName("main")[0].style.display = "none";
	document.getElementsByTagName("main")[1].style.visibility = "visible";
	
	document.getElementById('video').addEventListener('ended', function() {
		document.getElementById('projektbutton').click();
	});
	
	var player = videojs('video');
	document.getElementById("video").appendChild(document.getElementById("videooverlay"));
}

window.onload = onloaded;
setTimeout(stopLoading, 7000);

function scrollToInfo() {
	
	var player = videojs('video');
	player.pause();
	if (player.isFullscreen()) {
		player.exitFullscreen();
	}
	
	setTimeout(scrollToInfoFunctionCore, 300);
}
function scrollToInfoFunctionCore() {
	var scrollY = document.getElementById('videoanker').offsetTop + 25;
	try {
		document.getElementById('scrollviewanker1').scroll({left: 0, top: scrollY, behavior: "smooth"});
	} catch (e) {
		document.getElementById('scrollviewanker1').scrollTop = scrollY;
	}
	try {
		document.getElementById('scrollviewanker2').scroll({left: 0, top: scrollY, behavior: "smooth"});
	} catch (e) {
		document.getElementById('scrollviewanker2').scrollTop = scrollY;
	}
}

function scrollToTop() {
	var videosectionntainer = document.getElementById("videosectionntainer");
	videosectionntainer.style.display = "block";
	
	var player = videojs('video');
	player.play();
	
	setTimeout(scrollToTopFunctionCore, 300);
}
function scrollToTopFunctionCore() {
	try {
		document.getElementById('scrollviewanker1').scroll({left: 0, top: 0, behavior: "smooth"});
	} catch (e) {
		document.getElementById('scrollviewanker1').scrollTop = 0;
	}
	try {
		document.getElementById('scrollviewanker2').scroll({left: 0, top: 0, behavior: "smooth"});
	} catch (e) {
		document.getElementById('scrollviewanker2').scrollTop = 0;
	}
}
