console.log("hello world");
console.log("anuj upadhyay");
console.log("3+6=", 3 + 6);
console.log("this is my first javascript program");
console.log("This is an error message");

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("Welcome");
});

eventEmitter.emit("lunch");
eventEmitter.emit("lunch");
