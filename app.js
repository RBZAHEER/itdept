const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define a route
app.get("/", (req, res) => {
  res.render("home"); // Ensure home.ejs includes the partial correctly
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/titans", (req, res) => {
  res.render("titans.ejs");
});
app.get("/academics", (req, res) => {
  res.render("academics.ejs");
});
app.get("/placement", (req, res) => {
  res.render("placement.ejs");
});
app.get("/virtualtour", (req, res) => {
  res.render("virtualtour.ejs");
});
app.listen(3000, () => {
  console.log("Server connected to Port 3000");
});
