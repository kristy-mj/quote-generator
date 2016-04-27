var name = 'Kristy Johnstone'
var formattedName = HTMLheaderName.replace('%data%', name);

var role = 'Web Developer'
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole)
$('#header').prepend(formattedName)

var bio = {
  'name': 'Kristy Johnstone',
  'role': 'Web Developer',
  'contacts': {
    'email': 'johnstonekristy@gmail.com',
    'github': 'kristy-mj',
    'blog': 'http://kristy-mj.github.io',
    'location': 'Wellington'
  },
  'welcomeMessage': 'Hello there! Welcome to the resume of Kristy.',
  'skills': ['pretty skilled', 'has skills', 'lots of skills', 'skilling it', 'skillful'],
  'bioPic': 'https://goo.gl/9Rq6sa'
};


var work = {
  'jobs': [
    {
      'employer': 'Massey University',
      'title': 'Visiting Senior Tutor',
      'location': 'Wellington',
      'dates': '2012-2016',
      'description': 'Teaching a wide variety of textile design papers.'
    },
    {
      'employer': 'Krat',
      'title': 'Designer',
      'location': 'Wellington',
      'dates': '2015-2016',
      'description': 'Designing and developing hand-crafted goods'
    }
  ]
};

var education = {
  'schools': [
    {
      'name': 'Massey University',
      'location': 'Wellington',
      'degree': 'Bachelor of Design',
      'dates': '2007-2010'
    },
    {
      'name': 'Massey University',
      'location': 'Wellington',
      'degree': 'Master of Design',
      'dates': '2011-2012'
    }
  ],
  'onlineCourses': [
  {
    'school': 'Dev Academy',
    'date': 2016,
    'location': 'Wellington'

  }]
};

var projects = {
  'projects': [
    {
      'title': 'A Beautiful Thing',
      'dates': 2016,
      'description': 'Some projects are simply projects. Others are beautiful projects. Like this one.',
      'image': [
        '',
        '']
    }
  ]
};
bio.display = function() { 

    var email = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(email);
    $('#footerContacts').append(email);
    var github = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(github);
    $('#footerContacts').append(github);
    var blog = HTMLblog.replace('%data%', bio.contacts.blog);
    $('#topContacts').append(blog);
    $('#footerContacts').append(blog);
    var location = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(location);
    $('#footerContacts').append(location);
    var bioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $('#header').prepend(bioPic);
    var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(welcomeMessage);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
$('#skills').append(formattedSkill);
}
};
bio.display();

function displayWork() {
  for (job in work.jobs) {
  $('#workExperience').append(HTMLworkStart);
  
  var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $('.work-entry:last').append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
  $('.work-entry:last').append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
  $('.work-entry:last').append(formattedDescription);
};
}
displayWork();



projects.display = function() {
  for (project in projects.projects) {
    $('#projects').append(HTMLprojectStart);
  
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);

    if (projects.projects[project].image.length > 0) {
      for (image in projects.projects[project].image) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
}
projects.display();


education.display = function() { 
  for (school in education.schools) { 
    $('#education').append(HTMLschoolStart);
  
    var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
    $('.education-entry:last').append(formattedName);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    $('.education-entry:last').append(formattedLocation);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    $('.education-entry:last').append(formattedDegree);
         var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
    $('.education-entry:last').append(formattedDates);
  }
}
education.display();


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();

  return name[0] +" "+ name[1];
}
$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);