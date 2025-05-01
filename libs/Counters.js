const InitCounters = (function(){
	/*
	Makes the number always fit in the counter area
	*/
	function normalizenumber(v,k){
		v = Number(v);
		var flag = v<0;
		if(flag)
			v=-v;
		var s = String(v);
		s = s.substring(s.length-3).padStart(k,"0");
		if(flag)
			s='-'+s.substring(1);
		return s;
	}
	function FunctionReferenceFromString(str){
		return eval("()=>{"+str+"}");
	}
	/*
	Initializes the element as a counter
	*/
	function InitCounter(htmlelement){
		var digitcount = htmlelement.getAttribute("digitcount");
		var limit = htmlelement.getAttribute("limit");
		if(!limit)
			limit = Number.MAX_SAFE_INTEGER;
		var onvalueupdate = htmlelement.getAttribute("onvalueupdate");
		if(!onvalueupdate)
			onvalueupdate = (()=>{});
		else
			onvalueupdate = FunctionReferenceFromString(onvalueupdate);
		htmlelement.innerHTML="";
		htmlelement.digitcount = digitcount;
		for(var i=0;i<digitcount;++i)
			htmlelement.appendChild(document.createElement("div"));
		
		var val=0;
		var targetchildren=htmlelement.children;
		var obj={
			setValue: (newval)=>{
				onvalueupdate();
				if(newval>limit)
					return false;
				val=newval;
				var offsets = normalizenumber(val,digitcount).split("").map((c)=>parts.digits[c]);
				offsets.map((offset,i)=>{
					targetchildren[i].style.backgroundPositionY=offsets[i];
				});
				return true;
			},
			increment: ()=>obj.setValue(val+1),
			decrement: ()=>obj.setValue(val-1),
			getValue: ()=>val,
		};
		var updateaction = htmlelement.getAttribute("updateaction");
		var autoupdateinterval = htmlelement.getAttribute("autoupdateinterval");
		if(updateaction&&autoupdateinterval>0){
			updateaction = obj[updateaction];
			var functionref = null;
			var autofunction = (()=>{
				updateaction();
				functionref=setTimeout(autofunction,autoupdateinterval);
			});
			var isrunning=false;
			obj.start= (()=>{
				if(!isrunning){
					isrunning=true;
					autofunction();
				}
			});
			obj.stop = (()=>{
				if(functionref!=null)
					clearTimeout(functionref);
				isrunning=false;
			});
			obj.reset = (()=>{
				obj.setValue(0);
			});
		}
		return obj;
	}
	/*
	Inintializes the counters
	*/
	function InitCounters(classname){
		var targets = document.getElementsByClassName(classname);
		var retval={};
		Array.prototype.map.call(targets,(elem)=>{retval[elem.id]=InitCounter(elem)});
		return retval;
	}
	return InitCounters;
})();