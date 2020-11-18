import React from 'react';
import Form from './components/Form';
import { ThemeProvider } from 'styled-components';
import '../node_modules/bulma/css/bulma.min.css';
import Theme from './global/themes';
import GlobalStyle from './global/styles.js';
import firebase, {FirebaseContext} from './firebase'

function App() {
    return (
        <FirebaseContext.Provider value={{firebase}}>
            <ThemeProvider theme={Theme}>
                <div className="App">
                    <GlobalStyle />
                    <header className="App-header">
                        <Form />
                    </header>
                </div>
            </ThemeProvider>
        </FirebaseContext.Provider>
    );
}

export default App;
