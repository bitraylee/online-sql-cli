// * For Displaying data and realtime search implementation

const { response } = require("express")
const mysql = require("mysql2")
const credentials = require("../../credentials")

const runQuery = (query) => {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection(credentials)
		if (!connection) connection.connect()
		else if (connection) {
			connection.query(query, (err, rows, fields) => {
				if (err) reject(err)

				if (rows != undefined) {
					resolve(rows)
				} else reject("No rows selected")
			})
		} else reject("Unable to fetch data")
	})
}

module.exports = runQuery
