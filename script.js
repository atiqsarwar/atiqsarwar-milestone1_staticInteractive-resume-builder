var skills = document.getElementById('skills');
var toggleButton = document.getElementById('toggle-skills-btn');
toggleButton.addEventListener('click', function () {
    if (skills.style.display == 'none') {
        skills.style.display = 'blocK';
    }
    else {
        skills.style.display = 'none';
    }
});
