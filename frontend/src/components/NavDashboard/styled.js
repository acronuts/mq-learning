import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const NavigationWrapper = styled.section`
	margin: 3rem 0;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const NavbarDiV = styled.div`
	display: flex;
	width: 20%;
	height: 100%;
	min-height: 40rem;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0 2rem;
`;

export const SectionWorkshop = styled.div`
	display: flex;
	width: 80%;
	flex-direction: column;
	align-items: center;
	height: 40rem;
	overflow-y: scroll;
	scroll-snap-type: mandatory;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}

	.Fragment.ul {
		padding-top: 20rem;

		justify-items: center;
		list-style-type: none;
		scroll-snap-align: start;
	}
`;

export const SectionInfo = styled.section`
	margin: 4% 0;
	border-radius: 1 Rem;
	width: 100%;
	height: 10rem;
	text-align: center;
	background-color: #fff !important;
	border-radius: 5px;
`;

export const BtnContainer = styled.div`
	width: 90%;
	margin-top: 0.5rem;
	text-align: right;
	Button {
		margin: 0 0.8rem;
	}
	/* Button:last-child {
		margin-right: 0;
	} */
`;
