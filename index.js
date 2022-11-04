const uniqueArray = (arr) => {
	const result = arr.reduce((prev, curr) => {
		if (prev.every(item => item.Value.toUpperCase() !== curr.Value.toUpperCase())) {
			return [...prev, curr]
		}
		return prev
	}, [])
	return result
}
 
module.exports = uniqueArray