// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// My Solutions

function numberToString(num) {
    return num.toString();
}

const numberToString = num => num.toString();

const numberToString = num => `${num}`;

function numberToString(num) {
    return '' +num;
  }
  