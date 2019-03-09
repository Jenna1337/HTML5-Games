
class GameCanvas{
	constructor(canvasname, funcpaint){
		if(typeof(funcpaint)=="undefined" || funcpaint==null)
			throw new Error("funcpaint is invalid!");
		if(typeof(canvasname)=="undefined" || canvasname==null)
			throw new Error("Element id=\""+canvasname+"\" was not found.");
		this.canvas = document.getElementById(canvasname);
		if(typeof(this.canvas)=="undefined" || this.canvas==null)
			throw new Error("Element id=\""+canvasname+"\" was not found.");
		this.ctx = this.canvas.getContext("2d");
		this.gameObjects = [];
		this.gamespeed = 10;
		this.canvasname = canvasname;
		this.funcpaint=funcpaint;
		var t = this;
		setTimeout(()=>t.paint(), this.gamespeed);
	}
	paint(){
		try{
			this.funcpaint(this.canvas);
		}catch(e){}
		//if(typeof(this.ctx)=="undefined" || this.ctx==null)
		//	return;
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
		for(var i=0; i<this.gameObjects.length; ++i){
			this.gameObjects[i].paint(this.ctx);
		}
		var t = this;
		setTimeout(()=>t.paint(), this.gamespeed);
	}
	addGameObject(gameobj){
		this.gameObjects.push(gameobj);
	}
}

