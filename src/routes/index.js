const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({ status: "ok" });
})
app.get("/api/v1/test", (req, res) => {
    return res.status(200).json({ status: "ok", message: "AutoDev API running" });
});
app.listen(port, () => console.log(`Server is Running on Port ${port}`));

