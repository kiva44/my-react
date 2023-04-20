import { React, useState } from 'react'



export default function Counter() {


	const [counter, setCounter] = useState(0)

	const inc = () => {
		setCounter(count => count + 1);
	};

	const dec = () => {
		setCounter(count => count - 1);
	};


	return (
		<div>
			<p>{counter}</p>
			<button onClick={inc}>+ 1</button>
			<button onClick={dec}>- 1</button>
		</div>
	)
}