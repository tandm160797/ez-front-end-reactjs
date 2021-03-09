import { useEffect, useRef, useState } from 'react';

const colors = ['#ff86b8', '#1fd5ed', '#004fa4', '#eb1629', '#f0c1b3', '#9bcfd0', '#f6b969', '#037272', '#dac45f'];

const randomColor = (colors, currentColor) => {
	let idx = Math.floor(Math.random() * colors.length);
	while (currentColor === colors[idx]) {
		idx = Math.floor(Math.random() * colors.length);
	}
	return colors[idx];
};

const useMagicColor = () => {
	const [color, setColor] = useState(() => '#ff86b8');

	const colorRef = useRef('#ff86b8');

	useEffect(() => {
		const magicColorIntervalID = setInterval(() => {
			const newColor = randomColor(colors, colorRef.current);
			colorRef.current = newColor;
			setColor(newColor);
		}, 1000);
		return () => {
			clearInterval(magicColorIntervalID);
		};
	}, []);
	return color;
};

export { useMagicColor };
