import { styled } from 'styled-components';

export const Item = styled.li`
	display: inline-block;
	width: 290px;
	padding: 10px;
	margin: 0 auto;
	border: 1px solid black;
	line-height: 24px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`;

export const ContainerBtn = styled.div`
	display: inline-block;
	margin: 10px 0;
	border-top: 1px solid black;
	width: 100%;

	button {
		padding: 10px;
		margin: 20px 2px 0;
		cursor: pointer;
	}
`;
