import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from 'styles/global';
import theme from 'config/theme';
import Routes from 'routes';

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
