/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Prathiba sravani",
    "role": "Web-Developer",
    "contacts": {
        "mobile": "7702892389",
        "email": "Prathiba@gmail.com",
        "github": "Prathiba1",
        "location": "kothavalasa,vizianagaram"
    },
    "biopic": "images/prathi.jpg",
    "welcomeMessage": "welcome to my world",
    "skills": ["java", "python", "javascript", "drawing"],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedbiopic);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }

        for (var contact = 0; contact < formattedContactInfo.length; contact++) {
            $("#topContacts").append(formattedContactInfo[contact]);
            $("#footerContacts").append(formattedContactInfo[contact]);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "syatems engineer",
        "location": "Banglore",
        "dates": "in progress",
        "description": "Currently working as Systems Engineer with Infosys." +
            "Specializing in Front-end web development for important clients in USA & Europe. " +
            "Presently I am working with Infosys' premier product 'Finnacle'. " +
            "I am working on developing web-pages for the business intelligence system, which takes input from the backend of 'Finnacle'."
    }, {
        "employer": "xyz",
        "title": "designer",
        "location": "vizag",
        "dates": "2015",
        "description": "I am an important member of the team that develops " +
            " the course material for Front-end Web Development course in the premier organisationt that offers MOOCs across the world." +
            " I specialize in creating the feed for Javascript lessons. My core competency is in the areas of JSON and Ajax."
    }],
    "display": function() {

        if (work.jobs.length > 0) {


            for (var job = 0; job < work.jobs.length; job++) {

                $("#workExperience").append(HTMLworkStart);

                var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
                var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

                $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
                $(".work-entry:last").append(formattedworkDates);
                $(".work-entry:last").append(formattedworkLocation);
                $(".work-entry:last").append(formattedworkDescription);
            }
        }
    }
};
var projects = {
    "projects": [{
        "title": "portfolio",
        "dates": "september-2016",
        "description": "Created an portfolio as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
        "images": ["images/portfolio.png"]
         "url": "http://prathibha1.github.io/portfolio/"
    }, {
        "title": "card",
        "dates": "october-2016",
        "description": "card consists of figure and description using box-models",
        "images": ["images/card1.png"]
    },{
        "title": "Resume",
        "dates": "october-2016",
        "description": "Creating my resume on the webpage with the use of javascript, html",
        "images": ["images/resume.png"],
        "url": "https://prathibha1.github.io/prathiba-resume/"
    },{
        "title": "Classic Arcade Game Clone",
        "dates": "November-2016",
        "description": "he task was to add entities to a game loop engine and create the classic arcade game frogger."+
            " Using javaScript, CSS and HTML.",
        "images": ["images/game.png"],
        "url": "https://prathibha1.github.io/frogger-game/"
    }],
    "display": function() {
        if (projects.projects.length > 0) {
            for (var project = 0; project < projects.projects.length; project++) {
                $("#projects").append(HTMLprojectStart);

                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                 var formattedProjectUrl = HTMLprojectUrl.replace("%data%", projects.projects[project].url);

                $(".project-entry:last").append(formattedProjectTitle);
                $(".project-entry:last").append(formattedProjectDates);
                $(".project-entry:last").append(formattedProjectDescription);
                $(".project-entry:last").append(formattedProjectUrl);
                if (projects.projects[project].images.length > 0) {
                    for (var img = 0; img < projects.projects[project].images.length; img++) {
                        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                        $(".project-entry:last").append(formattedProjectImage);
                    }
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Dr.L.Bullayya college of engineering for women",
        "location": "visakhapatnam",
        "degree": "BTech",
        "majors": ["computer science"],
        "dates": "2012-2016",
        "url": "www.Bullayya.com"
    }, {
        "name": "Sri chaithanya jr.college",
        "location": "visakhapatnam",
        "degree": "inter",
        "majors": ["MPC"],
        "dates": "2010-2012",
        "url": "www.srichaithanya.com"
    }, {
        "name": "Suryodhaya model school",
        "location": "vizianagaram",
        "degree": "SSC",
        "major": ["mathmetics"],
        "dates": "2010",
        "url": "www.suryodhaya.com"

    }],
    "onlineCourses": [{
        "title": "fornt-end-web development",
        "school": "udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }, {
        "title": "html5 canvas",
        "school": "udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }],
    "display": function() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var educate = 0; educate < education.schools.length; educate++) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[educate].name).replace("#", education.schools[educate].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[educate].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[educate].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[educate].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[educate].majors);
                var formattedSchoolUrl = HTMLschoolURL.replace("%data%", education.schools[educate].url);
                // var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
                $(".education-entry:last").append(formattedSchoolUrl);
                //$(".education-entry:last").append(formattedSchoolMinor);
            }
            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var online = 0; online < education.onlineCourses.length; online++) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineDates);
                    $(".education-entry:last").append(formattedOnlineURL);
                }
            }
        }
    }
};
bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
$("#mapDiv").append(googleMap);
