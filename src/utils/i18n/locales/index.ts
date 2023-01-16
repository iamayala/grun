import { I18n } from "i18n-js";

import en from "./en";
import fr from "./fr";
import rw from "./rw";
import sw from "./sw";

const i18n = new I18n({
	en,
	"en-US": en,
	fr,
	"fr-FR": fr,
	rw,
	sw,
});

export default () => {
	i18n.enableFallback = true;
	i18n.missingBehavior = "guess";
	return i18n;
};
