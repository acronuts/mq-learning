import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const FooterWrapper = styled.footer`
	margin-top: -0.1rem;
	height: 2rem;
	width: 100%;
	padding: 1.25rem 0;
	display: flex;
	align-items: center;
	flex-direction: row;
	color: ${colors.dimGray};
	font-size: ${fontSizes.normal};
`;

export const LeftSide = styled.div`
	width: 50%;
`;

export const RightSide = styled.div`
	text-align: right;
	width: 50%;
	i {
		font-size: 1.4rem;
		margin: 0 1rem;
		cursor: pointer;
	}
	i:nth-child(4) {
		margin: 0;
	}
`;
