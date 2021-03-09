import React from 'react';
import RegisterForm from '../RegisterForm';
import { useStyles } from './styles';

const Register = () => {
	const classes = useStyles();

	const handleSubmit = (formValues) => {
		console.log('Form submit:', formValues);
	};

	return (
		<div className={classes.register}>
			<RegisterForm onSubmit={handleSubmit} />
		</div>
	);
};

export default Register;
