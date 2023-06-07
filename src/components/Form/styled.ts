import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Colors } from '../../styles';

export const Container = styled.div`
	width: 100%;
	max-width: 340px;
	margin: 8% auto;
`;

export const Title = styled.h2`
	padding: 20px;
	margin-left: 60px;
`;

export const Form = styled.form`
	margin: 0 auto;
	width: 100%;
	max-width: 340px;
	input {
		display: block;
		padding: 8px;
		margin-bottom: 4px;
		width: 100%;
		color: ${Colors.fonteInputCadastro};
		background-color: ${Colors.bgInputCadastro};
		border: none;
	}
`;

export const DivInputs = styled.div`
	margin-bottom: 20px;
`;

export const BtnForm = styled(Link)`
	display: flex;
	padding: 10px;
	margin-right: 4px;
	border-radius: 2px;
	border: 1px solid ${Colors.btnBorderCadastro};
	text-align: center;
	align-items: center;
	justify-content: center;
	margin-bottom: 4px;
	color: ${Colors.btnFonteCadastro};
	background-color: ${Colors.bgBtnCadastro};

	:hover {
		background-color: ${Colors.hoverBtnCadastro1};
	}
`;

export const Button = styled(BtnForm)`
	:hover {
		background-color: ${Colors.hoverBtnCadastro2};
	}
`;
