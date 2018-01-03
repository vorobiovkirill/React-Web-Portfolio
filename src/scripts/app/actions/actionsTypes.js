import { CHANGE_LANGUAGE } from '../constants';

export const onLanguageChange = (locale) => {
	return {
		type: CHANGE_LANGUAGE,
		payload: {
			locale,
		},
	};
};
