

let button = document.getElementById('show-side');
let show = document.getElementById('side-bar');
button.addEventListener('click', function(){
	if(!show.style.display || show.style.width === "0px"){
		show.style.display = 'block';
		show.style.width = "100%";
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
		pickcolor.style.height = "384px";
		pickcolor.style.width = "100%";
	
	}else{
		pickcolor.style.height ="0px";
		pickcolor.style.width = "300px";
		
	}
	});

	// viewer
	var mySwiper = new Swiper ('.swiper-container', 
	{
    speed:1000,
		direction: 'horizontal',
		navigation: 
		{
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		pagination: 
		{
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		zoom: true,
		keyboard: 
		{
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: 
		{
			invert: true,
		},
    autoplay: 
    {
      delay: 5000,
    },
    loop: true,
	}); 

//scroll
var scroll = new SmoothScroll('.header a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});











