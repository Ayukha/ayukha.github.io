function getRandomColor(){
	var letters ="0123456789ABCDEF";
	var color = "#";
	for(var i =0;i<6;i++){
		color+= letters[Math.floor(Math.random()*16)];
	}
    return color
}

function changeHeaderColor(){
	colorInput = getRandomColor()
	var header = document.querySelector("h1")
	var body = document.querySelector("body")
	header.style.color = colorInput;
	body.style.background = colorInput;
	

}
setInterval("changeHeaderColor()",500)