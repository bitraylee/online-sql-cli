// * For checking what kind of query it is
"use strict"
const express = require("express")

let router = express.Router()
router.use(express.json({ extended: false }))

router
	.route("/")
	.get((req, res) => {
		const query = req.query.query
		var querySplit = query.split(" ")
		console.log(query, querySplit[0])

		res.send(querySplit[0])
	})
	.post((req, res) => {})

module.exports = router
