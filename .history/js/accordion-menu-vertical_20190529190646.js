const team = document.querySelector('#team'),
      teamListItems = document.querySelectorAll('.team-list__item'),
      teamListItemsLength = teamListItems.length;

team.addEventListener('click', function(e) {
  for(let i = 0; i < teamListItemsLength; ++i) {
    teamListItems[i].classList.remove('')
  }
})
