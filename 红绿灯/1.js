window.onload = function(){
	var lamp = {
		red:{
			obj:document.getElementById("red"),
			time:10,
			style:["red","gray","gray","red"],
			next:"green"
		},
		yellow:{
			obj:document.getElementById("yellow"),
			time:5,
			style:["gray","yellow","gray","yellow"],
			next:"red"
		},
		green:{
			obj:document.getElementById("green"),
			time:30,
			style:["gray","gray","green","green"],
			next:"yellow"
		},
		changeStyle:function(style){
			this.red.obj.style.background = style[0];
			this.yellow.obj.style.background = style[1];
			this.green.obj.style.background = style[2];
			document.getElementById("number").style.color = style[3];
		}
	};
	var count = {
		obj:document.getElementById("number"),
		change:function(num){
			this.obj.innerHTML = (num <10)?("0"+num):num;
		}
	};
	var now = lamp.green;
	lamp.changeStyle(now.style);
	var currentTime = now.time;
	count.change(currentTime);
	function changeNumber(){
		if(currentTime>0){
			currentTime--;
			count.change(currentTime);
		}else{
			now = lamp[now.next];
			currentTime = now.time;
			lamp.changeStyle(now.style);
			count.change(currentTime);
		}
	}
	
	setInterval(changeNumber,1000);
	
}