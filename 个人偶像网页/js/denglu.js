window.onload = function(){
	//当单击提交按钮的时候进行用户信息验证
	//当用户不存在，提示，不跳转
	//当用户存在，但是密码错误，提示，不跳转
	//用户存在，密码正确，跳转
	var form = document.getElementsByTagName("form")[0];
	form.onsubmit = function(){
		var inputs = document.getElementsByTagName("input");//0用户名，1密码
		//获取数据：利用用户名去localStorage中读取
		var storage = window.localStorage;
		var str = storage.getItem(inputs[0].value);
		//如果key存在，返回string值，否则返回null
		if(str == null){
			alert("当前用户不存在！");
			return false;
		}
		else{
			var data = JSON.parse(str);//JSON转JS对象
			if(data.userPwd == inputs[1].value){
				return true;
			}
			else{
				alert("当前用户密码错误！");
				return false;
			}
		}
	}
};