// Login.js
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Paper, IconButton, Snackbar } from '@mui/material';
import { Translate } from '@mui/icons-material';

import { CustomTextField } from '../Custom-Textfield/CustomTextField';

import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { mockLoginUtil, validateEmail } from '../../utils/Apputil';
import { Constants } from '../../constants/Constants';

import './Login.css';


export const Login = () => {
    const intl = useIntl()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [errorAlert, setErrorAlert] = useState(false);
    const stateVariables: any = useSelector(state => state)
    const emailIdText = intl.formatMessage({ id: 'emailId' });
    const passwordText = intl.formatMessage({ id: 'password' });
    const loginButtonText = intl.formatMessage({ id: 'loginButton' });

    const handleTranslate = () => {
        if (stateVariables.overallState.language === "ENG") {
            dispatch({ type: 'LANGUAGE_CHANGER', payload: 'HIN' })
            dispatch({ type: 'BACKGROUND_CHANGER', payload: Constants.IMAGES_URL.DARK_MODE_IMAGE })
        } else {
            dispatch({ type: 'LANGUAGE_CHANGER', payload: 'ENG' })
            dispatch({ type: 'BACKGROUND_CHANGER', payload: Constants.IMAGES_URL.LIGHT_MODE_IMAGE })
        }
    }

    const handleLogin = () => {
        let result = mockLoginUtil(emailId, password)
        if (result.loggedIn) {
            navigate('/welcome')
        } else {
            setErrorAlert(true)
            setErrorMessage(result.errorMessage)
        }
    }

    return (
        <div className="login-container" style={{ backgroundImage: `url(${stateVariables.overallState.imageUrl})` }}>
            <Paper className="login-paper">
                <div className='header-div'>
                    <img className='header-image' src={Constants.IMAGES_URL.MASHREQ_IMAGE_URL} />
                    <IconButton onClick={handleTranslate}>
                        <Translate />
                    </IconButton>
                </div>
                <CustomTextField
                    data-testid="emailId"
                    variant='outlined'
                    fullWidth
                    error={validateEmail(emailId)}
                    value={emailId}
                    type='email'
                    onChange={(e) => setEmailId(e.target.value)}
                    label={emailIdText}
                    id='emailId'
                />
                <CustomTextField
                    variant='outlined'
                    fullWidth
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label={passwordText}
                    id='password'
                    data-testid="password"
                />
                <Button
                    onClick={handleLogin}
                    id='loginButton'
                    data-testid="loginButton"
                    disabled={(emailId && password) ? false : true}
                    variant='contained'>
                    {loginButtonText}
                </Button>
            </Paper>
            <Snackbar
                open={errorAlert}
                message={errorMessage}
                onClose={() => setErrorAlert(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    );
};

export default Login;
