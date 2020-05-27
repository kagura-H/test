  document.onmousemove = function(event){//鼠标事件
            var body = document.querySelector("body");//获取body元素
            var heart = document.createElement("span");//创建一个行内元素
            var x = event.offsetX;//获取鼠标X,Y值
            var y = event.offsetY;
            heart.style.left = x + "px";//设置行内元素的X,Y值
            heart.style.top = y + "px";
            var size =Math.random()*100;//设置随机数
            heart.style.width = size + "px";//设置生成图片的大小
            heart.style.height = size + "px";
            body.appendChild(heart);//将行内元素添加到body的尾部
            setTimeout(function(){
                heart.remove();
            },2000);//设置2秒后清除
        }