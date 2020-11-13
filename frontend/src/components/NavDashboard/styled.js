import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const NavigationWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
`;

export const NavbarDiV = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 3rem 0 4rem;
	padding-left: 1rem;

	.active {
		background: #d59bfa;
	}

	a {
		padding: 0.7rem 1rem;
		margin: 0 0.1rem;
		font-weight: 400;
		font-size: ${fontSizes.normal};
		transition: linear 0.2s;
		border-bottom: 1px solid transparent;
		background: #fff0ff;

		:hover {
			background: #ffbdee;
		}
	}
`;

export const SubNavbar = styled(NavbarDiV)`
	margin-top: -2rem;

	a {
		background: none;
		font-size: ${fontSizes.medium};
		:hover {
			background: none;
			color: #d59bfa;
		}
	}
`;

export const SectionWorkshop = styled.div`
	min-height: 40rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	grid-row-gap: 3rem;
	width: 100%;
	height: 100%;
	margin-bottom: 3rem;

	.Fragment.ul {
		padding-top: 20rem;
		justify-items: center;
		list-style-type: none;
		scroll-snap-align: start;
	}
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
