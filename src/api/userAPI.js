import axiosClient from '$api/axiosClient';

const userAPI = {
	index(params) {
		const url = '/user';
		return axiosClient.get(url, { params });
	},

	create(data) {
		const url = '/user';
		return axiosClient.post(url, data);
	},

	show(id) {
		const url = `/user/${id}`;
		return axiosClient.get(url);
	},

	update(data) {
		const url = `/user/${id}`;
		return axiosClient.put(url, data);
	},

	destroy(id) {
		const url = `/user/${id}`;
		return axiosClient.delete(url);
	}
};

export default userAPI;
