const express = require('express')
const healthRoutes = express.Router()

healthRoutes.get("/health", (req, res) => {
    res.status(200).json({ message: "OK" })
})

module.exports = healthRoutes