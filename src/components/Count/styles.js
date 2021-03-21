import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
	count: {
		color: theme.palette.primary.main
	}
});
const useStyles = makeStyles(styles);

export { useStyles };
