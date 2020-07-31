//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded ({extended: true}));
app.use(express.static("public"));

const itemSchema = {
  name: String
};

const Item = mongoose.model("Item", itemSchema);

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list", {listTitle: day, newAddItems: items});

});

app.post("/", function(req, res) {

  console.log(req.body);

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work", newAddItems: workItems});
});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
