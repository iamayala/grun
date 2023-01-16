import persistPlugin from "@rematch/persist";
import { init, Models, RematchDispatch, RematchRootState } from "@rematch/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { account } from "./models/Account";

export interface RootModel extends Models<RootModel> {
	account: typeof account;
}

const models = {
	account,
};

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	blacklist: [],
	whitelist: ["account"],
};

const store = init<RootModel>({
	models,
	plugins: [persistPlugin(persistConfig)],
});

export type Store = typeof store;
export type AppDispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export default store;
