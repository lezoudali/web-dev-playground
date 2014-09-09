var clickedTime; var createdTime = 0; var reactionTime ; var lowestTime = 100;
var box = document.getElementById('box');

function makebox () {

	setTimeout(function() {
		
		var randomColor = getRandomColor();
		while(randomColor == "#D3D1D1"){
			randomColor = getRandomColor();
		}

		if (Math.floor(Math.random() * 2)){
			box.style.borderRadius = "100%";
		}else{
			box.style.borderRadius = "0";
		}

		box.style.top = Math.random()*400+'px';
		box.style.left = Math.random()*600+'px';
		box.style.backgroundColor = randomColor;
		box.style.display = "block";
		createdTime = Date.now();
	}, Math.random() * 3000);

}

box.onclick = function() {
	clickedTime = Date.now()
	reactionTime = (clickedTime - createdTime)/1000;
	this.style.display = "none";
	document.getElementById('time').innerHTML = reactionTime;

	if (reactionTime < lowestTime){
		lowestTime = reactionTime;
		document.getElementById('lowestTime').innerHTML = lowestTime;
	}

	makebox();
}

 function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        } 
        return color;
}