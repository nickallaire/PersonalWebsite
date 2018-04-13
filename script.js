// On ready click function
$(document).ready(function() {
	$("#ucsd-button").click(function() {
		$("#panel1").toggle();
		if (!$("#panel1").is(":visible") && !$("#panel2").is(":visible")) {
			$('html, body').animate({
				scrollTop: $("#education").offset().top
			}, 500);
		}
	});

	$("#sbcc-button").click(function() {
		$("#panel2").toggle();
		if (!$("#panel2").is(":visible") && !$("#panel1").is(":visible")) {
			$('html, body').animate({
				scrollTop: $("#education").offset().top
			}, 500);
		}
	});

	$("#nav-button").click(function() {
		$("#nav-bar").toggle();

		if ($("#nav-bar").is(":visible")) {
			$("#nav-button").removeClass("button-top");
			$("#nav-button").addClass("move");
		} else {
			$("#nav-button").removeClass("move");
			$("#nav-button").addClass("button-top");
		}
	});

	// $("#nav-button").addClass("button-top");
	// $("#nav-button").removeClass("move");

	// Hide nav-bar when link is clicked
	$(".nav-link").click(function() {
		if ($("#nav-button").is(":visible")) {
			$("#nav-bar").toggle();
			$("#nav-button").addClass("button-top");
			$("#nav-button").removeClass("move");
		}
	});

	if ($("#nav-button").is(":visible")) {
		$("#nav-bar").hide();
	} else {
		$("#nav-bar").show();
	}
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

// Display nav button to toggle nav bar when screen is small
$(window).resize(function () {
	if($(this).width() < 715) {
		$("#nav-bar").hide();
		$("#nav-button").addClass("button-top");
		$("#nav-button").removeClass("move");
	} else {
		$("#nav-bar").show();
		$("#nav-button").removeClass("button-top");
		$("#nav-button").addClass("move");
	}
});

// Object to hold projects data
var projects = [
	{
		id: "project1",
		name: "CSE 127 Project",
		date: "Jan 2017 - Mar 2017",
		description: "This project is about project 1",
		language: "Java, C"
	},
	{
		id: "project2",
		name: "CSE 134B Project",
		date: "Jan 2018 - Mar 2018",
		description: "This project is about project 2",
		language: "Java, C"
	},
	{
		id: "project3",
		name: "CSE 135 Project",
		date: "Jan 2019 - Mar 2019",
		description: "This project is about project 3",
		language: "Java, C"
	},
	{
		id: "project4",
		name: "School Planner Project",
		date: "Jan 2020 - Mar 2020",
		description: "This project is about project 4",
		language: "Java, C"
	},
	{
		id: "project5",
		name: "CSE 150 Project",
		date: "Jan 2021 - Mar 2021",
		description: "This project is about project 5",
		language: "Java, C"
	},
	{
		id: "project6",
		name: "CSE 110 Project",
		date: "Jan 2021 - Mar 2021",
		description: "This project is about project 5",
		language: "Java, C"
	},
	{
		id: "project7",
		name: "React Project",
		date: "Jan 2021 - Mar 2021",
		description: "This project is about project 5",
		language: "Java, C"
	},
	{
		id: "project8",
		name: "CSE 141L Project",
		date: "Jan 2021 - Mar 2021",
		description: "This project is about project 5",
		language: "Java, C"
	}
];

console.log(projects);

var clickedProject;

$('.project').hover(function() {
	$(this).css('background-color', 'yellow');
}, function() {
	if (clickedProject != undefined) {
		if ($(this).attr("id") != clickedProject.attr("id")) {
			$(this).css('background-color', '#eeeddd');
		} else {
			$(this).css('background-color', 'red');
		}
	} else {
		$(this).css('background-color', '#eeeddd');
	}
});

$(".project").click(function() {
	var checkDiv = $(this);
	var i;
	console.log(checkDiv);
	if (clickedProject != undefined && checkDiv.attr("id") === clickedProject.attr("id")) {
		checkDiv.css('background-color', '#eeeddd');
		$(".project-description").hide();
		clickedProject = undefined;
	} else {
		checkDiv.parent().children(".project").each(function() {
			var current = $(this);
			current.css('background-color', '#eeeddd');
		});
		for (i = 0; i < projects.length; i++) {
			if (projects[i].id === checkDiv.attr("id")) {
				$(".project-description #project-name").text(projects[i].name);
				$(".project-description #project-date").text(projects[i].date);
				$(".project-description #project-description").text(projects[i].description);
				$(".project-description #project-languages").text(projects[i].language);
				$(".project-description").show();
				checkDiv.css("background-color", "red");
				clickedProject = checkDiv;
				if ($(window).width() < 715) {
					$('html, body').animate({
						scrollTop: $(".project-description").offset().top - ($(window).height() / 2) + ($(".project-description").height() / 2)
					}, 750);
				}
			}
		}
	}
});