window.onscroll = function(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {//获取当前页面滚动条纵坐标的位置
	    document.getElementById("myBtn").style.display = "block";
	} else {
	    document.getElementById("myBtn").style.display = "none";
	}
}
var myBtn = document.getElementById("myBtn")
//回到顶点就是返回坐标页面坐标(0,0)
myBtn.onclick = function () {
    var l = document.documentElement.scrollTop;//获取滚动条纵坐标
    var s = l / 1000 * 30;//30毫秒走的路程
    var st = setInterval(function () {//设置30毫毛的路程
        l =l-s;
        if (l <= 0) {
            l = 0; //当l<=0时，设置l=0
            clearInterval(st);
        }
        document.documentElement.scrollTop = l;
    }, 30)
}