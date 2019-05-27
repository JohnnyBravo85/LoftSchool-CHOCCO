//TASK 1
const elementDiv = document.createElement('div');
document.body.appendChild(elementDiv);
elementDiv.textContent = 'Этот элемент создан при помощи DOM API';

//TASK 2
const elementDiv2 = document.createElement('div');
elementDiv2.classList.add('inner');
elementDiv2.textContent = 'Этот элемент тоже создан при помощи DOM API';
elementDiv.appendChild(elementDiv2);

//TASK 3
elementDiv2.style.color = 'red';

//TASK 4
elementDiv2.addEventListener('click', function() {
  console.log('Этот текст говорит о том, что я всё сделал правильно');
  });

  //TASK 5
  const elementA = document.createElement('a');
  elementA.href = 'https://loftschool.com';
  elementA.textContent = 'https://loftschool.com';
  document.body.appendChild(elementA);
  elementA.addEventListener('click', function () {
    console.log('Я кликнул на ссылку https://loftschool.com');
    console.log(linkclick);
    event.preventDefault();
  });

  link.addEventListener('click', function(linkclick) {
    console.log(linkclick);
})