var canvas = document.getElementById("c1");
var context = canvas.getContext("2d");


//context.clearRect(0,0,400,200);

//context.lineWidth = "15";
//context.fillStyle = "red";
// context.strokeStyle = "green";

// context.rect(50,10,100,100);
// context.stroke();

// context.fillRect(50,10,100,100);

//context.beginPath();

context.lineWidth = "20";
context.strokeStyle = "red";


context.moveTo(100, 50);
context.lineTo(150, 150);
context.stroke();
context.lineCap = "round";


context.beginPath(); // za da mojem da zadadem drug cvqt na liniqta !!!

context.strokeStyle = "blue";
context.moveTo(200, 50);
context.lineTo(300, 50);
context.stroke();


canvas.onmousedown = function(event) {

	canvas.onmousemove = function(event) {



	
	var x = event.offsetX;
	var y = event.offsetY;

	context.fillRect(x,y,10,10);


	}

	canvas.onmouseup = function() {

	canvas.onmousemove = null;
	}


}

