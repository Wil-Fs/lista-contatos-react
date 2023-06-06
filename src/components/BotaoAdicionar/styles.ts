import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../styles';

export const Ciruclo = styled(Link)`
	display: flex;
	height: 64px;
	width: 64px;
	background-color: ${Colors.bgBotao};
	color: ${Colors.fonteBotao};
	position: fixed;
	bottom: 40px;
	right: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	font-size: 30px;
	font-weight: bold;
`;
