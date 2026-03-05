const express = require("express")
const router = express.Router()

router.get("/info", (req, res) => {
  res.json({
    name: "Galactiq",
    symbol: "GALACTIQ",
    supply: "1,000,000,000"
  })
})

module.exports = router
