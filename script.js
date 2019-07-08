function progressBar(){
	var progress = document.getElementById('progress');
	var width = 0;
	var interval = setInterval(progressDuration, 60);
	
	
	function progressDuration(){
		if(width >= 100){
			clearInterval(interval);
			window.location = 'home.html';
		}else{
			width++;
			progress.style.width = width + '%';
		}
	}
	
}

function launchProgress(){
	document.getElementById('result').style.display="inline";
	progressBar();
}