import { styled } from 'styled-components';
import { Colors } from '../../styles';

export const Item = styled.li`
	display: inline-block;
	width: 290px;
	padding: 10px;
	margin: 0 auto;
	border: 1px solid black;
	line-height: 24px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
	background-color: ${Colors.listBgColor};

	span {
		color: ${Colors.fontColorItem};
	}

	textarea {
		resize: none;
		height: 20px;
		background-color: ${Colors.bgColorTextArea};
		color: ${Colors.colorFonteTextArea};
		border: none;
	}
`;

export const ContainerBtn = styled.div`
	display: inline-block;
	margin: 10px 0;
	border-top: 1px solid black;
	width: 100%;
`;

export const Botao = styled.button`
	padding: 10px;
	margin: 20px 2px 0;
	cursor: pointer;
	background-color: ${Colors.btnEdit};
	border: 1px solid black;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
	font-weight: bold;
	color: ${Colors.fontBtnItem};
`;

export const BotaoSalvar = styled(Botao)`
	background-color: ${Colors.btnSalvar};
`;

export const BotaoCancelRmv = styled(Botao)`
	background-color: ${Colors.btnCancelRmv};
`;
