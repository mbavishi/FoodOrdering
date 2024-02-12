const express = require("express");
const app = express();

const http = require("http");
http.createServer((req, res) => {
    console.log(res);
    res.write("hello");
    res.end()
})

const port = 5000;

app.get("/", (req, res) => {
    console.log(req);
    console.log("hello");
})

app.listen(port, () => {
    console.log(`listning on ${port}`);
})