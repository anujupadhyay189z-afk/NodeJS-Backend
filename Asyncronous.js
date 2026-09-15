// Asyncronous is a non- blocking architecturre, so the execution of one task
// is not dependent  on another task can run simultaneously.

// Simple meaning:
// Asynchronous = ek task wait karte time doosra task execute ho sakta hai.

function sum() {
  setTimeout(() => {
    console.log("2");
  }, 2000);
}

function example() {
  console.log("1");

  sum();
  console.log("3");
}
example();
