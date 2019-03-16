var RAD = Math.PI/180;
class Vector
{
	constructor(angle, velocity){
		this.angle = angle;
		this.velocity = velocity;
	}
	addVector(vector){
		if(vector != null && vector.type == Vector){
			this.translate(vector.angle, vector.velocity);
		}
	};
	getCoords(){
		
		var x = Math.cos(this.angle)*this.velocity;
		var y = Math.sin(this.angle)*this.velocity;
		
		return ({x: x, y: y});
	}
	translate(angle, velocity)
	{
		var c1 = new Vector(RAD*this.angle, this.velocity).getCoords();
		var c2 = new Vector(RAD*angle, velocity).getCoords();
		var dx = c1.x + c2.x;
		var dy = c1.y + c2.y;
		if(dx>=0)//q1|q4
			this.angle = Math.atan(dy/dx)/RAD;
		else if(dx<=0)//q2|q3
			this.angle = 180+Math.atan(dy/dx)/RAD;
		else throw Error("("+dx+", "+dy+") not a valid coordinate point!");
		if(isNaN(this.angle))
			this.angle = 0;
		this.velocity = Math.sqrt(dx*dx+dy*dy);
		return ({x: dx, y: dy});
	};
}
