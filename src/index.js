import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

 const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#5d8bc8',
          main: '#265e97',
          dark: '#003569',
          contrastText: '#fff',
        },
        secondary: {
          light: '#d05d73',
          main: '#9b2c48',
          dark: '#680021',
          contrastText: '#fff',
        },
        warning: {
            light: '#ffbd5c',
            main: '#ed8c2c',
            dark: '#b55e00',
            contrastText: '#fff',
          },
      },
    overrides: {
       
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS

        },
      },
    },
  });

  ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />,
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
