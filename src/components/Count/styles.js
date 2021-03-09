import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
	count: {
		color: theme.color.primary
	}
});
const useStyles = makeStyles(styles);

export { useStyles };
