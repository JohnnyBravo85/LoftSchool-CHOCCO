//TASK 1
const elementDiv = document.createElement('div');
document.body.appendChild(elementDiv);
elementDiv.textContent = 'Этот элемент создан при помощи DOM API';

//TASK 2
const elementDiv2 = document.createElement('div');
elementDiv2.className('inner');
elementDiv2.textContent = 'Этот элемент тоже создан при помощи DOM API';

const divSelect = document.querySelector('div')