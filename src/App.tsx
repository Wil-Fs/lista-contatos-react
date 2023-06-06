import { Provider } from 'react-redux';

import { Container, GlobalStyle } from './styles';
import Header from './components/Header';
import List from './components/List';

import store from './store';

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Container>
				<Header />
				<List />
			</Container>
		</Provider>
	);
}

export default App;
