var scope = require("scopejs");

scope("Main", function (Module1) {
    return function () {
        console.log(Module1);
        console.log("My App has just started.");
    }
});