var KEY_WILDCARD = "*";
var listeners = [];
function iterate(func)
{
	var keytext;
	if(typeof(event.keyCode)!="undefined")
		keytext = getKeyText(event.keyCode);
	if(typeof(event.button)!="undefined")
	{
		keytext = getKeyText(event.button+1);
	}
	var listener;
	for(var i=0; i<listeners.length; i++)
	{
		listener=listeners[i];
		if(listener[func])
		{
			if(keytext == listener.key || listener.key == KEY_WILDCARD)
				listener[func](keytext);
		}
	}
}
var listenerinit = false;
function addInputListener(doc, key, ondown, onup, once) {
	if(keynames.indexOf(key)<0 && key!=KEY_WILDCARD)
		throw new Error(key + " is undefined");
	if(!listenerinit)
	{
		doc.onmousedown = function(event) {
			iterate("ondown");
		}
		doc.onmouseup = function(event){
			iterate("onup");
		}
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
function getKeyText(keyCode)
{
	var return_value = keynames[keyCode];
	if(typeof(return_value) == "undefined")
		return ""+keyCode;
	return return_value;
}
keynames = [
	"NULL",
	"MOUSE1",
	"MOUSE2",
	"BREAK",
	"MOUSE3",
	"MOUSE X1",
	"MOUSE X2",
	"UNDEFINED",
	"BACKSPACE",
	"TAB",
	"RESERVED",
	"RESERVED",
	"CLEAR",
	"ENTER",
	"UNDEFINED",
	"UNDEFINED",
	"SHIFT",
	"CTRL",
	"ALT",
	"PAUSE",
	"CAPS LOCK",
	"IME KANA|HANGUL MODE",
	"UNDEFINED",
	"IME JUNJA MODE",
	"IME FINAL MODE",
	"IME HANJA|KANJI MODE",
	"UNDEFINED",
	"ESC",
	"IME CONVERT",
	"IME NONCONVERT",
	"IME ACCEPT",
	"IME MODE CHANGE REQUEST",
	"SPACE",
	"PG UP",
	"PG DN",
	"END",
	"HOME",
	"LEFT ARROW",//ARROW LEFT
	"UP ARROW",//ARROW UP
	"RIGHT ARROW",//ARROW RIGHT
	"DOWN ARROW",//ARROW DOWN
	"SELECT",
	"PRINT",
	"EXECUTE",
	"PRT SC",
	"INSERT",
	"DELETE",
	"HELP",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"UNDEFINED",
	"UNDEFINED",
	"UNDEFINED",
	"UNDEFINED",
	"UNDEFINED",
	"UNDEFINED",
	"UNDEFINED",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"LEFT OS",
	"RIGHT OS",
	"CONTEXT MENU",
	"RESERVED",
	"SLEEP",
	"NUM 0",
	"NUM 1",
	"NUM 2",
	"NUM 3",
	"NUM 4",
	"NUM 5",
	"NUM 6",
	"NUM 7",
	"NUM 8",
	"NUM 9",
	"NUM *",
	"NUM +",
	"NUM ,",
	"NUM -",
	"NUM .",
	"NUM /",
	"F1",
	"F2",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"F10",
	"F11",
	"F12",
	"F13",
	"F14",
	"F15",
	"F16",
	"F17",
	"F18",
	"F19",
	"F20",
	"F21",
	"F22",
	"F23",
	"F24",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"NUM LOCK",
	"SCROLL",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"LEFT SHIFT",
	"RIGHT SHIFT",
	"LEFT CTRL",
	"RIGHT CTRL",
	"LEFT MENU",
	"RIGHT MENU",
	"BROWSER BACK",
	"BROWSER FORWARD",
	"BROWSER REFRESH",
	"BROWSER STOP",
	"BROWSER SEARCH",
	"BROWSER FAVORITES",
	"BROWSER START/HOME KEY",
	"VOLUME MUTE",
	"VOLUME DOWN",
	"VOLUME UP",
	"NEXT TRACK",
	"PREV TRACK",
	"STOP MEDIA",
	"PLAY/PAUSE MEDIA",
	"START MAIL",
	"SELECT MEDIA",
	"START APP 1",
	"START APP 2",
	"RESERVED",
	"RESERVED",
	";",//OEM_1 //CAN VARY
	"=",
	",",
	"-",
	".",
	"/",//OEM_2 //CAN VARY
	"`",//OEM_3 //CAN VARY
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"RESERVED",
	"UNASSIGNED",
	"UNASSIGNED",
	"UNASSIGNED",
	"[",//OEM_4 //CAN VARY
	"\\",//OEM_5 //CAN VARY
	"]",//OEM_6 //CAN VARY
	"'",//OEM_7 //CAN VARY
	"",//OEM_8 //CAN VARY
	"RESERVED",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"IME PROCESS",
	"OEM SPECIFIC",
	"PACKET",
	"UNASSIGNED",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"OEM SPECIFIC",
	"ATTN",
	"CRSEL",
	"EXSEL",
	"EREOF",//ERASE EOF
	"PLAY",
	"ZOOM",
	"RESERVED",
	"PA1",
	"CLEAR",
	"UNDEFINED"
];

