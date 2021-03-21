import { FormHelperText, useTheme } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const PasswordField = (props) => {
	const theme = useTheme();

	const { form, name, label, variant, helperText, fullWidth, margin } = props;

	const { errors } = form;

	const [showPassword, setShowPassword] = useState(() => false);

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<FormControl error={!!errors[name]} fullWidth={fullWidth} margin={margin} variant={variant}>
			<InputLabel htmlFor={name}>{label}</InputLabel>
			<Controller
				name={name}
				control={form.control}
				as={OutlinedInput}
				id={name}
				type={showPassword ? 'text' : 'password'}
				label={label}
				endAdornment={
					<InputAdornment position="end">
						<IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>
			<FormHelperText id={name}>{helperText || errors[name]?.message}</FormHelperText>
		</FormControl>
	);
};

PasswordField.propTypes = {
	form: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	variant: PropTypes.string,
	helperText: PropTypes.string,
	fullWidth: PropTypes.bool,
	margin: PropTypes.string
};

PasswordField.defaultProps = {
	label: '',
	variant: 'standard',
	helperText: '',
	fullWidth: true,
	margin: 'normal'
};

export default PasswordField;
