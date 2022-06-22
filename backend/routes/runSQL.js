// * For checking what kind of query it is
"use strict"
// const { response } = require("express")
const express = require("express")
const runQuery = require("../public/javascripts/runQuery")
let router = express.Router()
router.use(express.json({ extended: false }))

router
	.route("/")
	.get((req, res) => {
		const query = req.query.query
		var querySplit = query.split(" ")
		console.log(query, querySplit[0])
		runQuery(query)
			.then((response) => {
				res.send(response)
			})
			.catch((e) => {
				console.log(e)
				res.send([{ Message: "Unable to process the query" }])
			})
		// res.send(querySplit[0])
	})
	.post((req, res) => {})

module.exports = router
