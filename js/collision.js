function momEatFruits(){
	if(!score.gameOver){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i])
		{
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l<=900)
			{
				fruit.dead(i);
				mom.bodyCount++;
				score.fruitNum ++;
				if(mom.bodyCount>7)
				{
					mom.bodyCount =7;
				}
				if(fruit.fruitType[i]==fruit.blue)
				{
					//mom.bigBody = mom.bodyBlue[mom.bodyCount];
					score.score =score.score+200;
				}
				else{
					//mom.bigBody = mom.bodyOrange[mom.bodyCount];
					score.score =score.score+100;
				}
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
}
}
//大鱼喂小鱼
function momFeedBody(){
	//计算大鱼与小鱼之间的距离
	if(!score.gameOver){
	var l = calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l<=500 && score.fruitNum>0)
	{
		mom.bodyCount--;
		baby.babyIsAlive= true;
		baby.babyBodyCount = 0;
		score.reset();
		wave.born(baby.x,baby.y,"orange");
	}
}
}