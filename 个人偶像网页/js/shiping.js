var video1=document.getElementById("videoPlay1");
var video2=document.getElementById("videoPlay2");
var video3=document.getElementById("videoPlay3");
video1.onclick=function(){
    if(video1.paused){
        video1.play();
    }else{
        video1.pause();
    }
}
video2.onclick=function(){
	if(video2.paused){
	    video2.play();
	}else{
	    video2.pause();
	}
}
video3.onclick=function(){
	if(video3.paused){
	    video3.play();
	}else{
	    video3.pause();
	}
}
var zan = document.getElementById('zan');
var cai = document.getElementById('cai');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var flag1 = 0;
var flag2 = 0;
zan.onclick = function() {
  if (flag1 == 0) {
    num1.innerHTML++;
  }
  if (flag1 == 1) {
    num1.innerHTML--;
  }
  if (flag1 == 2) {
    num1.innerHTML++;
    flag1 = 0;
  }
  flag1++;
}
cai.onclick = function() {
  if (flag2 == 0) {
    num2.innerHTML++;
  }
  if (flag2 == 1) {
    num2.innerHTML--;
  }
  if (flag2 == 2) {
    num2.innerHTML++;
    flag2 = 0;
  }
  flag2++;
}
var zan1 = document.getElementById('zan1');
var cai1 = document.getElementById('cai1');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var flag3 = 0;
var flag4 = 0;
zan1.onclick = function() {
  if (flag3 == 0) {
    num3.innerHTML++;
  }
  if (flag3 == 1) {
    num3.innerHTML--;
  }
  if (flag3 == 2) {
    num3.innerHTML++;
    flag3 = 0;
  }
  flag3++;
}
cai1.onclick = function() {
  if (flag4 == 0) {
    num4.innerHTML++;
  }
  if (flag4 == 1) {
    num4.innerHTML--;
  }
  if (flag4 == 2) {
    num4.innerHTML++;
    flag2 = 0;
  }
  flag4++;
}
var zan2 = document.getElementById('zan2');
var cai2 = document.getElementById('cai2');
var num5 = document.getElementById('num5');
var num6 = document.getElementById('num6');
var flag5 = 0;
var flag6 = 0;
zan2.onclick = function() {
  if (flag5 == 0) {
    num5.innerHTML++;
  }
  if (flag5 == 1) {
    num5.innerHTML--;
  }
  if (flag5 == 2) {
    num5.innerHTML++;
    flag5 = 0;
  }
  flag5++;
}
cai2.onclick = function() {
  if (flag6 == 0) {
    num6.innerHTML++;
  }
  if (flag6 == 1) {
    num6.innerHTML--;
  }
  if (flag6 == 2) {
    num6.innerHTML++;
    flag6 = 0;
  }
  flag6++;
}
window.onload=function(){
         var text=document.getElementById("text");
         var btn=document.getElementById("btn")
         var list=document.getElementById("list");
         btn.onclick=function(){
             var val=text.value;    
             if(text.value==""){
                 alert("请输入内容")
             }else{
                 list.innerHTML+='<li>'+val+'</li>';                    
                 text.value=""
             }                
         }    
}