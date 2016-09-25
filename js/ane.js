//海葵
var aneObj = function(){
	//start point,control point ,end point
	//this.x =[];
	this.rootx =[];
	this.headx =[];
	this.heady =[];
	this.degree =0;
	this.amp =[];//摆动振幅
	//this.len =[];
}

aneObj.prototype.num= 50;
aneObj.prototype.init = function() {
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i]= canHeight-200+ Math.random()*50;
		this.amp[i] = Math.random()*50+50;
		//this.x[i] = i*16+Math.random()*20;
		//this.len[i] = 200+ Math.random()*50;
	}
};
aneObj.prototype.draw = function() {
	cxt2.save();
	this.degree += detala*0.0008;//随每一帧时间间隔控制角度
	var l = Math.sin(this.degree);//[-1,1]
	cxt2.globalAlpha =0.6;
	cxt2.strokeStyle="#3b154e";
	cxt2.lineWidth=15;
	cxt2.lineCap="round";
	for(var i = 0; i <this.num; i++) {
		cxt2.beginPath();
		cxt2.moveTo(this.rootx[i],canHeight);//起始点
		//二次贝塞尔曲线
		//控制点-结束点
		cxt2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i]+l*this.amp[i],this.heady[i]);	
		//cxt2.lineTo(this.x[i],canHeight-this.len[i]);		
		cxt2.stroke();
	}
	cxt2.restore();
};