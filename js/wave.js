var waveObj = function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r =[];
	this.color =[];
}

waveObj.prototype.num =10;
waveObj.prototype.init = function(){
	for(var i =0;i<this.num;i++){
		this.alive[i] = false;
		this.r[i] =0;
		this.color[i] = "white";
	}
}

waveObj.prototype.draw = function() {
	cxt1.save();
	for(var i =0;i<this.num;i++){
		if(this.alive[i]){ 
		cxt1.beginPath();
		this.r[i]+= 0.04*detala;
		if(this.r[i]>=50)
		{
			this.alive[i] = false;
			break;
		}
		cxt1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2,true);
		var aliph  = 1- this.r[i]/50;
		cxt1.lineWidth = 0.8;
		cxt1.shadowColor = this.color[i];
		cxt1.shadowBlur =2;
		cxt1.closePath();
		cxt1.strokeStyle="rgba(255,255,255,"+aliph+")";
		cxt1.stroke();
		
	}
	}
	cxt1.restore();
}
waveObj.prototype.born = function(x,y,color){

	for(var i =0;i<this.num;i++){
		if(!this.alive[i]){
		this.alive[i] = true;
		this.r[i] =10;
		this.x[i] = x;
		this.y[i] = y;
		this.color[i] = color;
		}
	}
}