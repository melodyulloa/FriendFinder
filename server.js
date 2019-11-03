var express = require("express");
var app = express();
var PORT = 3000;

var path = require("path");

//middleware-express does not let you receive static files, enable below:
app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(app);
// require("app/routing/htmlRoutes")(app);

//





// listen (start app with node server.js) ======================================
app.listen(process.env.PORT || PORT);
console.log("App listening on port " + PORT);
module.exports = app;
