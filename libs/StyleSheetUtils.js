'use strict';
(function(){
StyleSheetList.prototype.find = Array.prototype.find;
CSSRuleList.prototype.find = Array.prototype.find;
function normalizeSelector(selectorText){
	if(typeof selectorText=='undefined')
		return '';
	return selectorText.replace(/\s*([+~>, ])\s*/g, `$1`).toLowerCase();
}
StyleSheet.prototype.findRule = function(ruleName){
	var result;
	ruleName = normalizeSelector(ruleName);
	this.cssRules.find((rule)=>{
		var selectorText = normalizeSelector(rule.selectorText);
		if(selectorText==ruleName ||
				selectorText.split(",").findIndex(
					(s)=>{
						return ruleName==normalizeSelector(s.trim());
					}) >= 0)
		{
			result = rule;
			return true;
		}
		return false;
	});
	return result;
}
StyleSheetList.prototype.findRule = function(ruleName){
	var result;
	this.find((sheet)=>{
		return ((result=sheet.findRule(ruleName))!=undefined);
	})
	return result;
}
})()
