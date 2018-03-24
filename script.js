// Function to toggle education panels
$(document).ready(function() {
	$("#ucsd-img").click(function() {
		$("#panel1").toggle();
	});

	$("#sbcc-img").click(function() {
		$("#panel2").toggle();
	});
});

// Set nav bar item to active as you scroll/click on nav bar item
var topMenu = $("#nav-bar");
var topMenuHeight = topMenu.outerHeight() + 50;
var menuItems = topMenu.find("a");
var scrollItems = menuItems.map(function() {
	var item = $($(this).attr("href"));
	if (item.length) {
		return item;
	}
});

$(window).scroll(function() {
	var fromTop = $(this).scrollTop() + topMenuHeight;
	var cur = scrollItems.map(function() {
		if($(this).offset().top < fromTop)
			return this;
	});

	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";
	menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
});