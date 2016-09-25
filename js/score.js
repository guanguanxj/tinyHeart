var scoreObj = function(){
	this.fruitNum =0;
	this.score =0;
	this.gameOver = false;
	this.gameOverAliph =0;
}

scoreObj.prototype.reset=function(){
	this.fruitNum =0;
	this.score =0;
}

scoreObj.prototype.draw = function(){
	cxt1.fillStyle="white";
	cxt1.font ="20px Verdana";
	cxt1.textAlign ="center";//left right center
	cxt1.fillText("score:"+this.score,canWidth*0.5,canHeight-30);
	if(this.gameOver)
	{
		this.gameOverAliph += detala * 0.0003;
		
		cxt1.fillStyle="rgba(255,255,255,"+this.gameOverAliph+")";
		cxt1.fillText("GAME OVER",canWidth*0.5,canHeight*0.5);
	}
}