var container=document.getElementById("content-container");


if(window.innerWidth>800){
	var height=window.innerHeight-340;
	height=height+"px";
	container.style.height=height;
}
else{
	container.style.height="auto";
}

window.addEventListener("resize", function(event) {
	if(window.innerWidth>800){
	    height=window.innerHeight-330;
		height=height+"px";
		container.style.height=height;

	}
	else{
		container.style.height="auto";
	}
})