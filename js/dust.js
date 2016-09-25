var dustObj = function(){
	this.x =[];
	this.y =[];
	this.amp =[];
	this.No=[];
	this.degree;
	this.src= [];
}
dustObj.prototype.num =30;
dustObj.prototype.init=function(){
	for(var i =0; i<this.num;i++)
	{
		this.x[i] = Math.random()*canWidth;
		this.y[i] = Math.random()*canHeight;
		this.amp[i] = 20+Math.random()*50;
		this.No[i] = Math.floor(Math.random()*7);
		this.src[i] = "./src/dust"+this.No[i]+".png";
	}
	this.degree =0;
}
dustObj.prototype.draw = function(){
	this.degree += detala*0.0008;
	var l = Math.sin(this.degree);
	for(var i =0;i<this.num;i++){
	var img = new Image();
	img.src = this.src[i]
	cxt1.drawImage(img,this.x[i]+this.amp[i]*l,this.y[i]);
}
}