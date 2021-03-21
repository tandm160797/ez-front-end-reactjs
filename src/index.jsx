import App from '$components/App';
import store from '$redux-toolkit/store';
import theme from '$themes/lightTheme';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { default as React, default as React } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
						<App />
					</SnackbarProvider>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
