import { login } from '$redux-toolkit/slice/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { useStyles } from './styles';

const Login = (props) => {
	const classes = useStyles();

	const { closeDialog } = props;

	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit = async (formValues) => {
		try {
			const { email, password } = formValues;
			const data = { email, password };
			const action = login(data);
			const actionResult = await dispatch(action);

			unwrapResult(actionResult);
			if (closeDialog) {
				closeDialog();
			}
		} catch (err) {
			enqueueSnackbar(`Đăng nhập thất bại, ${err.message}`, { variant: 'error' });
		}
	};

	return (
		<div className={classes.register}>
			<LoginForm closeDialog={closeDialog} onSubmit={handleSubmit} />
		</div>
	);
};

Login.propTypes = {
	closeDialog: PropTypes.func
};

Login.defaultProps = {
	closeDialog: null
};

export default Login;
