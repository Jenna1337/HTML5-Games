"use strict";
const tfFuncSepRegex = /(?<=\))\s*/gm;
const tfFuncArgSepRegex = /\s*?(?:,| |(?<![eE]|^)(?=[+-]))\s*/gm;
function getTransformInfo(elem) {
	var tar = elem.getAttribute("transform")?.trim().split(tfFuncSepRegex).map(a=>{var b=a.slice(0,-1).split("(");b[1]=b[1].split(tfFuncArgSepRegex).map(Number);return b;});
	return tar != undefined ? Object.fromEntries(tar) : {};
}
function setTransformInfo(elem, funcname, ...args) {
	var tin = getTransformInfo(elem);
	tin[funcname] = args;
	var tstr = Object.entries(tin).map(a=>a[0]+"("+a[1].join(" ")+")").join(" ");
	elem.removeAttribute("x");
	elem.removeAttribute("y");
	return elem.setAttribute("transform", tstr);
}
function getX(elem){
	return getTransformInfo(elem)["translate"]?.[0] ?? 0;
}
function setX(elem, val){
	return setTransformInfo(elem, "translate", val, getY(elem));
}
function getY(elem){
	return getTransformInfo(elem)["translate"]?.[1] ?? 0;
}
function setY(elem, val){
	return setTransformInfo(elem, "translate", getX(elem), val);
}
function getPos(elem){
	return getTransformInfo(elem)["translate"] ?? [0,0];
}
function setPos(elem, posx, posy){
	return setTransformInfo(elem, "translate", posx, posy);
}
function getScale(elem){
	return getTransformInfo(elem)["scale"]?.[0] ?? 1;
}
function setScale(elem, val){
	return setTransformInfo(elem, "scale", val);
}
function getScaleX(elem){
	return getTransformInfo(elem)["scale"]?.[0] ?? 1;
}
function setScaleX(elem, val){
	var args = [val];
	var sy = getScaleY(elem);
	if(sy != undefined){
		args.push(sy);
	}
	return setTransformInfo(elem, "scale", ...args);
}
function getScaleY(elem){
	var si = getTransformInfo(elem)["scale"];
	return si?.[1] ?? (si?.[0] ?? 1);
}
function setScaleY(elem, val){
	return setTransformInfo(elem, "scale", getScaleX(elem), val);
}
function getRotation(elem){
	return getTransformInfo(elem)["rotate"]?.[0] ?? 0;
}
function setRotation(elem, val, rotatepoint){
	val = [val];
	if(elem.hasAttribute("width")){
		val.push(elem.getAttribute("width")/2);
		val.push(elem.getAttribute("height")/2);
	}
	return setTransformInfo(elem, "rotate", val);
}
