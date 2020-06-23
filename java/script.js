

let button = document.getElementById('open');
let show = document.getElementById('side-bar');
button.addEventListener('click', function(){
	if(!show.style.display || show.style.width === "0px"){
		show.style.display = 'block';
		show.style.width = "100%";
	}else{
		show.style.width = '0px';
	}
	
});
let closeside = document.getElementById('show-side');
closeside.addEventListener('click', function(){
	show.style.display = 'block';
	show.style.width = '0px';
	
	
});
// color panel

	let show_panel = document.getElementById('panel-edge');
	let pickcolor = document.getElementById('color-picker');
	show_panel.addEventListener('click', function(){
	if(!pickcolor.style.display || pickcolor.style.height === "0px"){
		pickcolor.style.display = 'block';
		pickcolor.style.height = "300px";
	
	}else{
		pickcolor.style.height ="0px";
		
	}
	});

	// viewer
