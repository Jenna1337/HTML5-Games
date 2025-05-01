'use strict';
const addLongTouchEventListener = (function(){
	if((typeof TouchList)!=(typeof undefined))
		TouchList.prototype.forEach=Array.prototype.forEach;
	function settouchgraphicslocationtotouch(graphicsnode, tch){
		graphicsnode.style.left = (window.pageXOffset + tch.clientX)+'px';
		graphicsnode.style.top  = (window.pageYOffset + tch.clientY)+'px';
	}
	function addLongTouchEventListener(node, minholdtime, callback, graphicsnode){
		var activetouch, invalidtouch, activetouchstarttime;
		var consttouchleniency = 9.45;// 9.45px == 0.25cm
		var touchleniency;
		//window.addEventListener("resize", ()=>{
		//	touchleniency = Math.ceil(Math.max(document.body.parentElement.clientWidth, document.body.parentElement.clientHeight)/150);
		//});
		//window.dispatchEvent(new Event('resize'));
		
		
		window.setInterval(()=>{
			var zoomlvl = window.devicePixelRatio;
			if(graphicsnode)
			{
				graphicsnode.style.scale = 1 / (zoomlvl);
				graphicsnode.style.transformOrigin = "center center"
			}
			touchleniency = consttouchleniency / zoomlvl;
		}, 100);
		
		if(graphicsnode)
			graphicsnode.style.display='none'
		node.addEventListener('touchstart', (e)=>{
			e.changedTouches.forEach(tch=>{
				if(!activetouch){
					activetouch=tch;
					activetouchstarttime=e.timeStamp;
					invalidtouch = false;
					if(graphicsnode && graphicsnode.style.display=='none'){
						graphicsnode.boundtouchid = tch.identifier;
						settouchgraphicslocationtotouch(graphicsnode, tch);
						graphicsnode.style.display="";
					}
				}
			});
		});
		node.addEventListener('touchmove', (e)=>{
			e.changedTouches.forEach(tch=>{
				var id=tch.identifier;
				if(!activetouch || tch.identifier!=activetouch.identifier)
					return;
				var offsetX = tch.clientX - activetouch.clientX;
				var offsetY = tch.clientY - activetouch.clientY;
				if(graphicsnode && graphicsnode.boundtouchid &&
						id==graphicsnode.boundtouchid && graphicsnode.style.display=="" &&
						!invalidtouch){
					settouchgraphicslocationtotouch(graphicsnode, tch);
				}
				if(offsetX<-touchleniency || offsetX>touchleniency ||
						offsetY<-touchleniency || offsetY>touchleniency){
					invalidtouch=true;
					if(graphicsnode)
						graphicsnode.style.display='none'
				}
			});
		});
		node.addEventListener('touchend', (e)=>{
			e.changedTouches.forEach(tch=>{
				var id=tch.identifier;
				if(!activetouch || tch.identifier!=activetouch.identifier)
					return;
				var heldtime = e.timeStamp - (activetouch ? activetouchstarttime : 0);
				var offsetX = tch.clientX - activetouch.clientX;
				var offsetY = tch.clientY - activetouch.clientY;
				if(graphicsnode && graphicsnode.style.display==""){
					graphicsnode.boundtouch = null;
					graphicsnode.style.display='none';
				}
				var washeldlong = !invalidtouch && 
						heldtime>=minholdtime &&
						offsetX>=-touchleniency && offsetX<=touchleniency &&
						offsetY>=-touchleniency && offsetY<=touchleniency;
				callback(e, washeldlong);
				activetouch=false;
			});
		});
		var th = ({
			setTouchLeniency: ((n)=>{
				consttouchleniency=n;
			}),
			setMinHoldTime: ((n)=>{
				graphicsnode;
				graphicsnode.style.animationDuration=n+'ms';
				minholdtime=n;
			}),
		});
		th.setMinHoldTime(minholdtime);
		return th;
	}
	return addLongTouchEventListener;
})();
