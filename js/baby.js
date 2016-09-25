var babyObj = function(){
	this.x ;
	this.y ;
	this.angle;//旋转角度
	this.babyEye =[];//new Image();
	this.babyBody =[];//new Image();
	this.babyTail=[];// =new Image();
	this.babyTailTimer =0;
	this.babyTailCount =0;

	this.babyEyeTimer =0;
	this.babyEyeCount =0;
	this.babyEyeInterval = 0;

	this.babyBodyTimer = 0;
	this.babyBodyCount =0;

	this.babyIsAlive = true;
}
babyObj.prototype.init = function() {
	// body...
	this.x =canWidth*0.5-50;
	this.y =canHeight*0.5+50;
	this.angle=0;
	//this.babyEye.src="./src/babyEye0.png";
	//this.babyBody.src="./src/babyFade0.png";
	for(var i =0;i<8;i++){
		this.babyTail[i] = new Image();
		this.babyTail[i].src="./src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		this.babyEye[i] = new Image();
		this.babyEye[i].src = "./src/babyEye"+i+".png";
	}
	for (var i = 0; i < 20; i++) {
		this.babyBody[i] = new Image();
		this.babyBody[i].src = "./src/babyFade"+i+".png";
	}
};
babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x, this.x, 0.99); 
	this.y = lerpDistance(mom.y, this.y, 0.99); 
	var beta = Math.atan2(mom.y-this.y,mom.x-this.x)+Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);

	this.babyTailTimer += detala;
	if(this.babyTailTimer>50){
		this.babyTailTimer %=50;
		 this.babyTailCount=(this.babyTailCount+1)%8;
	}

	this.babyEyeTimer += detala;
	if(this.babyEyeTimer>this.babyEyeInterval)
	{
		this.babyEyeCount = (this.babyEyeCount+1)%2;
		
		if(this.babyEyeCount==0)
		{
			this.babyEyeInterval = Math.random()*1500+1000;
		}
		else{
			this.babyEyeInterval = 250;
		}
		this.babyEyeTimer %= this.babyEyeInterval;
	}

	this.babyBodyTimer += detala;
	if(this.babyBodyTimer>300 && this.babyIsAlive)
	{
		this.babyBodyCount = (this.babyBodyCount+1)%20;
		this.babyBodyTimer %= 300;
		if(this.babyBodyCount==19)
		{
			//game over
			this.babyIsAlive =false;
			score.gameOver = true;
		}
	}

	//if(this.babyIsAlive){
		cxt1.save();
		cxt1.translate(this.x,this.y);
		cxt1.rotate(this.angle);
		cxt1.drawImage(this.babyTail[this.babyTailCount],-this.babyTail[this.babyTailCount].width*0.5+25,-this.babyTail[this.babyTailCount].height*0.5);
		
		cxt1.drawImage(this.babyBody[this.babyBodyCount],-this.babyBody[this.babyBodyCount].width*0.5,-this.babyBody[this.babyBodyCount].height*0.5);
		cxt1.drawImage(this.babyEye[this.babyEyeCount],-this.babyEye[this.babyEyeCount].width*0.5,-this.babyEye[this.babyEyeCount].height*0.5);
		
		cxt1.restore();
	//}
}