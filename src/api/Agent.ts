import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "";

const responseBody = (response: AxiosResponse) => response.data;

export const sleep = (delay: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
};

const request = {
	get: <T>(url: string, params?: URLSearchParams) =>
		axios.get<T>(url, { params }).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
	delete: (url: string, params?: URLSearchParams) =>
		axios.delete(url, { params }).then(responseBody),
};

const authentication = {
	loginAccount: (data: { phoneNumber: string; password: string }) =>
		request.post("auth/login", data),
	registerAccount: (data: { phoneNumber: string; password: string }) =>
		request.post("auth/create", data),
	updateAccount: (accountInfo: any) => request.put("auth/update", accountInfo),
	deleteAccount: (accountInfo: any) =>
		request.delete("auth/delete", accountInfo),
};

const Agent = { authentication };

export default Agent;
