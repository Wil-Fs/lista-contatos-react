import { useState } from 'react';
import * as S from './styled';

type Props = {
	id: number;
	nome: string;
	email: string;
	telefone: number;
};

const Item = ({ id, nome, email, telefone }: Props) => {
	const [editando, setEditando] = useState(false);

	return (
		<S.Item>
			<p>
				Contato: <span>{nome}</span>
			</p>
			<p>
				Email: <span>{email}</span>
			</p>
			<p>
				Telefone:<span>{telefone}</span>
			</p>
			<S.ContainerBtn>
				{editando ? (
					<>
						<button>Salvar</button>
						<button onClick={() => setEditando(false)}>
							Cancelar
						</button>
					</>
				) : (
					<>
						<button onClick={() => setEditando(true)}>
							Editar
						</button>
						<button>Remover</button>
					</>
				)}
			</S.ContainerBtn>
		</S.Item>
	);
};

export default Item;
