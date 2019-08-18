// A function to create an arry of the game FizzBuzz using a while loop and if statements.

var foo = [];
var count = 1;

function fizzBuzz() {

  while (count <=100) {

  if ((count % 3 == 0) && (count % 5 == 0)) {
    foo.push("FizzBuzz");
  }

  if (((count % 5) === 0) && ((count % 3) !== 0)) { 
    foo.push("Buzz");
  }

  if (((count % 3) === 0) && ((count % 5) !== 0)) {
    foo.push("Fizz");
  } 

  if (((count % 3) !== 0) && ((count % 5) !== 0)) { 
    foo.push(count);
 }

  count++;

  console.log(foo);
  }
}

