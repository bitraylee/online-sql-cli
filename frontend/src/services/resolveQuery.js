import { stockData } from "../database/sampleData"
import { handleSelect } from "./handleSelect"
export function resolveQuery(query) {
	query = query.toUpperCase()
	var querySplit = query.split(" ")
	switch (querySplit[0]) {
		case "SELECT":
			return handleSelect(query)
		// return stockData
		case "UPDATE":
			return [
				{
					Message: "2 rows have been updated successfully!",
				},
			]
		case "DELETE":
			return [
				{
					Message: "2 rows have been deleted successfully!",
				},
			]
		case "CREATE":
			return [
				{
					Message: "New table has been created!",
				},
			]
		default:
			return [
				{
					Message: "This query is not recognized by the system",
				},
			]
	}
}
