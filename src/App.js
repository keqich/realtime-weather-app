import './App.css';
import React from 'react';
const { useState } = React;
const Counter = () => {
	const [count, setCount] = useState(5);
	const handleClick = (type) => {
		if (type === 'increment') {
		setCount(count + 1);
		}
		if (type === 'decrement') {
		setCount(count - 1);
		}
	};
	return (
		<div className="container">

		<div className="chevron chevron-up"
			// 使用 JavaScript 的 && 判斷式
			// 當 count >= 10 的時候回傳 'hidden' 否則回傳 false
			style={{
				visibility: count >= 10 && 'hidden',
			}}
			onClick={() => {
				handleClick('increment');
			}}
		/>

		<div className="number">{count}</div>
		<div className="chevron chevron-down"
			// 使用 JavaScript 的 && 判斷式
			// 當 count <= 0 的時候回傳 'hidden' 否則回傳 false
			style={{
				visibility: count <= 0 && 'hidden',
			}}
			onClick={() => {
				handleClick('decrement');
			}}
			/>
		</div>
	);
};
export default Counter;
