// Is Truthy
// value to input:
// "I am a string", result true
// false, result "The boolean value false is falsy"
// null, result "The null value is falsy"
// undefined, result "undefined is falsy"
// 0, result "The number 0 is falsy (the only falsy number)"
// "", result "The empty string is falsy (the only falsy string)"

// pseudocode: 
// input the value

const truthy = (inputValue) => {
  //print true
  if (inputValue === String) {
    console.log(`Truthy`);
  } else if (inputValue !== Boolean) {
    console.log(`The boolean value false is falsy`);
  } else if (inputValue !== {}) {
    console.log("The null value is falsy");
  } else if (inputValue !== undefined) {
    console.log("undefined is falsy");
  } else if (inputValue !== 0) {
    console.log(`The number 0 is falsy (the only falsy number`);
  } else if (inputValue !== "") {
    console.log(`The empty string is falsy (the only falsy stringlsy`);
  }
};

// //input values: "I'am a string", false, null, undefined, 0, or ""
let inputValue = 0;

// //call the method
truthy(inputValue);

