import { createModel } from "@rematch/core";
import { RootModel } from "..";
import Agent from "../../api/Agent";

export interface AccountState {
	uuid: string | null;
	language: number;
	password: string | null;
	ageRange: number | null;
	gender: number | null;
	phoneNumber: string | null;
	registered?: boolean;
	loading?: boolean;
	errors: any;
	authStatus?: Boolean;
	isOffline?: Boolean;
}

const initialState: AccountState = {
	uuid: null,
	language: 1,
	ageRange: null,
	gender: null,
	password: null,
	phoneNumber: null,
	registered: false,
	loading: false,
	errors: {},
	isOffline: false,
};

export const account = createModel<RootModel>()({
	state: initialState,
	reducers: {
		setAccountInfo: (state, payload: AccountState) => ({
			...state,
			uuid: payload.uuid,
			language: payload.language,
			ageRange: payload.ageRange,
			gender: payload.gender,
			authStatus: payload.authStatus,
			password: payload.password,
		}),
		setLanguage: (state: AccountState, payload: number) => ({
			...state,
			language: payload,
		}),
		setAgeRange: (state: AccountState, payload: number) => ({
			...state,
			ageRange: payload,
		}),
		setGender: (state: AccountState, payload: number) => ({
			...state,
			gender: payload,
		}),
		setPhoneNumber: (state: AccountState, payload: string) => ({
			...state,
			phoneNumber: payload,
		}),
		setRegistered: (state: AccountState, payload: boolean) => ({
			...state,
			registered: payload,
		}),
		setErros: (state: AccountState, payload: any) => ({
			...state,
			errors: payload,
		}),
		setLoading: (state: AccountState, payload: boolean) => ({
			...state,
			loading: payload,
		}),
		setIsOffline: (state: AccountState, payload: boolean) => ({
			...state,
			isOffline: payload,
		}),
	},
	effects: (dispatch) => {
		const { account } = dispatch;
		return {
			async register(data): Promise<any> {
				account.setLoading(true);
				const res = await Agent.authentication.registerAccount({
					phoneNumber: data.phoneNumber,
					password: data.password,
				});
				account.setAccountInfo(res.data);
				account.setPhoneNumber(res.data.phoneNumber);
				account.setLoading(false);
			},
		};
	},
});
