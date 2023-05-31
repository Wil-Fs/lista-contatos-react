import { styled } from 'styled-components';
import { Colors } from '../../styles';

export const Header = styled.h1`
	position: sticky;
	top: 0;
	padding: 20px;
	width: 100%;
	margin: 0 auto;
	text-align: center;
	background-color: ${Colors.headerBgColor};
`;
