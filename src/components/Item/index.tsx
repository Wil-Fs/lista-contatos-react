import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styled';
import Contato from '../../models/Contato';
import { removerContato, salvarContato } from '../../store/reducers/contatos';

type Props = Contato;

const Item = ({
	id,
	nome: nomeInicial,
	email: emailInicial,
	telefone: telefoneInicial,
}: Props) => {
	const dispatch = useDispatch();
	const [editando, setEditando] = useState(false);
	const [nome, setNome] = useState(nomeInicial);
	const [email, setEmail] = useState(emailInicial);
	const [telefone, setTelefone] = useState(telefoneInicial);

	const salvarEdicao = () => {
		setEditando(false);
		dispatch(
			salvarContato({
				id,
				nome,
				email,
				telefone,
			})
		);
	};

	const cancelarEdicao = () => {
		setNome(nomeInicial);
		setEditando(false);
	};

	return (
		<S.Item>
			<p>
				<b>Contato: </b>{' '}
				{editando ? (
					<textarea
						value={nome}
						onChange={(event) => setNome(event.target.value)}
					/>
				) : (
					<span>{nome}</span>
				)}
			</p>
			<p>
				<b>Email:</b>
				{editando ? (
					<textarea
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				) : (
					<span>{email}</span>
				)}
			</p>
			<p>
				<b>Telefone:</b>
				{editando ? (
					<textarea
						value={telefone}
						onChange={(event) => setTelefone(event.target.value)}
					/>
				) : (
					<span>{telefone}</span>
				)}
			</p>
			<S.ContainerBtn>
				{editando ? (
					<>
						<S.BotaoSalvar onClick={() => salvarEdicao()}>
							Salvar
						</S.BotaoSalvar>
						<S.BotaoCancelRmv onClick={() => cancelarEdicao()}>
							Cancelar
						</S.BotaoCancelRmv>
					</>
				) : (
					<>
						<S.Botao onClick={() => setEditando(true)}>
							Editar
						</S.Botao>
						<S.BotaoCancelRmv
							onClick={() => dispatch(removerContato(id))}
						>
							Remover
						</S.BotaoCancelRmv>
					</>
				)}
			</S.ContainerBtn>
		</S.Item>
	);
};

export default Item;

// #c23616 Botão cancelar;  #44bd32 Botão salvar;
