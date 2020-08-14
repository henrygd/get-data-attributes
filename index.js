export default getDataAttributes = (node) =>
	Object.keys(node.dataset).reduce((obj, key) => {
		let dataValue = node.dataset[key]
		try {
			obj[key] = JSON.parse(dataValue)
		} catch (e) {
			obj[key] = dataValue
		}
		return obj
	}, {})
