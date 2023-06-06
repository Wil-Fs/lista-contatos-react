import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Contato from '../../models/Contato';
import { cadastrarContato } from '../../store/reducers/contatos';
import { Container, Title, Form as SForm, BtnVoltar, Button } from './styled';

const Form = () => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');

	const dispatch = useDispatch();

	const cadastrar = (event: FormEvent) => {
		event.preventDefault();
		const contatoParaAdicionar = new Contato(
			Math.round(Math.random() * 100000),
			nome,
			email,
			telefone
		);

		dispatch(cadastrarContato(contatoParaAdicionar));
		alert('Contato cadastrado com sucesso');
		setNome('');
		setEmail('');
		setTelefone('');
	};

	return (
		<Container>
			<Title>Novo contato</Title>
			<SForm onSubmit={cadastrar}>
				<input
					type="text"
					placeholder="Nome"
					value={nome}
					onChange={({ target }) => setNome(target.value)}
				/>
				<input
					type="email"
					placeholder="email@exemplo.com"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
				/>
				<input
					type="tel"
					placeholder="(xx) xxxxx-xxxx"
					value={telefone}
					onChange={({ target }) => setTelefone(target.value)}
				/>
				<Button type="submit">Salvar</Button>
				<BtnVoltar to="/">Voltar</BtnVoltar>
			</SForm>
		</Container>
	);
};

export default Form;
