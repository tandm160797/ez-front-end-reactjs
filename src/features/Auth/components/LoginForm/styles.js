import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
	registerForm: {
		padding: theme.spacing(1)
	},
	process: {
		margin: theme.spacing(2, 0)
	},
	avt: {
		margin: '0 auto',
		backgroundColor: theme.palette.primary.main
	},
	title: {
		textAlign: 'center'
	},
	submitBtn: {
		margin: theme.spacing(2, 0, 1, 0)
	},
	cancelBtn: {
		marginBottom: theme.spacing(1)
	}
});
const useStyles = makeStyles(styles);

export { useStyles };
