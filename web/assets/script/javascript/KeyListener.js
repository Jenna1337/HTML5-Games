var KEY_WILDCARD = "*";
var listeners = [];
function iterate(func)
{
	if(typeof(event.key)=="undefined")
		throw new Error("event is invalid!");
	var keytext = event.key;
	var listener;
	for(var i=0; i<listeners.length; i++)
	{
		listener=listeners[i];
		if(listener[func])
		{
			if(keytext == listener.key || listener.key == KEY_WILDCARD)
				listener[func](event);
		}
	}
}
var listenerinit = false;
function addKeyListener(doc, key, ondown, onup, once) {
	if(keynames.indexOf(key)<0 && key!=KEY_WILDCARD)
		throw new Error(key + " is undefined");
	if(!listenerinit)
	{
		doc.onkeydown = function(event) {
			iterate("ondown");
		}
		doc.onkeyup = function(event){
			iterate("onup");
		}
	}
	if(!onup)
		onup=function(){};
	if(!once)
		once=false;
	
	listeners.push({key: key, ondown: ondown, onup: onup, once: once});
}
