import React from 'react'

const BarChartSample = () => {
	let num = Number('5.00')
	num = num.toFixed(2).replace(/[.,]00$/, '')
	return <div>{`${num}`}</div>
}

export default BarChartSample
