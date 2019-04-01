
loadScript("Vector.js")

class GameObject
{
	constructor(obj){
		this.canvas = obj.canvas;
		this.y = obj.y;
		this.x = obj.x;
		this.height = obj.height;
		this.width = obj.width;
		var initangle = obj.angle;
		if(typeof(initangle)=="undefined" || initangle==null)
			initangle = 0;
		var initspd = obj.speed;
		if(typeof(initspd)=="undefined" || initspd==null)
			initspd = 0;
		var initspin = obj.spin;
		if(typeof(initspin)=="undefined" || initspin==null)
			initspin = 0;
		var objimg = new Image();
		objimg.src = obj.imgsrc;
		this.img = objimg;
		this.angle = initangle;
		this.deltax = 0;
		this.deltay = 0;
		this.vector = new Vector(0, 0);
		this.spin = initspin;
		this.type = (typeof (obj.type))=='string' ? obj.type.split(' ') : obj.type;
		this.collidable = obj.hasOwnProperty('collidable') ? obj.collidable : obj.hasCollision;
		this.collisionHandlers = {};
		this.canvas.addGameObject(this);
		this.move(initangle, initspd);
	}
	clone(){
		return new GameObject(this);
	}
	shiftPosition(x, y) {
		this.x += x;
		this.y += y;
		//this.ref.setAttribute('style', `x: ${this.x}px; y: ${this.y}px`);
		var overlapList = window.ool=this.getCollisions(), undone=false;
		for(var ovObj of overlapList){
			if(ovObj.collidable && !undone){
				undone=true;
				this.x -=x;
				this.y -=y;
			}
		}
	}
	move(angle, velocity){
		var coords = this.vector.translate(angle, velocity);
		this.deltax = coords.x;
		this.deltay = coords.y;
	}
	turn(degrees)
	{
		this.spin += degrees;
		this.spin %= 360;
		this.angle+= degrees;
		this.angle %= 360;
	}
	paint(context)
	{
		this.angle += this.spin;
		this.angle %= 360;
		if(this.angle<0)
			this.angle+=360;
		this.shiftPosition(this.deltax, this.deltay);
		
		drawGameObject(context, this);
	}
	getFrame(frm){
		return this.img;
	}
	redraw(){
		for(var i in this.type){
			var typestyle = this.canvas.typestyles[this.type[i]];
			if(typestyle){
				for(var attr in typestyle){
					this.canvas.ctx[attr] = typestyle[attr];
				}
			}
		}
		this.canvas.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.canvas.ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
	getCollisions() {
		var list = [];
		for(var gameObj of this.canvas.gameObjects) {
			if(gameObj==null || (typeof gameObj)!="object" || this===gameObj)
				continue;
			if (gameObj.x < this.x + this.width &&
					gameObj.x + gameObj.width > this.x &&
					gameObj.y < this.y + this.height &&
					gameObj.height + gameObj.y > this.y) {
				list.push(gameObj);
			}
		}
		return list;
	}
	addCollisionHandler(targetType,callback){
		
	}
}
