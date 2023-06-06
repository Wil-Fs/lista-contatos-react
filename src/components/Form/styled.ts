import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
	}
`;

export const Button = styled.button`
	margin-top: 10px;
	padding: 8px;
	margin-right: 4px;
	background-color: #fff;
	border-radius: 2px;
	border: 1px solid #ccc;
`;

export const BtnVoltar = styled(Link)`
	margin-top: 10px;
	padding: 8px;
	margin-right: 4px;
	background-color: #fff;
	border-radius: 2px;
	border: 1px solid #ccc;
`;
