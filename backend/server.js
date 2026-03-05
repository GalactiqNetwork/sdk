const express = require("express")
const cors = require("cors")

const tokenRoutes = require("./routes/token")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/token", tokenRoutes)

app.get("/", (req, res) => {
  res.json({
    name: "Galactiq API",
    status: "running"
  })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
