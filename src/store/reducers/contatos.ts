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
			telefone: '(14) 12412-4124',
		},
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Vi',
			email: 'Vi@gmail.com',
			telefone: '(14) 12412-4124',
		},
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Mamis',
			email: 'Mamis@gmail.com',
			telefone: '(14) 12412-4124',
		},
		{
			id: Math.round(Math.random() * 10000),
			nome: 'Mimi',
			email: 'Mimi@gmail.com',
			telefone: '(14) 12412-4124',
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
		cadastrarContato: (state, action: PayloadAction<Contato>) => {
			const contatoExiste = state.items.find(
				(contato) =>
					contato.id === action.payload.id ||
					contato.email === action.payload.email
			);

			contatoExiste
				? alert('Já existe um contato cadastrado com este email')
				: (state.items.push(action.payload),
				  alert('Contato cadastrado com sucesso'));
		},
	},
});

export const { removerContato, salvarContato, cadastrarContato } =
	contatosSlice.actions;
export default contatosSlice.reducer;
