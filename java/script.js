
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
	var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = '';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}