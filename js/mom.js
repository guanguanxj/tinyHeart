var momObj = function(){
	this.x ;
	this.y ;
	this.angle;//旋转角度
	this.bigEye =[];//new Image();
	//this.bigBody =new Image();
	this.bodyCount = 0;
	this.bodyOrange = [];
	this.bodyBlue = [];
	this.bigTail =[];//new Image();
	this.bigTailTimer = 0;
	this.bigTailCount = 0;

	this.bigEyeTimer =0;
	this.bigEyeInterval =0;
	this.bigEyeCount =0;
}
momObj.prototype.init = function() {
	// body...
	this.x =canWidth*0.5;
	this.y =canHeight*0.5;
	this.angle=0;
	//this.bigEye.src="./src/bigEye0.png";
	//this.bigBody.src="./src/bigSwim0.png";
	for(var i= 0;i<8;i++){
		this.bigTail[i] = new Image();
		this.bigTail[i].src ="./src/bigTail"+i+".png";
		this.bodyOrange[i] = new Image();
		this.bodyOrange[i].src="./src/bigSwim"+i+".png";
		this.bodyBlue[i] = new Image();
		this.bodyBlue[i].src = "./src/bigSwimBlue"+i+".png"; 
	}
	for(var i =0;i<2;i++){
		this.bigEye[i] = new Image();
		this.bigEye[i].src ="./src/bigEye"+i+".png";
	}
};
momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x, 0.95); 
	this.y = lerpDistance(my, this.y, 0.95); 
	var beta = Math.atan2(my-this.y,mx-this.x)+Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);
	this.bigTailTimer += detala;
	if(this.bigTailTimer>60){
		this.bigTailTimer %=60;
		this.bigTailCount=(this.bigTailCount+1)%8;
	}
	this.bigEyeTimer += detala;
	if(this.bigEyeTimer>this.bigEyeInterval)
	{	
		this.bigEyeCount =(this.bigEyeCount+1)%2;
		if(this.bigEyeCount ==0)
		{
			this.bigEyeInterval = Math.random()*1200+2000;
		}
		else
		{
			this.bigEyeInterval =300;
		}
		this.bigEyeTimer %=this.bigEyeInterval;
	}
	cxt1.save();
	cxt1.translate(this.x,this.y);
	cxt1.rotate(this.angle);
	cxt1.drawImage(this.bigTail[this.bigTailCount],-this.bigTail[this.bigTailCount].width*0.5+30,-this.bigTail[this.bigTailCount].height*0.5);
	if(score.score%200==0)
	{
		cxt1.drawImage(this.bodyBlue[this.bodyCount],-this.bodyBlue[this.bodyCount].width*0.5,-this.bodyBlue[this.bodyCount].height*0.5);
	}
	else
	{
		cxt1.drawImage(this.bodyOrange[this.bodyCount],-this.bodyOrange[this.bodyCount].width*0.5,-this.bodyOrange[this.bodyCount].height*0.5);
	}
	
	cxt1.drawImage(this.bigEye[this.bigEyeCount],-this.bigEye[this.bigEyeCount].width*0.5,-this.bigEye[this.bigEyeCount].height*0.5);
	cxt1.restore();
}