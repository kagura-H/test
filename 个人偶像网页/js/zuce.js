window.onload = function(){
	var inputs = document.getElementsByTagName("input");
	var spanLabel = document.getElementsByClassName("title");
	var regs = [
	{
		"reg":/^[a-zA-Z]{4,12}$/,
		"msgs":
		{
			"success":"用户输入正确",
			"error":"长度4~12，英文大小写字母"
		},
		"state":false
	},
	{
		"reg":/^[a-zA-z0-9_]{6,20}$/,
		"msgs":
		{
			"success":"密码输入正确",
			"error":"长度6~20，大小写字母、数字或下划线"
		},
		"state":false		
	},
	{
		"reg":RegExp("^"+inputs[1].value+"$"),
		"msgs":
		{
			"success":"两次密码输入一致",
			"error":"两次密码输入不一致"
		},
		"state":false
	},
	{
		"reg":/^1[34578]\d{9}$/,
		"msgs":
		{
			"success":"手机号输入正确",
			"error":"13、14、15、17、18开头的11位手机号"
		},
		"state":false	
	}
	];
	for(var i=0;i<inputs.length-1;i++){
		inputs[i].index = i;
		inputs[i].onblur = function(){
			var value = this.value;
			var spanObj = spanLabel[this.index];
			var reg = regs[this.index];
			if(this.index == 2){
				regs[2].reg = RegExp("^"+inputs[1].value+"$");
			}
			if(this.index == 0){
				var str = localStorage.getItem(this.value);
				if(str!=null){
					spanObj.innerHTML="该用户已经被注册！"
					spanObj.className="title error";
					regs[this.index].state=false;
					return false;
				}
			}
			if(reg.reg.test(value)){
				spanObj.innerHTML = reg.msgs.success;
				spanObj.className = "title success";
				regs[this.index].state=true;
			}
			else if(value ==""){
				spanObj.innerHTML = "输入框不能为空！";
				spanObj.className = "title error";
				regs[this.index].state=false;
			}
			else{
				spanObj.innerHTML = reg.msgs.error;
				spanObj.className  = "title error";
				regs[this.index].state=false;
			}
		}
	}
	var form =document.getElementsByTagName("form")[0];
	form.onsubmit = function(){
		var state = regs.every(function(item){
			return item.state;
		});
		if(state){
			var data = {};
			data.userName = inputs[0].value;
			data.userPwd = inputs[1].value;
			data.userTel = inputs[3].value;
			var str = JSON.stringify(data);
			var storage = window.localStorage;
			storage.setItem(data.userName,str);
			alert("信息无误。注册成功！");
			return true;
		}
		else{
			alert("信息填写有误，注册失败！");
			return false;
		}
	};
}