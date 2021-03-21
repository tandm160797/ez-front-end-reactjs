import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
	const { form, name, label, variant, helperText, defaultValue, disabled, fullWidth, margin } = props;

	const { errors } = form;

	return (
		<Controller
			name={name}
			control={form.control}
			as={TextField}
			label={label}
			variant={variant}
			helperText={helperText || errors[name]?.message}
			defaultValue={defaultValue}
			disabled={disabled}
			fullWidth={fullWidth}
			margin={margin}
			error={!!errors[name]}
		/>
	);
};

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	variant: PropTypes.string,
	helperText: PropTypes.string,
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	fullWidth: PropTypes.bool,
	margin: PropTypes.string
};

InputField.defaultProps = {
	label: '',
	variant: 'standard',
	helperText: '',
	defaultValue: '',
	disabled: false,
	fullWidth: true,
	margin: 'normal'
};

export default InputField;
