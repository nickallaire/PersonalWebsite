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

	$("display-img").click(function() {
		console.log("GOT HERE");
	});

	$(".listimg").click(function() {
		console.log("here");
	
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

	$(".listimg").click(function() {
		console.log("HERE");
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
		name: "Event Planner Android Application",
		date: "September 2016 - December 2016",
		description: "<h4>Description:</h4><ul><li>Developed an Android Application that integrated Google Maps and Facebook API</li><li>Managed a team of 4 students, delegating tasks in order to meet our milestones</li><li>Built expectations through set iterations using agile process, stand-up meetings, user stories and tasks and implemented via Behavior Driven Development</li><li>Allows users to create/invite friends to events, view items being brought, see event location on maps, and sign up for carpools to an event</li></ul>",
		language: "Language: Java",
		images: "<h1>HELLO</h1>"
	},
	{
		id: "project2",
		name: "Class Management iOS Application",
		date: "December 2016 - September 2017",
		description: "<h4>Description:</h4><ul><li>Swift iOS application that stores class schedule, assignments, and grade distributions</li><li>Able to toggle assignments from a due date to a grade and calculates grade based on graded assignments</li></ul>",
		language: "Language: Swift",
		images: "<h1>HELLO</h1>"
	},
	{
		id: "project3",
		name: "ISA Developer",
		date: "April 2017 - June 2017",
		description: "<h4>Description:</h4><ul><li>Designed a 9 bit instruction set, instruction formats, and a CPU for a single cycle processor</li><li>Designed register file, ALU, fetch unit, and data memory for CPU, complete with a top-level to tie everything together</li><li>Constructed assembler to translate assembly code into machine code for ISA</li><li>Implemented 2 assembly programs(string match and long division) to verify the functionality of the processor</li></ul>",
		language: "Languages: System Verilog, Python",
		// images: "<div><img class='display-img' src='Project_Images/CSE141L/CSE141L_1.png' alt='Display img'/></div><div class='listimg-flexbox'><img class='listimg' src='Project_Images/CSE141L/CSE141L_1.png' alt='CSE141L_1'/><img class='listimg' src='Project_Images/CSE141L/CSE141L_2.png' alt='CSE141L_2'/></div>"
		images: "<h1>HELLO</h1>"
	},
	{
		id: "project4",
		name: "Online Shopping Application",
		date: "April 2017 - June 2017",
		description: "<h4>Description:</h4><ul><li>Created an online shopping application for users to buy and sell items</li><li>Uses Java/JSP with PostgreSQL database and Tomcat app server, along with error handling and data validation</li><li>Complete with a sales analytics page for owners, using complex SQL queries and AJAX to filter data quickly</li></ul>",
		language: "Languages: Java/JSP, PostgreSQL, Tomcat",
		images: "<div><img class='display-img' src='Project_Images/CSE135/CSE135_1.png' alt='Display img'/></div><div class='listimg-flexbox'><img class='listimg' src='Project_Images/CSE135/CSE135_1.png' alt='CSE135_1'/><img class='listimg' src='Project_Images/CSE135/CSE135_2.png' alt='CSE135_2'/><img class='listimg' src='Project_Images/CSE135/CSE135_3.png' alt='CSE135_3'/><img class='listimg' src='Project_Images/CSE135/CSE135_4.png' alt='CSE135_4'/><img class='listimg' src='Project_Images/CSE135/CSE135_5.png' alt='CSE135_5'/><img class='listimg' src='Project_Images/CSE135/CSE135_6.png' alt='CSE135_6'/><img class='listimg' src='Project_Images/CSE135/CSE135_7.png' alt='CSE135_7'/><img class='listimg' src='Project_Images/CSE135/CSE135_8.png' alt='CSE135_8'/></div>"
	},
	{
		id: "project5",
		name: "Micro-bloggin Web Application",
		date: "September 2017 - December 2017",
		description: "<h4>Description:</h4><ul><li>Developed a web application that allows users to post onto their message board</li><li>Uses PHP with a PostgreSQL backend database that protects against SQL injection, cross-site scripting, and cross-site forgery attacks</li></ul>",
		language: "Languages: PHP, SQL",
		images: "<h1>HELLO</h1>"
	},
	{
		id: "project6",
		name: "Travel Agency Website",
		date: "January 2018 - March 2018",
		description: "<h4>Description:</h4><ul><li></li><li></li><li></li></ul>",
		language: "Languages: HTML, CSS, JavaScript, React, Redux",
		// images: "<div><img class='display-img' src='Project_Images/CSE134B/CSE134_1.png' alt='Display img'</img></div><div class='listimg-flexbox'><img class='listimg' src='Project_Images/CSE134B/CSE134_1.png' alt='CSE134_1'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_2.png' alt='CSE134_2'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_3.png' alt='CSE134_3'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_4.png' alt='CSE134_4'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_5.png' alt='CSE134_5'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_6.png' alt='CSE134_6'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_7.png' alt='CSE134_7'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_8.png' alt='CSE134_8'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_9.png' alt='CSE134_9'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_10.png' alt='CSE134_10'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_11.png' alt='CSE134_11'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_12.png' alt='CSE134_12'></img><img class='listimg' src='Project_Images/CSE134B/CSE134_13.png' alt='CSE134_13'></img></div>"
		images: "<h1>HELLO</h1>"
	}
];

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
				$(".project-description #project-description").html(projects[i].description);
				$(".project-description #project-languages").text(projects[i].language);
				$(".project-description #project-images").html(projects[i].images);
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