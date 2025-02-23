import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import mqlogo from '../../assets/images/mq-logo.jpg';
import {
	ViewProfileBtnWrapper,
	ViewProfileBtn,
	TopBarHeader,
	TopBarLeft,
	TopBarCenter,
	TopBarRight,
	AvatarContainer,
	UserProfileContainer,
	UserWelcome,
	TokensValidText,
	CompanyText,
	MQLogoWrapper,
	MQLogo,
} from './styled';
import { logoutAction } from '../../store/actions/logoutAction';
import { useDispatch } from 'react-redux';

const TopBar = ({ user }) => {
	const fullName = user ? `${user.first_name} ${user.last_name}` : 'loading..';

	const history = useHistory();
	const dispatch = useDispatch();

	const logOutHandler = () => {
		history.push('/');
		return dispatch(logoutAction());
	};

	return (
		<Container mainPage>
			<TopBarHeader>
				<TopBarLeft>
					<MQLogoWrapper>
						<MQLogo src={mqlogo} alt='logo' />
						<div className='logo-text'>
							<p>
								Meaning<span>&reg;</span>
							</p>
							<p>Quotient</p>
						</div>
					</MQLogoWrapper>
				</TopBarLeft>
				<TopBarCenter>
					{user ? (
						<TokensValidText>
							<span className={user.is_staff ? 'hide' : null}>
								{user.available_credit && user.company.available_credit
									? user.isAdmin
										? `Company tokens to distribute: ${user.company.available_credit.total_available}`
										: user.is_staff
										? null
										: `Tokens remaining: ${user.available_credit.total_available}`
									: null}
							</span>
							<span className={user.is_staff ? 'hide' : null}>
								Valid Until: 31 / 12 / 2020
							</span>
						</TokensValidText>
					) : (
						'loading...'
					)}
					<TokensValidText>
						{user.isAdmin ? (
							<Fragment>
								<p>
									Personal tokens remaining:{' '}
									{user.available_credit
										? user.available_credit.total_available
										: null}
								</p>
								<span>Valid Until: 31 / 12 / 2020</span>
							</Fragment>
						) : null}
					</TokensValidText>
				</TopBarCenter>
				<TopBarRight>
					<AvatarContainer user={user} />
					<UserProfileContainer>
						<UserWelcome>Welcome, {fullName}</UserWelcome>
						<CompanyText>
							Company: {user.company ? user.company.name : 'No info provided'}
						</CompanyText>
						<ViewProfileBtnWrapper>
							<Link to='/user-profile/'>
								<ViewProfileBtn>Profile</ViewProfileBtn>
							</Link>
							<ViewProfileBtn onClick={logOutHandler}>Logout</ViewProfileBtn>
						</ViewProfileBtnWrapper>
					</UserProfileContainer>
				</TopBarRight>
			</TopBarHeader>
		</Container>
	);
};

export default TopBar;
