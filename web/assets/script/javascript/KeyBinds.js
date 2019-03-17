var keybinds=[];
var keybindspreventdefault = true;
var addKeyBind = (function(){
	var addKeyBind = function(key, callback, id=keybinds.length){
		keybinds[id]={"key":key,"callback":callback};
		//keybinds.push({"key":key,"callback":callback,"id":id});
	}
	const checkkey = function(k, key){
		return k==key.toLowerCase();
	}
	const iteratebinds = function(e, isdownevent=e.type=='keydown'){
		var k = e.key.toLowerCase();
		for(var bind of keybinds){
			if(Array.isArray(bind.key))
				for(var b of bind.key){
					if(checkkey(k,b)){
						bind.active=isdownevent;
						break;
					}
				}
			else if(checkkey(k,bind.key))
				bind.active=isdownevent;
		}
		if(keybindspreventdefault)
			e.preventDefault()
	}
	const keyDownHandler = function(e){
		if(!document.hasFocus)
			return;
		iteratebinds(e);
	}
	const keyUpHandler = function(e){
		iteratebinds(e);
	}
	window.addEventListener("keydown", keyDownHandler, false);
	window.addEventListener("keyup", keyUpHandler, false);
	return addKeyBind;
})();
var setKeyBind = function(key, callback, id=keybinds.length){
		keybinds[id]={"key":key,"callback":callback};
};
function handleBindings(){
	for(var bind of keybinds)
		if(bind.active)
			bind.callback(bind);
}
