import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import App from './Components/App'
import GlobalStyle from './Styles/globalStyles'
import theme from './Styles/theme'


ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    </Router>,document.getElementById("root"))