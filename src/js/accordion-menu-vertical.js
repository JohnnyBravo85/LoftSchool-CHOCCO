;(function() {
  const team = document.querySelector('#team'),
  teamListNames = document.querySelectorAll('.team-list__name'),
  teamListNamesLength = teamListNames.length;

team.addEventListener('click', function (event) {
  for (let i = 0; i < teamListNamesLength; ++i) {
    teamListNames[i].classList.remove('team-list__name--active');
  }
});

for (let i = 0; i < teamListNamesLength; ++i) {
  teamListNames[i].addEventListener('click', function (event) {
    event.stopPropagation();
    if (teamListNames[i].classList.contains('team-list__name--active')) {
      teamListNames[i].classList.remove('team-list__name--active');
    } else {
      for (let i = 0; i < teamListNamesLength; ++i) {
        teamListNames[i].classList.remove('team-list__name--active');
      }
      teamListNames[i].classList.add('team-list__name--active');
    }
  });
};
})()