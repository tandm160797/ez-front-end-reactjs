import axiosClient from '$api/axiosClient';

const userAPI = {
	register(data) {
		const url = '/user/register';
		return axiosClient.post(url, data);
	},
	login(data) {
		const url = '/user/login';
		return axiosClient.post(url, data);
	}
};

export default userAPI;
