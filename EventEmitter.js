const EventEmitter = require("events");

const event = new EventEmitter();

// First listener
event.on("response", (name, id) => {
  console.log("Listener 1:");
  console.log("Name:", name);
  console.log("ID:", id);
});

// Second listener
event.on("response", (name, id) => {
  console.log("Listener 2:");
  console.log("Name:", name);
  console.log("ID:", id);
});

// Emit event
event.emit("response", "Anuj", 247);
event.emit("response", "Apoorv", 268);