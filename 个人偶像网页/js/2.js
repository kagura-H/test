 function toggle () {//在元素中添加，移除及切换 CSS 类。如果classList中存在给定的值，删除它，否则，添加它；
        var popup=document.getElementById("popup");// 根据id获取元素
        popup.classList.toggle("active"); // 切换指定id对应的class
    }
function to(){
	var popu=document.getElementById("popu");// 根据id获取元素
	popu.classList.toggle("active"); // 切换指定id对应的class
}
function qu(){
	alert("请先登录!!!!");
}