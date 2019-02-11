const formatValue = (value) => {
  // eslint-disable-next-line
	return value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
}

export default formatValue
