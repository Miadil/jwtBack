const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

const authRouter = require("./routes/auth.js")

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/auth", authRouter)

app.get("/", (req, res) => {
	res.send("je suis la '/'")
})

app.use((req, res, next) => {
	const err = new Error("Not Found")
	err.status = 404
	next(err)
})

let server = app.listen(process.env.PORT || 3030, function () {
	console.log("Listening on port " + server.address().port)
})
