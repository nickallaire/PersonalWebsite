// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("nav-bar");

// var sticky = navbar.offsetTop;

// function myFunction() {
// 	if (window.pageYOffset >= sticky) {
// 		navbar.classList.add("sticky");
// 	} else {
// 		navbar.classList.remove("sticky");
// 	}
// }

var navContainer = document.getElementById("nav-bar");

var navItems = document.getElementsByClassName("nav-item");
for (var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}