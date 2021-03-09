import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
	const { form, name, type, label, variant, helperText, defaultValue, disabled, fullWidth, margin } = props;

	const { errors, formState } = form;

	return (
		<Controller
			name={name}
			control={form.control}
			as={TextField}
			type={type}
			label={label}
			variant={variant}
			helperText={helperText || errors[name]?.message}
			defaultValue={defaultValue}
			disabled={disabled}
			fullWidth={fullWidth}
			margin={margin}
			error={!!(formState.touched[name] && errors[name])}
		/>
	);
};

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	label: PropTypes.string,
	variant: PropTypes.string,
	helperText: PropTypes.string,
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	margin: PropTypes.string
};

InputField.defaultProps = {
	type: 'text',
	label: '',
	variant: 'standard',
	helperText: '',
	defaultValue: '',
	disabled: false,
	fullWidth: true,
	margin: 'normal'
};

export default InputField;
