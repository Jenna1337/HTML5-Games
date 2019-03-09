var keybinds=[];
var addKeyBind = (function(){
	var addKeyBind = function(key, callback){
		keybinds.push({"key":key,"callback":callback});
	}
	const keyDownHandler = function(e){
		if(!document.hasFocus)
			return;
		for(var bind of keybinds)
			if(e.which==bind.key)
				bind.active=true;
	}
	const keyUpHandler = function(e){
		for(var bind of keybinds)
			if(e.which==bind.key)
				bind.active=false;
	}
	window.addEventListener("keydown", keyDownHandler, false);
	window.addEventListener("keyup", keyUpHandler, false);
	return addKeyBind;
})();
function handleBindings(){
for(var bind of keybinds)
	if(bind.active)
		bind.callback();
}
