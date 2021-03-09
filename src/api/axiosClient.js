import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	paramsSerializer: (params) => queryString.stringify(params)
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
	(req) => {
		return req;
	},
	(err) => {
		return Promise.reject(`Failed to request with error: ${err.message}`);
	}
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	(res) => {
		const { data } = res;
		if (data) {
			return data;
		}
		return res;
	},
	(err) => {
		return Promise.reject(`Failed to response with error: ${err.message}`);
	}
);

export default axiosClient;
