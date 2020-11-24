import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../node_modules/bulma/css/bulma.min.css';
import './global/fonts.css';
import Theme from './global/themes';
import GlobalStyle from './global/styles.js';
import firebase, { FirebaseContext } from './firebase';
import Header from './components/Header';
import CTA from './components/CTA';
import Triad from './components/Triad';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
	return (
		<FirebaseContext.Provider value={{ firebase }}>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Header />
				<CTA />
				<Triad />
				<Table />
				<Footer />
			</ThemeProvider>
		</FirebaseContext.Provider>
	);
}

export default App;
