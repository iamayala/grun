import { createContext, useContext } from "react";

interface LocalizationContextValue {
	t: any;
	locale: string;
	setLocale: (locale: string) => void;
}

export const LocalizationContext = createContext<
	LocalizationContextValue | undefined
>(undefined);

export function useStoreContext() {
	const context = useContext(LocalizationContext);
	if (context === undefined) throw Error("oops the store  not found");
	return context;
}
