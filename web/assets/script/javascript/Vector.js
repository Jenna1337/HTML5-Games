var RAD = Math.PI/180;
function Vector(angle, velocity)
{
	this.angle = angle;
	this.velocity = velocity;
	this.addVector = function(vector)
	{
		if(vector != null && vector.type == Vector)
		{
			this.translate(vector.angle, vector.velocity);
		}
	};
	this.translate = function(angle, velocity)
	{
		//cos = a/h
		//sin = o/h
		//
		//       a2
		//       ^^
		//        /|
		//       / | }h2
		//      /__|
		//     /|
		//    / | }h1
		//   /__| 
		//    a1
		//
		var a1 = Math.cos(RAD*this.angle)*this.velocity;
		var o1 = Math.sin(RAD*this.angle)*this.velocity;
		var a2 = Math.cos(RAD*angle)*velocity;
		var o2 = Math.sin(RAD*angle)*velocity;
		var dx = a1 + a2;
		var dy = o1 + o2;
		this.angle = Math.tan(dx/dy)/RAD;
		this.velocity = Math.sqrt(dx*dx+dy*dy);
		return ({x: dx, y: dy});
	};
}
