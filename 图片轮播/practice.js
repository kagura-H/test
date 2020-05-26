window.onload = function(){
	//第一图片轮播
	//代表图片所在的div模块
	var innerItems = document.getElementsByClassName("item");
	//无序列表中的li标签元素集合
	var lists = document.getElementsByTagName("li");
	//左右箭头
	var controlLeft = document.getElementsByClassName("left")[0];
	var controlRight = document.getElementsByClassName("right")[0];
	var current = 0;
	//用来记录当前需要显示的div和li的下标
	//设置初始状态
	innerItems[current].className = "item active";
	lists[current].className = "liactive";
	//执行一次图片变换得操作
	//1.清空目前得active样式 2.给需要显示得div和li添加类名
	function slide(){
		//1.清空目前得active样式
		for(var i in lists){
			innerItems[i].className = "item";
			lists[i].className = "";
		}
		//2.给需要显示得div和li添加类名
		innerItems[current].className = "item active";
		lists[current].className = "liactive";
	}
	//第二列表单击事件
	for(var i in lists){
		lists[i].index = i;
		//给每个li元素添加单击事件
		//选中得li元素修改北京市，对应得div模块显示
		lists[i].onclick = function(){
			current = this.index;
			slide();
		}
	}
	//第三左右按钮单击和悬停事件
	controlLeft.onclick = function(){
		current--;
		if(current == -1){
			current = lists.length -1;
		}
		slide();
	}
	controlRight.onclick = function(){
		current++;
		if(current == lists.length){
			current = 0;
		}
		slide();
	}
	//图片自动切换
	//设置定时器
	var timer = setInterval(controlRight.onclick,2000);
	//鼠标悬停
	controlLeft.onmouseover = controlRight.onmouseover = function(){
		clearInterval(timer);
	}
	controlLeft.onmouseout = controlRight.onmouseout = function(){
		timer = setInterval(controlRight.onclick,2000);
	}
}