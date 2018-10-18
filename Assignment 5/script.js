/* Part 2 */
console.log('PART 2')

/* A for-loop that runs through the integers from 1 to, but not including 21,
and then prints the integer to the developer console. */
for (i = 1; i < 21; i++) {
  console.log(i);
}

/* Empty line for spacing in the console */
console.log("")

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/* A for-loop that loops through the "numbers"-array and console.logs different
   outputs dependent of whether the number is divisable by 3, 5 or both. If the
   number is divisable, a string is printed in place of it. If the number isn't
   divisable, the number itself will be printed. */
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 15 === 0) {
    console.log("eplekake");
  } else if (numbers[i] % 3 === 0) {
    console.log("eple");
  } else if (numbers[i] % 5 === 0) {
    console.log("kake");
  } else {
    console.log(numbers[i])
  }
}

/* Part 4 */

/* Go to the document DOM and fetch the element with the id 'title' and set it's
   inner text to the string 'Hello, JavaScript'. */
document.getElementById('title').innerText = 'Hello, JavaScript';


/* Part 5 */

/* Assigning the element with id 'magic' to a variable for easier manipulation
   and less repeating down the line, in accordance with the DRY-principle. */
var magic = document.getElementById('magic').style;
/* Will add here that I usually wouldn't add the "style" at the end there,
   because it makes the usage more restricted down the line, but in this case
   I know I will only be manipulating the style of the element, so it makes for
   less writing. */

/* This function changes the 'display' css-attribute of my 'magic' element to
   'none' when the appropriate button is pressed, which makes the element
   disappear and not take up any space. */
function changeDisplay () {
  magic.display = 'none';
}

/* This function  makes 'magic' go invisible, by
   changing the 'visibility' attribute to 'hidden', and take up space by setting
   'display' to 'block', when the corresponding button is pressed */
function changeVisibility () {
  magic.visibility = 'hidden';
  magic.display = 'block';
}

/* This function sets all the attributes back to the standard settings */
function reset () {
  magic.display = 'block';
  magic.visibility = 'visible';

}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

/* A for loop that, for every element in the list of web technologies, creates
   a new <li> element, and then adds the name of the technology to the element
   and then adds the whole thing to the end of the <ul> element in the DOM,
   through the use of the appendChild() method. */
for (i = 0; i < technologies.length; i++) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(technologies[i]);
  node.appendChild(textnode);
  document.getElementById('tech').appendChild(node);
}
