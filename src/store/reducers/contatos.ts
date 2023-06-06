import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';

type ContatosState = {
	items: Contato[];
};

const initialState: ContatosState = {
	items: [
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Wil',
			email: 'will@gmail.com',
			telefone: '6288312344',
		},
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Vi',
			email: 'Vi@gmail.com',
			telefone: '6288312344',
		},
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Mamis',
			email: 'Mamis@gmail.com',
			telefone: '6288312344',
		},
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Mimi',
			email: 'Mimi@gmail.com',
			telefone: '6288312344',
		},
	],
};

const contatosSlice = createSlice({
	name: 'contatos',
	initialState,
	reducers: {
		removerContato: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(contato) => contato.id !== action.payload
			);
		},
		salvarContato: (state, action: PayloadAction<Contato>) => {
			const indexContato = state.items.findIndex(
				(contato) => contato.id === action.payload.id
			);

			if (indexContato >= 0) {
				state.items[indexContato] = action.payload;
			}
		},
	},
});

export const { removerContato, salvarContato } = contatosSlice.actions;
export default contatosSlice.reducer;