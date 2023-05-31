import { Container, GlobalStyle } from './styles';
import Header from './components/Header';
import List from './components/List';

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<List />
			</Container>
		</>
	);
}

export default App;
