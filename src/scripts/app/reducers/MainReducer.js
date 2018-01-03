import * as actionTypes from '../constants';

import _ from 'lodash';

const initialState = {
	currentLocale: 'en',
};

const MainReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_LANGUAGE: {
			return {
				...state,
				currentLocale: action.payload.locale,
			};
		}
		default:
			return state;
	}
};

export default MainReducer;
