function getWelcomeMsg(name) {
    var msg = "Hello " + name + "," + " welcome to FastTrackIT.";
    return msg;
}
var info = getWelcomeMsg("Adrian");
console.info(info)

function getHello() {
    return "Welcome to my website!";
}
function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 18) {
        return "green"
    }
    return "blue";
}
var Welcome = getHello();
console.info(Welcome)

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement)
var color = getColor();
summaryElement.style.color = color;

// first example
function hideHomePage() {
    document.getElementById('home-page').style.display = 'none';
}
function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}
function clickOnSkills() {
    //hideHomePage();
    //showSkillsPage();
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('skills-page');
}
// first example - end

function hidePage(page) {
    document.getElementById(page).style.display = 'none';
}
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function initMenu() {
    var links = document.querySelectorAll('#top-menu-bar a');
    console.info(links);
    for (var i = 0; i < links.length; i++) {
        console.info("i=", i);
        console.warn("links"[i])
        links[i].onclick = clickOnMenuItem;
    }
}

function clickOnMenuItem() {
    console.warn('clicked on menu', this);
    hideAllPages();
    var pageId = this.getAttribute('data-page');
    console.warn({ pageId });
    showPage(pageId);
}

function hideAllPages() {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}
initMenu();

function showSkills(skills) {
    skills.sort(function (a, b) {
        return b.endorsments - a.endorsments;
    });

    var htmlSkills = skills.map(function (skill) {
        var endorsedBy = skill.endorsedBy ? ' - ' + skill.endorsedBy : '';
        var endorsments = ` <span class="endorsment">(${skill.endorsments}${endorsedBy})</span>`;
        return '<li>' + skill.name.toUpperCase() + endorsments + '</li>';
    });
    console.info(htmlSkills[2]);

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join('');
}
hideAllPages();
showPage('skills-page');


// TODO load skills.json and pass them to showSkills

fetch('data/skills.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log('skills', myJson);
  });

showSkills([{name: 'test', endorsments:1}]);