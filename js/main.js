var can1;
var can2;
var cxt1;
var cxt2;
var lastTime;
var detala;
var bgImg = new Image();
var canWidth;
var canHeight;
var ane;
var fruit;
var mom;
var baby;
//鼠标位置
var mx;
var my;
var score;
var wave;
var dust;
document.body.onload = game;
function game(){
	lastTime =Date.now();
	detala =0;

	init();
	gameloop();
}
function init(){
	//get canvas ,context
	can1 = document.getElementById("canvas1");//fornt:fish,UI,circle
	cxt1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background,food,ane
	cxt2 = can2.getContext("2d");
	bgImg.src="./src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	can1.addEventListener("mousemove",onMouseMove,false);
	mom= new momObj();
	mom.init();
	mx = canWidth*0.5;
	my = canHeight*0.5;
	baby = new babyObj();
	baby.init();
	score = new scoreObj();
	wave = new waveObj();
	wave.init();
	dust = new dustObj();
	dust.init();
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	detala = (now-lastTime)>40?40:now-lastTime;
	lastTime = now;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	cxt1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momEatFruits();
	momFeedBody();
	score.draw();
	wave.draw();
	dust.draw();
}
function onMouseMove(e)
{
	if(!score.gameOver){
		mx= e.offsetX==undefined?e.layerX:e.offsetX;
		my= e.offsetY==undefined?e.layerY:e.offsetY;
	}
}