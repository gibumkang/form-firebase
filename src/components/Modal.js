import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
	background: #fff;
	padding: 3rem;
	border-radius: 1rem;
	h2 {
		color: #333;
		margin-bottom: 3rem;
	}
	p {
		font-size: 1.8rem;
	}
`;

const ModalContainer = styled.div`
	padding: 3rem;
`;

const Button = styled.button`
	z-index: 999;
	padding: 1rem;
	background: #666;
	border-radius: 50%;
	box-shadow: 0.1rem 0.1rem 0.1rem #333;
`;

const Modal = (props) => {
	return (
		<ModalContainer className={`modal ${props.activated ? 'is-active' : undefined}`}>
			<div className='modal-background' onClick={() => props.closeModal(false)}></div>
			<Content className='modal-content'>
				<h2>{props.content.header}</h2>
				{props.content.body}
			</Content>
			<Button className='modal-close is-large' aria-label='close' onClick={() => props.closeModal(false)}></Button>
		</ModalContainer>
	);
};

export default Modal;
