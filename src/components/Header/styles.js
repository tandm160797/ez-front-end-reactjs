import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
	header: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	navLink: {
		textDecoration: 'none',
		color: '#fff'
	}
});
const useStyles = makeStyles(styles);

export { useStyles };
