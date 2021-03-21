import userAPI from '$api/userAPI';
import StorageKeys from '$constants/StorageKeys';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const register = createAsyncThunk('user/register', async (payload, thunkAPI) => {
	const data = await userAPI.register(payload);
	const { stt, code, msg, user, jwtToken } = data;

	if (code === 200) {
		localStorage.setItem(StorageKeys.JWT_TOKEN, jwtToken);
		localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
		return user;
	}
	if (code === 400) {
		return Promise.reject(msg);
	}
});

const login = createAsyncThunk('user/login', async (payload, thunkAPI) => {
	const data = await userAPI.login(payload);
	const { stt, code, msg, user, jwtToken } = data;

	if (code === 200) {
		localStorage.setItem(StorageKeys.JWT_TOKEN, jwtToken);
		localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
		return user;
	}
	if (code === 401) {
		return Promise.reject(msg);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {}
	},
	reducers: {
		logout(state, action) {
			localStorage.removeItem(StorageKeys.USER);
			localStorage.removeItem(StorageKeys.JWT_TOKEN);
			state.current = {};
		}
	},
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.current = action.payload;
		},
		[login.fulfilled]: (state, action) => {
			state.current = action.payload;
		}
	}
});
const { actions, reducer } = userSlice;
const { logout } = actions;

export { register, login, logout };
export default reducer;
