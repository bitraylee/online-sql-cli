function addAllColumnHeaders(arr) {
	var columnSet = []
	for (var i = 0, l = arr.length; i < l; i++) {
		for (var key in arr[i]) {
			if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
				columnSet.push(key)
			}
		}
	}
	return columnSet
}

function buildHtmlTable(arr) {
	var columns = addAllColumnHeaders(arr)
	var result = []
	for (var i = 0, maxi = arr.length; i < maxi; ++i) {
		var row = []
		for (var j = 0, maxj = columns.length; j < maxj; ++j) {
			var cellValue = arr[i][columns[j]]
			row.push(cellValue)
		}
		result.push(row)
	}
	return result
}

export default function (arr) {
	return (
		<table>
			<thead>
				<tr>
					{addAllColumnHeaders(arr).map((element) => {
						return <th>{element}</th>
					})}
				</tr>
			</thead>
			<tbody>
				{buildHtmlTable(arr).map((row) => {
					return (
						<tr>
							{row.map((element) => {
								return <td>{element}</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
