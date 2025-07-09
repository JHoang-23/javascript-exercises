const add = function(...args) {
  let sum = 0;
	for (let i = 0; i < args.length; i++){
    sum += args[i]
  }

  return sum
};

const subtract = function(...args) {
  let current = args[0]
  for (let i = 1; i < args.length; i++){
    current -= args[i]
  }
  return current
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }

  return sum
};

const multiply = function(arr) {
  let sum = arr[0];
	for (let i = 1; i < arr.length; i++){
    sum = sum * arr[i]
  }

  return sum
};

const power = function(...args) {
  return args[0]**args[1]
};

const factorial = function(num) {
  let total = 1
  if (num == 0 || num == 1){
    return total
  }

	for (let i = num; i > 1; i--){
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
