
function GameCanvas(canvasname, funcpaint, marginside)
{
	if(typeof(funcpaint)=="undefined" || funcpaint==null)
		throw new Error("funcpaint is invalid!");
	if(typeof(canvasname)=="undefined" || canvasname==null)
		throw new Error("Element id=\""+canvasname+"\" was not found.");
	var canvasname = canvasname;
	var gameObjects = null;
	var gamespeed = 1;
	var marginside = marginside ? marginside : 0;
	var gamemargin;
	this.paint = function(){
		var canvas = document.getElementById(canvasname);
		gamemargin = ({left: marginside, right: canvas.width-marginside});
		try{
			funcpaint(canvas);
		}catch(e){}
		if(typeof(gameObjects)!="undefined" && gameObjects!=null
			&& typeof(canvas)!="undefined" && canvas!=null)
		{
			var ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.rect(0, 0, ctx.width, ctx.height);
			canvas.fillStyle = "blue";
			ctx.fill();
			for(var i=0; i<gameObjects.length; ++i)
				gameObjects[i].paint(ctx);
		}
		if(this.paint)
			setTimeout(this.paint, gamespeed);
		else if(arguments.callee)
			setTimeout(arguments.callee, gamespeed);
		else
			throw new Error("paint is undefined!");
	};
	this.addGameObject = function(gameobj)
	{
		if(typeof(gameObjects)!="undefined" && gameObjects!=null)
			gameObjects.push(gameobj);
		else
			gameObjects = [gameobj];
	};
	this.paint();
	this.getMargins = function()
	{
		return gamemargin;
	}
}

