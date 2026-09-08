function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

console.log(addition(10, 5));
console.log(subtraction(10, 5));

    console.log("1, Start");

 setTimeout(() => {
    console.log("2, setTimeout");
 }, 0);


 setImmediate(() => {
    console.log("3, setImmediate");
  });
 

 process.nextTick(() => {
    console.log("4, nextTick");
  }); 