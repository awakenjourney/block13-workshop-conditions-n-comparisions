// Number Line

// numbers to input
// num1: 50, 99, 0, 500, -1000, -5
// num2: 51, -2, 101, -500, 0, 0

// pseudocode: 
// sum num1 and num 2, then compare to get expected result

const numLine = () => {
  let num1 = -5;
  let num2 = 0;
  let sum = num1 + num2;

  if (sum > 100) {
    console.log(`${sum} is greater than 100`);
  } else if (sum > 0) {
    console.log(`${sum} is greater than 0`);
  } else if (sum === 0 ) {
    console.log(`${sum} is equal to 0`);
  } else if (sum ) {
    console.log(`${sum} is a negative number`);
  };
};

// //execute the method
numLine();
