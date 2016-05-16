var bio = {
	"name": "Pham Viet Hung",
	"role": "Solution Lead",
	"contacts": {
        "email": "hungpv@hnivc.edu.vn",
        "mobile": "0986119898",
        "skype": "hungpv.esoft",
        "location": "Đội Cung, Hanoi"
	},
    "picture": "http://i.imgur.com/YY2HK8q.jpg",
    "welcomeMessage": "I'm currently working as a Solution Lead at Elcom. Thanks for stopping by!",
    "skills": ["Solution lead", "Research", "Presale"]
};

var work = {
	"jobs": [
		{
            "employer": "Elcom Software Solution",
            "title": "Solution Lead",
            "location": "Duy Tan, Dich Vong, Hanoi",
            "datesWorked": "November 2015 - Now",
            "description": "Lead the telecoms team"
		},
        {
            "employer": "Elcom Software Solution",
            "title": "Presale",
            "location": "Duy Tan, Dich Vong, Hanoi",
            "datesWorked": "June 2011 - August 2015",
            "description": "Work with customer, partner, sales team and development team to give technical solution. Participate in project bidding."
        },
		{
            "employer": "",
            "title": "Maths Tutor",
            "location": "Đội Cung, Hanoi",
            "datesWorked": "September 2006 - May 2011",
            "description": "Taught maths for high school pupils."
		}
	]
};

var education = {
	"schools": [
        { "name": "Hanoi university of science and technology",
            "location": "1 Dai Co Viet, Hanoi",
            "datesAttended": "2015 - 2017",
            "degree": "M.Sc",
            "major": "Information Technology"
        },
        { "name": "University of transport and communication",
            "location": "3 Cau Giay, Hanoi",
            "datesAttended": "2006 - 2011",
            "degree": "B.Sc",
            "major": "Telecoms Engineering"
        }
	],
	"onlineCourses": [
	/*
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud015"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud292"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud304"
		},	
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2014",
			"url": "https://www.udacity.com/course/cs253"
		}
		*/
	]
};

var projects = {
	"projects": [
        {
            "title": "Value Added Service (VAS)",
            "datesWorked": "June 2011 - April 2014",
            "description": "MCA, Voice mail, Notify me, CRBT, Pay for me, Signature call, and other services based on SS7.",
            //"images": ["images/.jpg"],
            "url": "#"
        },
        {
            "title": "Operations Support Systems (OSS) & Business Support Systems (BSS)",
            "datesWorked": "May 2014 - Now",
            "description": "SMPPGw, USSDGw, Mediation, MNP, OCS Billing, CRM.",
            "url": "#"

        }
		/*
        {
            "title": "ETL, Data warehouse & BI",
            "datesWorked": "June 2014",
            "description": "Created a data warehouse and reports using Pentaho.",
            "url": "http://www.pentaho.com/"

        },
        {
            "title": "Mediation",
            "datesWorked": "October 2014",
            "description": "Created the technical proposal for MIC using IBM InfoSphere Streams.",
            "url": "http://www-03.ibm.com/software/products/en/ibm-streams"

        },
        {
            "title": "Find Friends",
            "datesWorked": "March 2015",
            "description": "Implemented a find friends algorithm using MapReduce.",
            "url": "http://stevekrenzel.com/finding-friends-with-mapreduce"


        },
        {
            "title": "Big Data Search Engine",
            "datesWorked": "May 2015",
            "description": "Created a search engine for big data using Elasticsearch.",
            "url": "https://www.elastic.co/"
        },
        {
            "title": "Chat Service",
            "datesWorked": "October 2015",
            "description": "Created a real time chat using Javascript.",
            "url": "http://socket.io/"

        },
        {
            "title": "Ecosystem balance",
            "datesWorked": "November 2015",
            "description": "Simulated the balance of the ecosystem using NetLogo.",
            "url": "https://ccl.northwestern.edu/netlogo/"

        },
        {
            "title": "Search And Recommendation Engine",
            "datesWorked": "February 2016",
            "description": "Created a movie search and recommendation website using Elasticsearch, Mahout and ExpressJS.",
            "url": "http://mahout.apache.org/"

        },
        {
            "title": "Detecting tension in online communities",
            "datesWorked": "September 2015",
            "description": "Created and evaluated some methods to detect tension in online communities using human code and Weka machine learning library.",
            "url": "http://www.sciencedirect.com/science/article/pii/S0040162513000899"
        },
        {
            "title": "Constraint Based Local Search",
            "datesWorked": "April 2016",
            "description": "Studied a Java CBLS library to solve some constraint based problems such as: 8-queens, sudoku, bin packing, balanced academic curriculum, timetabling.",
            "url": "http://dl.acm.org/citation.cfm?id=2833300"
        },
        {
            "title": "Image Compression",
            "datesWorked": "April 2016",
            "description": "Created a JPEG compression application and evaluate the compress ratio, RMSE and PSNR using Java.",
            "url": "http://disp.ee.ntu.edu.tw/meeting/%E7%B6%AD%E6%AF%85/An%20Introduction%20to%20Image%20Compression/An%20introduction%20to%20Image%20Compression.pdf"

        },
        {
            "title": "Fuzzy Rule Base System for Diagnosis",
            "datesWorked": "August 2015",
            "description": "Created a fuzzy rule base system to diagnose of the heart disease using matlab.",
            "url": "http://research.ijcaonline.org/volume57/number7/pxc3883311.pdf"

        }
		*/
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLskype.replace("%data%", bio.contacts.skype));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			//$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */

/*
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8], [2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
			},
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2014, 1], [2013, 1], [2012, 1], [2011, 1]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2013, 2]]
			},
			{
				name: 'PL/SQL',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2010, 2], [2006, 4]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2004, 12], [2003, 6]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[1997, 8], [2004, 2], [2008, 4]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2014, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2014, 5], [2002, 3], [2008, 4], [2005, 2]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2014, 2]]
			},
			{
				name: 'TDD',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2014, 12], [2013, 12], [2012, 12], [2011, 4]]
			},
			{
				name: 'Django',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2013, 2.5]]
			},
			{
				name: 'Perl',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2011, 3], [2013, 1], [2012, 1], [2014, 1]]
			}]
	});
});

*/
$("#mapDiv").append(googleMap);


