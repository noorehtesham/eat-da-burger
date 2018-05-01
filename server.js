var express = require("express");
var bodyparser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
