 function showOriginal(img) {
            document.getElementById("imgFrame").style.display = "block";
			document.getElementById("imgbox").innerHTML = "<img src='" + img.getAttribute("original") + "' />";
        }
        function close() {
            document.getElementById("imgFrame").style.display = "none";
        }