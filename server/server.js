const express = require("express")
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    console.log(req);
    console.log("hello");
})

app.listen(port, () => {
    console.log(`listning on ${port}`);
})