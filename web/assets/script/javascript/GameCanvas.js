
function redraw(val, Func)
{
	var gmcanv = val.Value;
	var canvas = document.getElementById(gmcanv.canvasname);
	Func(canvas);
	if(typeof(gmcanv.gameObjects)!="undefined" && gmcanv.gameObjects!=null
		&& typeof(canvas)!="undefined" && canvas!=null)
	{
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.rect(0, 0, ctx.width, ctx.height);
		canvas.fillStyle = "blue";
		ctx.fill();
		for(var i=0; i<gmcanv.gameObjects.length; ++i)
			gmcanv.gameObjects[i].paint(ctx);
	}
	setTimeout(
		function(){redraw(val, Func)}, gmcanv.gamespeed);
}
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
		setTimeout(
			function(){redraw(THIS, funcpaint)}, THIS.gamespeed);
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