var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

var x = 200;
var y = 100;
var stepCount = 0; //брой стъпки в една посока
var direction; //посока на движение, 
var timer;
var myX;
var myY;

function drawDot() {
	ctx.clearRect(0, 0, 400, 200);
	//на случаeн принцип се избира напраление и се прибавят пиксели, стъпки 
	if (stepCount==0){ //ako стъпкта е 0 да избере друго направление и да се движи в него
		stepCount = Math.floor(15*Math.random());
		direction = Math.floor(8*Math.random()); //случайно число от 0 до 7
	}
	else {
		stepCount--;
	}
	switch (direction) {
		case 0:
			// надолу
			y = y-1;
			break;
		case 1:
			// надясно
			x=x+1;
			break;
		case 2:
			// надолу
			y = y+1;
			break;
		case 3:
			// вляво
			x = x-1;
			break;
		case 4:
			// надясно нагоре
			x=x+1;
			y=y-1;
			break;
		case 5:
			// надясно надолу
			x=x+1;
			y=y+1;
			break;
		case 6:
			// наляво долу
			x=x-1;
			y=y+1;
			break;
		case 7:
			// вляво горе
			x=x-1;
			y=y-1;
			break;
	}
	if (x<0 || x>400 || y<0 || y>200 ) stepCount=0; //ако отиде в края на 
	ctx.fillRect(x-3, y-3, 6, 6);
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(myX, myY);
	ctx.stroke();
	timer = setTimeout(drawDot, 100);
}
	drawDot();

	canvas.onmousemove = function(event){
	myX = event.offsetX;
	myY = event.offsetY;
}
