const setInitialLanguage = (
	languageNumber: number,
	setLocale: (lang: string) => void
) => {
	switch (languageNumber) {
		case 2:
			setLocale("en");
			break;
		case 0:
			setLocale("rw");
			break;
		case 3:
			setLocale("fr");
			break;
		case 1:
			setLocale("sw");
			break;
		default:
			setLocale("en");
			break;
	}
};

export { setInitialLanguage };
