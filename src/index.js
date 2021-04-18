import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';


import App from './Components/App'
import GlobalStyle from './Styles/globalStyles'
import theme from './Styles/theme'
import store from './Redux/Reducers'


ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </Router>,document.getElementById("root"))