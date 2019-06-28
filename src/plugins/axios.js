import axios from 'axios'

let config = {
	// baseURL: process.env.baseURL || process.env.apiUrl || "http://172.16.10.140:8080/alarm",
	timeout: 15 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
	// headers: {},
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	function (response) {
		// Do something with response data
		return response;
	},
	function (error) {
		// Do something with response error
		return Promise.reject(error);
	}
);

export default _axios;
