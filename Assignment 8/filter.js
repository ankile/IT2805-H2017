const fruits = ['apple', 'banana', 'orange', 'mango'];
console.log('init');
console.log(fruits);

var fruitsThatEndWithE = [];
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  if (fruit.endsWith('e')) {
    fruitsThatEndWithE.push(fruit)
  }
}

console.log(fruitsThatEndWithE);

for (let fruit of fruits) {
  console.log(fruit);
}

function doesFruitEndWithE(fruit) {
  return fruit.endsWith('e');
}

fruitsThatEndWithE = fruits.filter(doesFruitEndWithE);

console.log(fruitsThatEndWithE);
/* Må sjekkes (shorthand)
fruitsThatEndWithE = fruits.filter(fruits => fruit.endsWith('e'));

console.log(fruitsThatEndWithE);
*/
