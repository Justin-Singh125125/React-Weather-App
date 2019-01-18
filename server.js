const express = require("express");

const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));

    app.use((req, res) => {
        res.sendFile("./build/index.html");
    })
} else {
    app.use(express.static("build"));
    app.use((req, res) => {
        res.sendFile("./build/index.html");
    })
}


app.listen(PORT, function () {
    console.log("listening on port " + PORT);
})