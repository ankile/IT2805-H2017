const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

/***********************************************************/

/*
const fruitsThatEndsWithE = []; 
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  if (fruit.endsWith('e')) {
    fruitsThatEndsWithE.push(fruit);
  }
}
*/

/***********************************************************/

/*
const fruitsThatEndsWithE = []; 
for (let fruit of fruits) {
  if (fruit.endsWith('e')) {
    fruitsThatEndsWithE.push(fruit);
  }
}
*/

/***********************************************************/

/*
function doesFruitEndWithE(fruit) {
  return fruit.endsWith('e');
}
const fruitsThatEndsWithE = fruits.filter(doesFruitEndWithE);
*/

/***********************************************************/

/*
const fruitsThatEndsWithE = fruits.filter(function (fruit) {
  return fruit.endsWith('e');
});

console.log(fruitsThatEndsWithE);
*/

/***********************************************************/
/*
const fruitsThatEndsWithE = fruits.filter(fruit => fruit.endsWith('e')); 
console.log(fruitsThatEndsWithE);
*/
