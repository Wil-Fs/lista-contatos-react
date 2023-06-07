import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';

import Contato from '../../models/Contato';
import { cadastrarContato } from '../../store/reducers/contatos';
import {
	Container,
	Title,
	Form as SForm,
	BtnForm,
	Button,
	DivInputs,
} from './styled';

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
		setNome('');
		setEmail('');
		setTelefone('');
	};

	return (
		<Container>
			<Title>Novo contato</Title>
			<SForm>
				<DivInputs>
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
					<InputMask
						mask="(99) 99999-9999"
						type="tel"
						placeholder="(xx) xxxxx-xxxx"
						value={telefone}
						onChange={({ target }) => setTelefone(target.value)}
					/>
				</DivInputs>
				<Button to="" onClick={cadastrar}>
					Salvar
				</Button>
				<BtnForm to="/">Voltar</BtnForm>
			</SForm>
		</Container>
	);
};

export default Form;
