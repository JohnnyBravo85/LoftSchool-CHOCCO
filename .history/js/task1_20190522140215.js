//TASK 1
var name = "Johnny";

alert(name);

name = "Jenr";

alert(name);

//TASK2
if(true) {
  alert("I\'m true!");
}

if(false) {
  alert("I\'m false!");
}

if(!false) {
  alert('I\'m not a false!');
} else {
  alert('I\'m not a true!');
}

//TASK3
for(let i = 0; i<10; i++ ) {
  console.log(i);
}

//TASK4
function sum (p1,p2,p3) {
  let sum = p1 + p2 + p3;
  return sum;
}

var result = sum (10,20,30);
alert(result);

result = sum (1,2,3);
alert(result);

//TASK5
var array = ['привет', 'loftschool'];

array.push(', я изучаю');
array.push()
