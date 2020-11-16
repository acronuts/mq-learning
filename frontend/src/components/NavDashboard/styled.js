import styled from 'styled-components';
import { fontSizes } from '../../style/theme';

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

export const SectionWorkshop = styled.div`
	min-height: 40rem;
	display: flex;
	gap: 3.8rem;
	flex-wrap: wrap;
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
