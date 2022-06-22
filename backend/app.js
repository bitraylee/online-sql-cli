// var createError = require("http-errors")
var express = require("express")
// var path = require("path")
// var cookieParser = require("cookie-parser")
// var logger = require("morgan")
const cors = require("cors")

var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")
var runSQLRouter = require("./routes/runSQL")

var app = express()

let corsOption = {
	origin: ["http://localhost:3000"],
}
const port = 8000
app.use(cors(corsOption))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/runSQL", runSQLRouter)

//* main code

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

// module.exports = app
