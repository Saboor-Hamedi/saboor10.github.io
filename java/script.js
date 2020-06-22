
let button = document.getElementById('show-side');
let show = document.getElementById('side-bar');
button.addEventListener('click', function(){
	if(!show.style.display || show.style.width === "0px"){
		show.style.display = 'block';
		show.style.width = "300px";
	}else{
		show.style.width = '0px';
	}
	
});

// color panel

	let show_panel = document.getElementById('color-picker');
	show_panel.addEventListener('click', function(){
	if(!show_panel.style.display || show_panel.style.height === "0px"){
		show_panel.style.display = 'block';
		show_panel.style.height = "300px";
	
	}else{
		show_panel.style.height ="0px";
		
	}
	});