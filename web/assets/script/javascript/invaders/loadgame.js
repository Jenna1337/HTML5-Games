function loadgame(cname){
	gamecanvas = new GameCanvas(cname, 
function(canvas)
{
	var gamemargin = gamecanvas.getMargins();
	keyleft = keyleft && ship.x > gamemargin.left;
	keyright = keyright && ship.x < gamemargin.right;
	if(keyleft)
		//move ship left
		ship.x -= shipspd;
	if(keyright)
		//move ship right
		ship.x += shipspd;
}, 10);
	var canvas = document.getElementById(cname);
	ship = new GameObject("assets/img/invaders/ship.png", 20, 0, 0);
	ship.y = canvas.height-ship.img.width;
	gamecanvas.gamespeed = gamespd;
	gamecanvas.addGameObject(ship);
	addKeyListener(document, "A", function(key){
		var gamemargin = gamecanvas.getMargins();
		keyleft = ship.x > gamemargin.left;
	}, function(key){
		keyleft = false;
	});
	addKeyListener(document, "D", function(key){
		var gamemargin = gamecanvas.getMargins();
		keyright = ship.x < gamemargin.right;
	}, function(key){
		keyright = false;
	});
	addKeyListener(document, "W", function(key){
		//shoot bullet
		
	});
	addKeyListener(document, "S", function(key){
		
	});
};