const { error } = require("console");
const fs = require("fs");

function logMessage(message) {
  fs.appendFile("log.txt", message + "\n", (error) => {
    if (error) {
      console.log("A aparut o eroare:", error);
    } else {
      console.log("Mesaj salvat");
    }
  });
}
