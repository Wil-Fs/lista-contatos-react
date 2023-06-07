import { styled, createGlobalStyle } from 'styled-components';

export const Colors = {
	mainBgColor: '#000',
	fontColor: '#525b56',
	containerBgColor: '#040c0e',
	headerBgColor: '#040c0e',
	listBgColor: '#000',
	bgColorTextArea: '#040c0e',
	colorFonteTextArea: '#525b56',
	fontColorItem: '#fff',
	btnSalvar: '#44bd32',
	btnCancelRmv: '#c23616',
	fontBtnItem: '#000',
	btnEdit: '#777',
	bgScrlBar: '#040c0e',
	bgScrlBar2: '#000',
	bgScrlBar3: '#525b56',
	bgBotao: '#525b56',
	fonteBotao: '#fff',
	bgInputCadastro: '#000',
	fonteInputCadastro: '#fff',
	bgBtnCadastro: '#525b56',
	hoverBtnCadastro1: '#44bd32',
	hoverBtnCadastro2: '#c23616',
	btnBorderCadastro: '#000',
	btnFonteCadastro: '#000',
};

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Roboto Condensed' ,sans-serif;
		list-style: none;
		text-decoration: none;
		overflow-y: hidden;
		color: ${Colors.fontColor}
	}

	body {
		background-color: ${Colors.mainBgColor};
		
		*::-webkit-scrollbar {
  		width: 12px;
		}

		*::-webkit-scrollbar-track {
		background: ${Colors.bgScrlBar};
		}	

		*::-webkit-scrollbar-thumb {
		background-color: ${Colors.bgScrlBar2};
		border-radius: 20px;
		border: 3px solid ${Colors.bgScrlBar3};
		}
	}
`;

export const Container = styled.div`
	max-width: 660px;
	height: 90vh;
	overflow-y: scroll;
	width: 100%;
	margin: 2% auto 5%;
	background-color: ${Colors.containerBgColor};
`;
