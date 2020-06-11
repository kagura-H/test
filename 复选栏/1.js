window.onload = function(){
	var collapse = document.getElementById("collapse");
	var divs = collapse.getElementsByTagName("div");
	var headers = document.getElementsByTagName("h3");
	
	for(var i in headers){
			headers[i].index = i;
			headers[i].onclick = function(){
				if(this.classList.contains("active"))
				{
					this.classList.remove("active");
					divs[this.index].style.display = "none";
				}
				else{
					for(var j=0 ; j<headers.length;j++){
						headers[j].classList.remove("active");
						divs[j].style.display = "none";
				}
				this.classList.add("active");
				divs[this.index].style.display = "block";
			}
		};
		 
	}
	
};