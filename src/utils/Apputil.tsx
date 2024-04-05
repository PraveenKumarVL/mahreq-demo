import validator from "validator";
import login_cred from '../mockjson/login_cred.json';
import TranslationDataEng from '../intl/TranslationDataEng.json';
import TranslationDataHin from '../intl/TranslationDataHin.json';
import { Constants } from "../constants/Constants";

export const mockLoginUtil = (emailId: string, password: string) => {
    let result = {
        errorMessage: Constants.ERROR_MESSAGES.INVALID_CREDENTIALS,
        loggedIn: false
    }
    if (!validateEmail(emailId)) {
        login_cred.map((item) => {
            if (item.emailId == emailId && item.password == password) {
                result.errorMessage = ''
                result.loggedIn = true
            }
        })
    } else {
        result.errorMessage = Constants.ERROR_MESSAGES.EMAIL_MISSING
    }
    return result
}

export const validateEmail = (emailId: string) => {
    return emailId ? !validator.isEmail(emailId) : false
}

export const getSelectedLanguage = (language: string) => {
    switch (language) {
        case 'ENG':
            return TranslationDataEng;
        case 'HIN':
            return TranslationDataHin;
    }
};