

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var x = 200;
var y = 200;
var r = 50;
var xDirection = 1;
var yDirection = 1;
var red = 0;
var blue = 0;
var green = 0;
var clicks = 0;


function drawBall(){
	strokeStyle = "yellow";
	context.fillStyle ="#ff0000";
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.clearRect(0,0,500,500)
	context.fill();
	context.stroke();
	if((x > 500-r) || (x < r)){
		// right side reached
		xDirection = -xDirection
	}
	if((y > 500-r) || (y < r)){
		// right side reached
		yDirection = -yDirection
	}
	randomX = Math.random() * 4
	randomY = Math.random() * 4
	x += 5 * xDirection;
	y += 4 * yDirection;
	red += 5;
	blue += 1;
	green += 1;
}
canvas.addEventListener("click", function(event){
console.log(event.x, event.y);
	if ((event.x <= x+r) && (event.x >= x-r) && (event.y <= y+r) && (event.y >= y-r)){
		console.log("Ball clicked")
		clicks++
		document.getElementById('click-count').innerHTML = String(clicks)

	}
})

	





var ball = setInterval(drawBall,20)





















