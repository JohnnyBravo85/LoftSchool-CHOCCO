const team = document.querySelector('#team'),
      teamListNames = document.querySelectorAll('.team-list__name'),
      teamListNamesLength = teamListNames.length;

team.addEventListener('click', function(e) {
  for(let i = 0; i < teamListNamesLength; ++i) {
    teamListNames[i].classList.remove('team-list__name--active');
  }
});

for(let i = 0; i < teamListNamesLength; ++i) {
  teamListNames[i].addEventListener('click', function() {

  });
}

