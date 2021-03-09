import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
	name: 'count',
	initialState: 0,
	reducers: {
		increase(state, action) {
			return state + action.payload;
		},
		decrease(state, action) {
			return state - action.payload;
		}
	}
});
const { actions, reducer } = countSlice;
const { increase, decrease } = actions;

export { increase, decrease };
export default reducer;
