import { decrease, increase } from '$redux-toolkit/slice/countSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';

const Count = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const countValue = useSelector((state) => state.count);

	const handleIncreaseClick = () => {
		const action = increase(1);
		dispatch(action);
	};
	const handleDecreaseClick = () => {
		const action = decrease(1);
		dispatch(action);
	};

	return (
		<div className={classes.count}>
			<div>{countValue}</div>
			<button onClick={handleIncreaseClick}>Increase</button>
			<button onClick={handleDecreaseClick}>Increase</button>
		</div>
	);
};

export default Count;
