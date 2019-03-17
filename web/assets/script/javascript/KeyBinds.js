var keybinds=[];
var keybindspreventdefault = true;
window.KEY_WILDCARD = "AnyKey";
var addKeyBind = (function(){
	var addKeyBind = function(key, callback, ondown=()=>{}, onup=()=>{}, id=keybinds.length){
		keybinds[id]={"key":key,"callback":callback,"ondown":ondown,"onup":onup,"active":false};
		//keybinds.push({"key":key,"callback":callback,"id":id});
	}
	const checkkey = function(k, key){
		return key==KEY_WILDCARD || k==key.toLowerCase();
	}
	const setIsActive = function(bind, isdownevent, key){
		//if(bind.active != isdownevent)
			bind[isdownevent ? "ondown" : "onup"](key);
		bind.active=isdownevent;
	}
	const iteratebinds = function(e, isdownevent=e.type=='keydown'){
		if(keybindspreventdefault)
			e.preventDefault()
		var k = e.key.toLowerCase();
		for(var bind of keybinds){
			if(Array.isArray(bind.key))
				for(var b of bind.key){
					if(checkkey(k,b)){
						setIsActive(bind,isdownevent,k);
						break;
					}
				}
			else if(checkkey(k,bind.key))
				setIsActive(bind,isdownevent,k);
		}
	}
	const keyDownHandler = function(e){
		if(!document.hasFocus)
			return;
		iteratebinds(e,true);
	}
	const keyUpHandler = function(e){
		iteratebinds(e, false);
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
