import axiosClient from '$api/axiosClient';

const restfulAPI = {
	index(params) {
		const url = '/restful';
		return axiosClient.get(url, { params });
	},

	create(data) {
		const url = '/restful';
		return axiosClient.post(url, data);
	},

	show(id) {
		const url = `/restful/${id}`;
		return axiosClient.get(url);
	},

	update(data) {
		const url = `/restful/${id}`;
		return axiosClient.put(url, data);
	},

	destroy(id) {
		const url = `/restful/${id}`;
		return axiosClient.delete(url);
	}
};

export default restfulAPI;
