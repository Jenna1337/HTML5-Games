var RAD = Math.PI/180;
function drawImage(ctx, IMG, x, y, angle)
{
	if(IMG.width>0 && IMG.height>0)
	{
	ctx.save();                    // save context
	ctx.translate(x, y); // move to point
	ctx.rotate(angle * RAD);  // rotate around that point
	ctx.drawImage(IMG, -(IMG.width/2), -(IMG.height/2));
	ctx.restore();                 // restore to initial coordinates 
	}
}
function drawGameObject(ctx, obj)
{
	drawImage(ctx, obj.img, obj.x, obj.y, obj.angle);
}
function drawObjectFrame(ctx, obj, frm)
{
	if(IMG.width>0 && IMG.height>0)
	{
	ctx.save();
	ctx.translate(obj.x, obj.y);
	ctx.rotate(obj.angle * RAD);
	ctx.drawImage(IMG, -(IMG.width/2), -(IMG.height/2));
	ctx.restore();
	}
}
