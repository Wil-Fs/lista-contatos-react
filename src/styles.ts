import { styled, createGlobalStyle } from 'styled-components';

export const Colors = {
	mainBgColor: '#000',
	containerBgColor: '#231345',
	headerBgColor: '#982912',
	listBgColor: '#74396',
	btnSalvar: '#44bd32',
	btnCancelRmv: '#c23616',
	btnEdit: '#777',
	bgScrlBar: '#982912',
	bgScrlBar2: 'black',
};

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		list-style: none;
		text-decoration: none;
		overflow-y: hidden;
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
		border: 3px solid orange;
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
