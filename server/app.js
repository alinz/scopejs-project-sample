var scope = require("scopejs"),
    fileGroup = require("filegroupjs"),
    //modify this line to tell framework to load all modules
    path = "modules",
    //what's the name of main module
    main = "Main";

fileGroup(path, function (files) {
    var endsWithDotJS = /.+\.js$/;

    files.filter(function (file) {
        return endsWithDotJS.test(file);
    }).forEach(function (file) {
        require("./" + file);
    });

    scope([main, function (Main) { Main(); }]);
});

scope.get = function (name, callback) {
    callback(require(name));
};