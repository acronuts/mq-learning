import React from 'react';
import { FooterWrapper, LeftSide, RightSide } from './styled';
import { Container } from '../../style/Container';

const Footer = () => {
	return (
		<Container>
			<FooterWrapper>
				<LeftSide>
					<p>
						MQ Learning <span>&reg;</span> 2020
					</p>
				</LeftSide>
				<RightSide>
					<a
						href='https://www.linkedin.com/mynetwork/'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-linkedin social-link'></i>
					</a>
					<a
						href='https://www.facebook.com/meaning.quotient/'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-facebook-f social-link'></i>
					</a>
					<a
						href='https://www.instagram.com/meaningquo/'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-instagram social-link'></i>
					</a>
					<a
						href='https://soundcloud.com/user-806321828'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-soundcloud social-link'></i>
					</a>
				</RightSide>
			</FooterWrapper>
		</Container>
	);
};

export default Footer;
