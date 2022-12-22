const express = require("express");
const app = express();
// view engine middleware
app.set("view engine", "ejs")
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
    res.send("hello express")
})
// my post route
app.get("/mypost", (req, res) => {
    console.log(req.body);
    console.log(req.files)
    // res.send(req.body)
})

// my get route
app.get("/myget", (req, res) => {
    console.log(req.body);
    res.send(req.query)
    // res.send(req.body)
})

// rendering the page for get
app.get("/getform", (req, res) => {
    res.render("getform")
})
// rendering the page for ppost
app.get("/postform", (req, res) => {
    res.render("postform")
})
app.listen(4000, () => {
    console.log(" the code is running at port number 4000")
})