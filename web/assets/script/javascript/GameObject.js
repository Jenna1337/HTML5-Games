

function GameObject(imgsrc, initx, inity, initangle, initspd, initspin)
{
	if(typeof(initangle)=="undefined" || initangle==null)
		throw new Error("initangle == undefined!");
	if(typeof(initspd)=="undefined" || initspd==null)
		initspd = 0;
	if(typeof(initspin)=="undefined" || initspin==null)
		initspin = 0;
	var objimg = new Image();
	objimg.src = imgsrc;
	this.img = objimg;
	this.x = initx;
	this.y = inity;
	this.angle = initangle;
	this.deltax = 0;
	this.deltay = 0;
	try{
	this.vector = new Vector(0, 0);
	}catch(e){}
	this.spin = initspin;
	this.move = function(angle, velocity)
	{
		var coords = this.vector.translate(angle, velocity);
		this.deltax = coords.x;
		this.deltay = coords.y;
	};
	//try{
		this.move(initangle, initspd);
	//}catch(e){}
	this.turn = function(degrees)
	{
		this.spin += degrees;
		this.spin %= 360;
		this.angle+= degrees;
		this.angle %= 360;
		if(this.angle<0)
			this.angle+=360;
	}
	this.paint = function(context)
	{
		this.angle += this.spin;
		this.angle %= 360;
		this.x += this.deltax;
		this.y += this.deltay;
		
		drawGameObject(context, this);
	}
	this.getFrame = function(frm){
		return this.img;
	}
}
