import { useSelector } from 'react-redux';

import Item from '../Item';
import { ListStyle } from './styled';
import { RootReducer } from '../../store';

const List = () => {
	const { items } = useSelector((state: RootReducer) => state.contatos);

	return (
		<ListStyle>
			{items.map(({ id, nome, email, telefone }) => (
				<Item
					id={id}
					key={id}
					nome={nome}
					email={email}
					telefone={telefone}
				/>
			))}
		</ListStyle>
	);
};

export default List;
