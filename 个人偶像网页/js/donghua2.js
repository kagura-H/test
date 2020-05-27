			var index = 0;
			var str = document.getElementById("string").innerHTML;
			function type() {
			if(index == str.length) {
			index = 0;
			}
			document.getElementById("showStr").innerText = str.substring(0, index++);
			}
			setInterval(type,100); //通过定时器来让文字逐步显示
			var obj=setTimeout("location.href='index.html';",7000);