const express = require("express");
const { create, result } = require("lodash");
const { isAbsolute } = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { title } = require("process");
const blogRoutes = require('./BlogRoutes/blogRoutes')

//express app:
const app = express();

//Connecting to te mongoDB database:
const dbURI = "mongodb+srv://alphaOG:dutta12345@alphacluster.ndjmksb.mongodb.net/Node_tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.log(err));

app.listen(3000);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded());

app.use(morgan("dev"));

//testing the interaction with the database:(Sandbox Routes):

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title : 'New Blog',
//         snippet : 'This is my new blog',
//         body : 'Hello, Guys this is my new blog please go through it..!'
//     });

//     blog.save()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })
// });

//Actual:

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//Blog routes:
app.use( blogRoutes);

//404 page:
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
