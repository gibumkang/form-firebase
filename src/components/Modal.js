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

const Modal = (props) => {
	return (
		<div className={`modal ${props.activated ? 'is-active' : undefined}`}>
			<div className='modal-background' onClick={() => props.closeModal(false)}></div>
			<Content className='modal-content'>
				<h2>{props.content.header}</h2>
				{props.content.body}
			</Content>
			<button className='modal-close is-large' aria-label='close' onClick={() => props.closeModal(false)}></button>
		</div>
	);
};

export default Modal;
