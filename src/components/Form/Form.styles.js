import styled from 'styled-components';
import { motion } from 'framer-motion';

export const buttonVariants = {
	hover: {
		scale: 1.025,
		transition: { duration: 0.025 },
	},
	tap: {
		scale: 1,
		transition: { duration: 0.025 },
	},
};

export const Input = styled.input`
	border-radius: 0;
	border: 0.1rem solid #666;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 100%;
	padding: 0.5rem;
	font-size: 1.6rem;
	margin-bottom: 0.5rem;
`;

export const Button = styled(motion.button)`
	border-radius: 0.5rem;
	border: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 100%;
	margin-top: 2rem;
	padding: 1rem 0rem;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	text-align: center;
	font-size: 1.4rem;
	font-weight: bold;
	color: #fff;
	transition: all 0.25s ease-in-out;
	background: ${(props) => (props.submitted ? props.theme.colors.disabled : props.theme.colors.primary)};
	&:hover {
		cursor: ${(props) => (props.submitted ? 'not-allowed' : 'pointer')};
	}
`;

export const Form = styled.form`
	margin: 0 auto;
	max-width: 40rem;
	background: #eee;
	border: 0.1rem solid #999;
	border-radius: 0.5rem;
	padding: 2rem;
	p {
		font-size: 1.5rem;
		text-align: center;
		margin-top: 1.5rem;
	}
	h2 {
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: 2.5rem;
		color: ${(props) => props.theme.colors.primary};
	}
	@media screen and (max-width: 850px) {
		margin-right: 2.5rem;
	}
	@media screen and (max-width: 570px) {
		margin: 0 auto;
	}
`;

export const Error = styled.div`
	color: #cf2317;
	font-size: 1.3rem;
	font-weight: bold;
`;

export const Flex = styled.div`
	display: flex;
	div {
		flex: 1;
		margin-right: 2rem;
		&:nth-child(2) {
			margin-right: 0px;
		}
		label {
			display: block;
			font-size: 1.1rem;
			margin-top: 0.5rem;
			letter-spacing: 0.1rem;
			text-transform: uppercase;
		}
	}
`;

//the label which is part of Flex has been left in on purpose
//to showcase the difference between regular scss and styled-components

export const Label = styled.label`
	display: block;
	font-size: 1.1rem;
	margin-top: 0.5rem;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	color: ${(props) => (props.triggerError ? props.theme.colors.danger : '#333')};
`;
