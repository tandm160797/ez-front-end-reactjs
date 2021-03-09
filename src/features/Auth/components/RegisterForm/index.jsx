import InputField from '$components/FormControls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useStyles } from './styles';

const RegisterForm = (props) => {
	const classes = useStyles();

	const { onSubmit } = props;

	const schema = yup.object().shape({
		email: yup.string().required('Email không được để trống'),
		password: yup.string().required('Mật khẩu không được để trống'),
		passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp')
	});

	const form = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(schema)
	});

	const handleSubmit = (formValues) => {
		console.log('Inside handle submit!!!');
		if (onSubmit) {
			onSubmit(formValues);
		}
		form.reset();
	};

	return (
		<div className={classes.registerForm}>
			<Avatar>
				<LockOutlined />
			</Avatar>
			<Typography component="h6" variant="h6">
				Tạo tài khoản
			</Typography>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<InputField name="email" label="Email" variant="outlined" form={form} />
				<InputField type="password" name="password" label="Mật khẩu" variant="outlined" form={form} />
				<InputField type="password" name="passwordConfirm" label="Nhập lại mật khẩu" variant="outlined" form={form} />
			</form>
		</div>
	);
};

RegisterForm.propTypes = {
	onSubmit: PropTypes.func
};

RegisterForm.defaultProps = {
	onSubmit: null
};

export default RegisterForm;
