import { createGlobalStyle } from 'styled-components';
import rightTop from '../assets/images/right_top.png';
import leftBottom from '../assets/images/left_bottom.png';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

	body {
        font-family: Poppins, Tahoma, sans-serif;
		font-size: 1rem;
        line-height: 1.6;
		background: #fff;
		min-height: 100vh;
		height: 100%;
		margin: 0 auto;
        color: rgba(0, 0, 0, .85);
		position: relative;
		z-index: 1;
		::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: url(${rightTop}) no-repeat right top;
			z-index: -1;
		}
		::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url(${leftBottom}) no-repeat left bottom;
			z-index: -1;
		}
    }
    
    a{
		color: inherit;
        text-decoration: none;
    }
`;

// colors
export const colors = {
	white: '#FFF',
	black: '#000',
	gray: '#d6d6d6',
	dimGray: 'rgba(0, 0, 0, .85)',
	navLink: '#FFEBFD',
	navLinkHover: '#FFBDEE',
	purpleMain: '#c26cfc',
	purpleMainHover: '#af38ff',
	workshopSelf: '#F5D0FF',
	workshopSelfHover: '#EEBDFC',
	workshopWork: '#8DD6FF',
	workshopWorkHover: '#66C9FF',
	workshopRelations: '#FFDD5C',
	workshopRelationsHover: '#FCD341',
};

//font-sizes
export const fontSizes = {
	small: '.8rem',
	normal: '1rem',
	medium: '1.2rem',
	large: '1.6rem',
	exLarge: '1.8rem',
};

//border-radius
export const borderRadius = {
	borderRadiusS: '.3rem',
	borderRadius: '.6rem',
	borderRadiusM: '1rem',
	borderRadiusL: '1.5rem',
	borderRadiusXL: '2rem',
};
