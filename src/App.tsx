
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { Login } from './components/Login-Component/Login';
import { Welcome } from './components/Welcome-Component/Welcome';

import { IntlProvider } from 'react-intl';

import { getSelectedLanguage } from './utils/Apputil';


import './App.css';

const App = () => {

  const stateVariables: any = useSelector(state => state)
  console.log(stateVariables)

  const theme = createTheme({
    palette: {
      mode: stateVariables.overallState.language === "ENG" ? "light" : "dark"
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '20px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px'
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            marginTop: '20px'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            marginTop: '20px',
            background: 'black',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'black',
            },
          },
        }
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={stateVariables.overallState.language} messages={getSelectedLanguage(stateVariables.overallState.language)} defaultLocale={stateVariables.overallState.language}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/welcome" Component={Welcome} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
