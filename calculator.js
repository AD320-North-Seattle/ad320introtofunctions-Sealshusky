console.log(add(10, 2));

function add(a, b) {
  return a + b;
};

const subtract = function (c, d) {
  return c - d;
};

console.log(subtract(10, 2));

const multiply = (e, f) => e * f;

console.log(multiply(10, 2));

function divide(g, h) {
  if (h === 0) {
    return "Cannot divide by zero";
  }
  return g / h;
};

console.log(divide(10,2));

function calculate(a, b, operation) {
  if (operation === "+") {
    return add(a,b);
  }
  else if (operation === "-") {
    return subtract(a,b);
  }
  else if (operation === "*") {
    return multiply(a,b);
  }
  else if (operation === "/") {
    return divide(a,b);
  }
  else {
    return "Unknown operator";
  };
};

console.log(calculate(10,2,"+"));
console.log(calculate(10,2,"-"));
console.log(calculate(10,2,"*"));
console.log(calculate(10,2,"/"));
    
    


