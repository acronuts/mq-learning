import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopProfileBar } from './styled';
import { Button } from '../../style/Button';
import avatar from '../../assets/images/avatar-placeholder.png';

const UserProfilePage = ({ user }) => {
	const history = useHistory();

	const fullName = `${user.first_name} ${user.last_name}`;

	return (
		<Container>
			<TopProfileBar>
				<div className='avatar-container'>
					<img src={user.avatar ? user.avatar : avatar} alt='avatar' />
					<Link to='#'>
						<Button editProfileBtn onClick={() => history.push('/mainpage/')}>
							Back
						</Button>
						<Button editProfileBtn>Edit profile</Button>
					</Link>
				</div>
				<div className='user-details-container'>
					<div className='left-side'>
						<h2>{fullName}</h2>
						<p>{user.email}</p>
						<p>{user.company ? user.company.name : null}</p>
					</div>
					<div className='right-side'>
						<p>
							{user.address ? user.address : 'No info provided'},
							{user.zip_code ? user.city : 'No info provided'} -
							{user.city ? user.city : 'No info provided'}
						</p>
						<p>{user.country ? user.country : "No info provided"}</p>
					</div>
					<div className='tokens-container'>
						<p>
							Tokens Remaining:
							<span>
								{user.available_credit
									? user.available_credit.total_available
									: null}
							</span>
						</p>
						<p>expiry date: 20/03/2021</p>
					</div>
				</div>
			</TopProfileBar>
		</Container>
	);
};

export default UserProfilePage;
