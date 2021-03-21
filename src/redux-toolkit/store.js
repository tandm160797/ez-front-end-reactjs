import { configureStore } from '@reduxjs/toolkit';
import { countReducer, userReducer } from './slice/index';

const store = configureStore({
	reducer: {
		count: countReducer,
		user: userReducer
	}
});

export default store;
