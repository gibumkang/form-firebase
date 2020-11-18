import React from 'react';
import Form from './components/Form';
import { ThemeProvider } from 'styled-components';
import '../node_modules/bulma/css/bulma.min.css';
import Theme from './global/themes';
import GlobalStyle from './global/styles.js';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="App">
                <GlobalStyle />
                <header className="App-header">
                    <Form />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
