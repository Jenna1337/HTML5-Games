
HTMLCollection.prototype.map = Array.prototype.map;


window.loadScript = function(scriptName) {
	var s = document.getElementsByTagName('script');
	var thissrc ="";
	for(var i=s.length-1; i>=0 && thissrc.length<=0; --i)
		thissrc=s[i].src;
	var scriptFolder = thissrc.substr(0, thissrc.lastIndexOf('/')+1)
	var scriptsrctoadd = scriptFolder+scriptName;
	if(s.map(a=>a.src).includes(scriptsrctoadd))
		return;
	var script = document.createElement("script");
	script.src = scriptsrctoadd;
	document.head.appendChild(script);
}

loadScript("CanvasTools.js");
loadScript("GameObject.js");


class GameCanvas{
	constructor(canvasname, funcpaint){
		this.maxfps = 60;
		this.lastupdate = 0;
		if(typeof(funcpaint)=="undefined" || funcpaint==null)
			funcpaint=()=>{};
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
		this.setUpdatesPerSecond(60);
		this.canvas.tabIndex=0;
		this.focused=false;
		var t=this;
		this.canvas.addEventListener('focus', (evt)=>{
			t.focused=true;
			evt.preventDefault()
		});
		this.canvas.addEventListener('blur', (evt)=>{
			t.focused=false;
			evt.preventDefault()
		});
		this.paint();
	}
	hasFocus(){
		return this.focused;
	}
	redrawAll(){
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		for(var i in this.gameObjects){
				this.gameObjects[i].redraw();
			this.gameObjects[i].paint(this.ctx);
		}
	}
	setUpdatesPerSecond(updatespersecond){
		this.updateinterval = 1000/updatespersecond;
	}
	paint(timestamp=performance.now()){
		
		if(timestamp-1000/this.maxfps>=this.lastupdate){
			this.lastupdate = timestamp;
			if(this.funcpaint){
				this.funcpaint(this.canvas);
			}
			this.redrawAll();
		}
		var t = this;
		window.setTimeout(()=>{
			if(window.handleBindings)
				handleBindings();
			window.requestAnimationFrame((arg)=>t.paint(arg));
		},this.updateinterval);
	}
	addGameObject(gameobj){
		this.gameObjects.push(gameobj);
		this.resortGameObjectsByDrawOrder();
	}
	setDrawOrder(aDrawOrder){
		if((typeof aDrawOrder)!=(typeof []))
			throw new Error('Invalid type');
		this.draworder = aDrawOrder;
		this.resortGameObjectsByDrawOrder();
	}
	resortGameObjectsByDrawOrder(){
		gamecanvas.gameObjects.sort((a,b)=>{
			var ia=this.draworder.length,ib=ia;
			for(var i in this.draworder){
				if(a.type.includes(this.draworder[i]))
					ia=i;
				if(b.type.includes(this.draworder[i]))
					ib=i;
			}
			return ia-ib;
		}).map(a=>a.type)
	}
	addTypeStyles(typestyles){
		for(var st in typestyles){
			if(!this.typestyles[st])
				this.typestyles[st] = {};
			for(var attr in typestyles[st]){
				this.typestyles[st][attr] = typestyles[st][attr];
			}
		}
	}
}

