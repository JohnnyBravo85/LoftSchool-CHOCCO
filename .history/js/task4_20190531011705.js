var array = [12, 100, 34, 65, 10];

function filter(input, than) {
  let j=0;
  let newArray = [];
  let inputLength = input.length;
  for (let i = 0; i < inputLength; ++i) {
    if(input[i] > than) {

    }
  }
}
  
  
  var result = filter(array, 60);
  console.log(result); // [100, 65];
  
  result = filter(array, 20);
  console.log(result); // [100, 34, 65];
  