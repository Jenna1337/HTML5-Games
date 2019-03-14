var RAD = Math.PI/180;
function Vector(angle, velocity)
{
	this.angle = angle;
	this.velocity = velocity;
	this.addVector = function(vector){
		if(vector != null && vector.type == Vector){
			this.translate(vector.angle, vector.velocity);
		}
	};
	this.getCoords = function(){
		
		var x = Math.cos(this.angle)*this.velocity;
		var y = Math.sin(this.angle)*this.velocity;
		
		return ({x: x, y: y});
	}
	this.translate = function(angle, velocity)
	{
		//cos = a/h
		//sin = o/h
		//
		//       a2
		//        /|
		//     h2/ | o2
		//      /__|
		//     /|
		//  h1/ | o1
		//   /__| 
		//    a1
		//
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
