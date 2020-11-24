import styled from 'styled-components';

export const Container = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`;

export const MainTable = styled.table`
	text-align: center;
	td {
		color: #949191;
		font-family: ${(props) => props.theme.fonts.header};
		vertical-align: middle;
		@media screen and (max-width: 1100px) {
			font-size: 1.9rem;
		}
	}
	td,
	th {
		font-size: 2.2rem;
	}
	th {
		font-weight: normal;
		@media screen and (max-width: 1100px) {
			font-size: 1.7rem;
		}
	}
`;

export const Td = styled.td`
	color: ${(props) => props.theme.colors.primary} !important;
`;

export const CarHeader = styled.th`
	width: 39rem;
	position: relative;
	img {
		max-width: 40rem;
		position: absolute;
		bottom: 2rem;
		left: -2rem;
		@media screen and (max-width: 1100px) {
			display: none;
		}
	}
`;

export const LogoHeader = styled.th`
	width: 27rem;
	img {
		padding: 1.5rem 2.5rem;
		margin-top: 1.75rem;
		@media screen and (max-width: 1100px) {
			padding: 0rem;
			margin-top: 1rem;
		}
	}
`;

export const TableFooter = styled.div`
	background: #fff;
	color: #666;
	text-align: center;
	padding: 2.5rem 0rem;
	h2 {
		font-size: 3rem;
		padding: 0rem 1rem;
	}
	p {
		font-size: 1.5rem;
		padding: 2.5rem 1rem 0rem 1rem;
	}
`;

export const TableContainer = styled.div`
	margin-bottom: 0rem !important;
`;
