		window.onload = function(){
			displayDate();
			img();
		}
function displayDate()
    {  
    var date = new Date();  
    var hours =  date.getHours();  
    var minutes =  date.getMinutes();  
    var seconds = date.getSeconds();  
    var weekDay = new Array(7);  
    weekDay[0] = "Sunday";  
    weekDay[1] = "Monday";  
    weekDay[2] = "Tuesday";  
    weekDay[3] = "Wednesday";  
    weekDay[4] = "Thursday";  
    weekDay[5] = "Friday";  
    weekDay[6] = "Saturday";  
	if(hours<10){// 小于10在前面加0
				    hours = "0" + hours;
				}
	if(seconds<10){
				    seconds = "0" + seconds;
				}
	if(minutes<10){
				    minutes = "0" + minutes;
				}
				
	document.getElementById("demo").innerHTML=hours+":"+minutes+":"+seconds;
	document.getElementById("demo1").innerHTML=weekDay[date.getDay()];

    //获得当前时间,刻度为一千分一秒  
    var timeID = setTimeout(displayDate,1000);  
} 
function img(){
	var innterItems = document.getElementsByClassName("item");
	var lists = document.getElementsByTagName("li");
	var controlLeft = document.getElementsByClassName("left")[0];
	var controlRight = document.getElementsByClassName("right")[0];
	var current = 0;
	innterItems[current].className = "item active";
	lists[current].class = "liactive";
	function slide(){
		for(var i in lists){
			innterItems[i].className = "item";
			lists[i].className = "";
			
		}
		innterItems[current].className = "item active";
		lists[current].className = "liactive";
	}
	for(var i in lists){
		lists[i].index = i;
		lists[i].onclick = function(){
			current = this.index;
			slide();
		};
	}
	controlLeft.onclick = function(){
		current--;
		if(current == -1){
			current = lists.length - 1;
		}
		slide();
	};
	controlRight.onclick = function(){
		current++;
		if(current == lists.length){
			current = 0;
		}
		slide();
	};
	var tiemr = setInterval(controlRight.onclick,2000);
	controlLeft.onmouseover = controlRight.onmouseover = function(){
		clearInterval(tiemr);
	}
	controlLeft.onmouseout = controlRight.onmouseout = function(){
		tiemr = setInterval(controlRight.onclick,2000);
	}
};
