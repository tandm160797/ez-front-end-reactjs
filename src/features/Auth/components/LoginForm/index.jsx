import { InputField, PasswordField } from '$components/FormControls';
import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useStyles } from './styles';

const LoginForm = (props) => {
	const classes = useStyles();

	const { onSubmit, closeDialog } = props;

	const schema = yup.object().shape({
		email: yup.string().required('Email không được để trống').email('Vui lòng nhập email đúng định dạng'),
		password: yup.string().required('Mật khẩu không được để trống')
	});

	const form = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(schema)
	});

	const { formState } = form;

	const { isSubmitting } = formState;

	const handleSubmit = async (formValues) => {
		if (onSubmit) {
			await onSubmit(formValues);
		}
	};

	return (
		<div className={classes.LoginForm}>
			{isSubmitting && <LinearProgress className={classes.process} />}
			<Avatar className={classes.avt}>
				<LockOutlined />
			</Avatar>
			<Typography className={classes.title} component="h6" variant="h6">
				Đăng nhập tài khoản
			</Typography>
			<form onSubmit={form.handleSubmit(handleSubmit)}>
				<InputField name="email" label="Email" variant="outlined" form={form} />
				<PasswordField name="password" label="Mật khẩu" variant="outlined" form={form} />
				<Button
					disabled={isSubmitting}
					className={classes.submitBtn}
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
				>
					Đăng nhập
				</Button>
				<Button onClick={closeDialog} className={classes.cancelBtn} variant="contained" color="secondary" fullWidth>
					Huỷ
				</Button>
			</form>
		</div>
	);
};

LoginForm.propTypes = {
	onSubmit: PropTypes.func,
	closeDialog: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
	onSubmit: null
};

export default LoginForm;
