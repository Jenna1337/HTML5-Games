
function GameCanvas(canvasname, funcpaint)
{
	if(typeof(funcpaint)=="undefined" || funcpaint==null)
		throw new Error("funcpaint is invalid!");
	if(typeof(canvasname)=="undefined" || canvasname==null)
		throw new Error("Element id=\""+canvasname+"\" was not found.");
	this.canvasname = canvasname;
	this.gameObjects = null;
	this.gamespeed = 1;
	
	var THIS = {Value: this};
	this.paint = function(){
		this.canvas = document.getElementById(this.canvasname);
		funcpaint(this.canvas);
		if(typeof(this.gameObjects)!="undefined" && this.gameObjects!=null
			&& typeof(this.canvas)!="undefined" && this.canvas!=null)
		{
			var ctx = this.canvas.getContext("2d");
			ctx.beginPath();
			ctx.rect(0, 0, ctx.width, ctx.height);
			this.canvas.fillStyle = "blue";
			ctx.fill();
			for(var i=0; i<this.gameObjects.length; ++i)
				this.gameObjects[i].paint(ctx);
		}
		setTimeout(this.paint, this.gamespeed);
	};
	this.addGameObject = function(gameobj)
	{
		if(typeof(gameObjects)!="undefined" && gameObjects!=null)
			this.gameObjects.push(gameobj);
		else
			this.gameObjects = [gameobj];
	};
	this.paint();
}