import { register } from '$redux-toolkit/slice/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const Register = (props) => {
	const classes = useStyles();

	const { closeDialog } = props;

	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit = async (formValues) => {
		try {
			const { email, password } = formValues;
			const data = { email, password };
			const action = register(data);
			const actionResult = await dispatch(action);
			unwrapResult(actionResult);

			enqueueSnackbar('Đăng ký tài khoản thành công', { variant: 'success' });
			if (closeDialog) {
				closeDialog();
			}
		} catch (err) {
			enqueueSnackbar(`Đăng ký tài khoản thất bại, ${err.message}`, { variant: 'error' });
		}
	};

	return (
		<div className={classes.register}>
			<RegisterForm closeDialog={closeDialog} onSubmit={handleSubmit} />
		</div>
	);
};

Register.propTypes = {
	closeDialog: PropTypes.func
};

Register.defaultProps = {
	closeDialog: null
};

export default Register;
