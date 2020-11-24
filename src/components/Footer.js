import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Terms from '../data/Terms';
import Privacy from '../data/Privacy';

const MainFooter = styled.footer`
	color: #fff;
	text-align: center;
	font-size: 1.4rem;
	padding: 5rem 2.5rem;
	span {
		font-weight: bold;
		text-decoration: underline;
		&:hover {
			cursor: pointer;
		}
	}
`;

const Footer = () => {
	const [modal, setModal] = useState(false);
	const [content, setContent] = useState({
		header: '',
		body: '',
	});

	function closeModal(state) {
		setModal(state);
	}

	function handler(e) {
		setModal(true);
		if (e.target.id === 'privacy') {
			setContent({
				header: 'Privacy Policy',
				body: <Privacy />,
			});
		} else if (e.target.id === 'terms') {
			setContent({
				header: 'Terms and Conditions',
				body: <Terms />,
			});
		}
	}

	return (
		<>
			<MainFooter>
				&copy;{new Date().getFullYear()} All Rights Reserved.{' '}
				<span id='privacy' onClick={(e) => handler(e)}>
					Privacy Policy
				</span>{' '}
				|{' '}
				<span id='terms' onClick={(e) => handler(e)}>
					Terms &amp; Conditions
				</span>
			</MainFooter>
			<Modal activated={modal} closeModal={closeModal} content={content} />
		</>
	);
};

export default Footer;
