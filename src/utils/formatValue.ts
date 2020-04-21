const formatValue = (value: number): string =>
  `R$ ${Intl.NumberFormat().format(value)}`

export default formatValue
