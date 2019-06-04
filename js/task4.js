// var array = [12, 100, 34, 65, 10];

var array = [1,,];

function filter(input, than) {
  let j=0;
  let newArray = [];
  let inputLength = input.length;
  for (let i = 0; i < inputLength; ++i) {
    if(input[i] > than) {
      newArray[j] = input[i];
      j++;
    } else if (input[i] === undefined) {
      throw new Error ('Передан пустой массив')
    } else if ( typeof(input[i]) == 'string') {
      throw new Error ('В массиве есть число');
    } else if (input[i] < 0) {
      throw new Error ('В массиве есть отрицательное число' );
    }
  }
  return newArray;
}

try {
var  result = filter(array, 23);
  console.log(result)
} catch (e) {
  console.log(e.message);
}
  