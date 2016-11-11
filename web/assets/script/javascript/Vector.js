var RAD = Math.PI/180;
function Vector(angle, velocity)
{
	this.angle = angle;
	if(this.angle==NaN)
		this.angle = 0;
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
		//        /|
		//     h2/ | o2
		//      /__|
		//     /|
		//  h1/ | o1
		//   /__| 
		//    a1
		//
		var t1 = RAD*this.angle;
		var t2 = RAD*angle;
		var v1 = this.velocity;
		var v2 = velocity;
		//               a/h*h
		var a1 = Math.cos(t1)*v1;
		//               o/h*h
		var o1 = Math.sin(t1)*v1;
		//               a/h*h
		var a2 = Math.cos(t2)*v2;
		//               o/h*h
		var o2 = Math.sin(t2)*v2;
		//   o
		var dx = a1 + a2;
		//   a
		var dy = o1 + o2;
		this.angle = Math.atan(dy/dx)/RAD;
		if(this.angle==NaN)
			this.angle = 0;
		this.velocity = Math.sqrt(dx*dx+dy*dy);
		return ({x: dx, y: dy});
	};
}
