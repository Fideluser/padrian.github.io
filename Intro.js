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
    document.getElementById('home-page').style.display = 'none'
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