const persons = [
  { name: "Thor", age: 20 },
  { name: "Mike", age: 24 },
  { name: "Anne", age: 23 }
];

for (let person of persons) {
  if (person.age > 21) {
    console.log(person.name);
  }
}
