//Pair and Compare Exercise

/* value to test:
param1A: "cat", "five", 0, "eight", 11, "cake"
param1B: "cat", 5, false, "eight", "eleven", "cake"

param2A: 6, "dog", "horse", "ate", "four", "pie"
param2B: "6", "dawg", "horse", "ate", "for", "pie"
*/

// pseudocode: 
// compare two values between 1a and 1b, 2a and 2b.
// crate method compareValue
// assign let variable, value1, to input first value and value2 to input second value
// use if/else state to compare both values
// print out the result of comparision

const compareValue = () => {
  let value1 = "6";
  let value2 = 6;

  if (value1 === value2) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }

  // if (value1 === value2) console.log(`true`);
  // else console.log(`false`);
};

let value1 = 5;

compareValue();
