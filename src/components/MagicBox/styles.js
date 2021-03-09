import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
	magicBox: {
		width: '160px',
		height: '160px',
		borderRadius: '2px',
		transition: 'all ease-out 0.3s',
		display: 'inline-block'
	}
});
const useStyles = makeStyles(styles);

export { useStyles };
