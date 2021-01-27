var navbar=document.getElementById("navbar");


if(window.innerWidth>800){
	navbar=document.getElementById("navbar");
	var height=window.innerHeight-330;
	height=height+"px";
	navbar.style.height=height;
}
else{
	navbar.style.height="auto";
}

window.addEventListener("resize", function(event) {
	if(window.innerWidth>800){
	    height=window.innerHeight-330;
		height=height+"px";
		navbar.style.height=height;

	}
	else{
		navbar.style.height="auto";
	}
})