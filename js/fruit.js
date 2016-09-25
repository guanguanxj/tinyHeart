var fruitObj=function(){
	this.alive = [];//boolean
	this.x =[];
	this.y=[];
	this.l =[];//果实大小
	this.spd=[];//果实速度
	this.fruitType =[];
	this.orange= new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function() {
	// body...
	for(var i =0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i] = 0;
		this.y[i] = 0;
		//this.l[i] =0 ;
		this.spd[i] = 0.02+Math.random()*0.017;
		this.fruitType[i] = Math.random()<0.3?this.blue:this.orange;
		//this.born(i);
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
};
fruitObj.prototype.draw = function() {
	//draw
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.l[i]<=14){
				//果实生长大小
				this.l[i] +=this.spd[i]*detala;
			}
			else
			{ //果实成熟后上升速度
				this.y[i] -= this.spd[i]*5*detala;
			}

		   cxt2.drawImage(this.fruitType[i],this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);	
			if(this.y[i]<100)
			{
				this.alive[i] =false;
			}
		}
	}

	//find ane,grow ,fly
};
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}
fruitObj.prototype.born=function(i){
	this.l[i] =0;
	var id =Math.floor(Math.random()*ane.num);
	this.x[i] =ane.headx[id];// ane.x[id];
	this.y[i] =ane.heady[id]//canHeight - ane.len[id];
	this.alive[i] = true;
}

function fruitMonitor(){
	var count=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) count++;
	}
	if(count<15)
	{
		//born a fruit;
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i = 0;i < fruit.num;i++)
		{
			if(!fruit.alive[i])
			{
				fruit.born(i);
				return;
			}
		}
}
