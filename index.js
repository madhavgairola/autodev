const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json("Working");
})

app.listen(port, () => console.log(`Server is Running on Port ${port}`));

