import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import mqlogo from '../../assets/images/mq-logo.jpg';
import avatar from '../../assets/images/avatar-placeholder.png';
import {
	ViewProfileBtnWrapper,
	ViewProfileBtn,
	TopBarHeader,
	TopBarLeft,
	TopBarCenter,
	TopBarRight,
	AvatarContainer,
	Avatar,
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
	const fullName = `${user.first_name} ${user.last_name}`;
	const history = useHistory();
	const dispatch = useDispatch(); 

	const logOutHandler = () => {
		history.push('/');
		return dispatch(logoutAction());
	}

	return (
		<Container mainPage>
			<TopBarHeader>
				<TopBarLeft>
					<MQLogoWrapper>
						<MQLogo src={mqlogo} alt='logo' />
						<div className='logo-text'>
							<p>Meaning</p>
							<p>Quotient &copy;</p>
						</div>
					</MQLogoWrapper>
				</TopBarLeft>
				<TopBarCenter>
					<TokensValidText>
						<span>
							Credits remaining:{' '}
							{user.available_credit
								? user.available_credit.total_available
								: null}
						</span>
						<span>Valid Until: 31 / 12 / 2020</span>
					</TokensValidText>
				</TopBarCenter>
				<TopBarRight>
					<AvatarContainer>
						<Avatar src={user.avatar ? user.avatar : avatar}></Avatar>
					</AvatarContainer>
					<UserProfileContainer>
						<UserWelcome>Welcome, {fullName}</UserWelcome>
						<CompanyText>
							{user.company ? user.company.name : 'No info provided'}
						</CompanyText>
						<ViewProfileBtnWrapper>
							<ViewProfileBtn>
								<Link to='/user-profile/'>Edit Profile</Link>
							</ViewProfileBtn>
							<ViewProfileBtn onClick={logOutHandler}>Logout</ViewProfileBtn>
						</ViewProfileBtnWrapper>
					</UserProfileContainer>
				</TopBarRight>
			</TopBarHeader>
		</Container>
	);
};

export default TopBar;
