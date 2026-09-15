// Synchronous is a blocking architecture, so the execution of one task
// is dependent on another task and tasks are executed one by one.

// Simple meaning:
// Synchronous = ek task complete hone ke baad hi next task execute hota hai.

function sum() {
  console.log("2");
}

function example() {
  console.log("1");
  sum();
  console.log("3");
}

example();
