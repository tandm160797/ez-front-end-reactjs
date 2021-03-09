import React from 'react';
import { useStyles } from './styles';

const NotFound = () => {
	const classes = useStyles();

	return (
		<div className={classes.notFound}>
			<h1>404 - Page Not Found</h1>
		</div>
	);
};

export default NotFound;
