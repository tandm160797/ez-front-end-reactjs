import Count from '$components/Count';
import Header from '$components/Header';
import MagicBox from '$components/MagicBox';
import NotFound from '$components/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router';
import { useStyles } from './styles';

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Header />
			<Switch>
				<Route path="/" exact />
				<Route path="/count" component={Count} />
				<Route path="/magic-box" component={MagicBox} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;
