import { combineReducers } from 'redux';

// Reducers
const initialState = {
    language: 'ENG',
    imageUrl: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'
};

const languageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LANGUAGE_CHANGER':
            return { ...state, language: action.payload };
        case 'BACKGROUND_CHANGER':
            return { ...state, imageUrl: action.payload };
        default:
            return state;
    }
};

// Combine Reducers
const rootReducer = combineReducers({
    overallState: languageReducer,
    // Add other reducers here if you have more
});

export default rootReducer;