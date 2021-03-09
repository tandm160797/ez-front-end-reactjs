import { useMagicColor } from '$hooks';
import React from 'react';
import { useStyles } from './styles';

const MagicBox = () => {
	const classes = useStyles();
	const magicColor = useMagicColor();

	return <div className={classes.magicBox} style={{ backgroundColor: magicColor }} />;
};

export default MagicBox;
