import { stockData, selectedCols } from "../database/sampleData"
import { softDrinks } from "../database/softDrinks"
import { currentTables } from "../database/currentTables"

const getTable = (tableName) => {
	switch (tableName) {
		case "STOCKDATA":
			return stockData
		case "SOFTDRINKS":
			return softDrinks
		case "CURRENTTABLES":
			return currentTables
		default:
			return [
				{
					Message: "The entered query is incorrect or table is not found.",
				},
			]
	}
}
export function handleSelect(query) {
	const selectionRegex = new RegExp("SELECT+\\s+([\\w,\\s\\*\\(\\)]+)FROM", "gmi")
	const selectionTypeReg = new RegExp("\\s*(.*?)\\s{1,}")

	const tableReg = new RegExp("from\\s*(\\w+)", "gmi")

	let selection = selectionRegex.exec(query)
	let selectionType = selectionTypeReg.exec(selection[1])
	let selectedTable = tableReg.exec(query)

	let tableToReturn = getTable(selectedTable[1])

	if (selectionType[1] == "*") {
		return tableToReturn
	} else if (selectionType[1] == "COUNT(*)") {
		return [
			{
				"COUNT(*)": `${tableToReturn.length} rows`,
			},
		]
	} else {
		return selectedCols
	}
}
