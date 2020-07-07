
import React, { useRef, useState, useEffect } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = ({ gender }) => {
	const chartArea = useRef(null)
	const [chart, setChart] = useState(null)

	useEffect(() => {
		if (!chart) {
			setChart(new D3Chart(chartArea.current))
		}
		// skip the loading state, when data is still a pending promise
		else if (chart.menData) {
			chart.update(gender)
		}
	}, [chart, gender])

	return (
		<div className="chart-area" ref={chartArea}></div>
	)
}

export default ChartWrapper