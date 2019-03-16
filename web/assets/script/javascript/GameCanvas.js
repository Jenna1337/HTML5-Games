
const animationMethod = window.requestAnimationFrame ? window.requestAnimationFrame : window.setTimeout;
class GameCanvas{
	constructor(canvasname, funcpaint){
		this.maxfps = 60;
		this.lastupdate = 0;
		if(typeof(funcpaint)=="undefined" || funcpaint==null)
			funcpaint=()=>{}
		if(typeof(canvasname)=="undefined" || canvasname==null)
			throw new Error("Canvas name cannot be "+canvasname+".");
		this.canvas = document.getElementById(canvasname);
		if(typeof(this.canvas)=="undefined" || this.canvas==null)
			throw new Error("Element id=\""+canvasname+"\" was not found.");
		this.ctx = this.canvas.getContext("2d");
		this.gameObjects = [];
		this.canvasname = canvasname;
		this.funcpaint=funcpaint;
		this.typestyles={};
		var t = this;
		this.paint();
	}
	redrawAll(){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
		for(var i in this.gameObjects){
				this.gameObjects[i].redraw();
			this.gameObjects[i].paint(this.ctx);
		}
	}
	paint(timestamp=performance.now()){
		if(timestamp-1000/this.maxfps>=this.lastupdate){
			this.lastupdate = timestamp;
			try{
				this.funcpaint(this.canvas);
			}catch(e){};
			for(var bind of keybinds)
				if(bind.active)
					bind.callback();
			this.redrawAll();
		}
		if(window.handleBindings)
			handleBindings();
		var t = this;
		animationMethod((arg)=>t.paint(arg), 1000/this.maxfps);
	}
	addGameObject(gameobj){
		this.gameObjects.push(gameobj);
	}
	addTypeStyles(typestyles){
		for(var st in typestyles){
			if(!this.typestyles[st])
				this.typestyles[st] = {};
			for(var attr in typestyles[st]){
				this.typestyles[st][attr] = typestyles[st][attr]
			}
		}
		console.log(typestyles)
	}
}

