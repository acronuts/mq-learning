import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopProfileBar } from './styled';
import avatar from '../../assets/images/avatar-1.jpg';
import { Button } from '../../style/Button';
import NavigateDashboard from '../NavDashboard';

const UserProfilePage = () => {
	return (
		<Container>
			<TopProfileBar>
				<div className='avatar-container'>
					<img src={avatar} alt='avatar' />
					<Link to='#'>
						<Button editProfileBtn>Edit profile</Button>
					</Link>
				</div>
				<div className='user-details-container'>
					<div className='left-side'>
						<h2>Marc Mueller</h2>
						{/* FirstName LastName */}
						{/* email */}
						<p>email@email.com</p>
						{/* Company Name */}
						<p>CompanyName</p>
					</div>
					<div className='right-side'>
						{/* address, zipcode, city */}
						<p>Banhofplatz 242, 8053 - Zurich</p>
						{/* country */}
						<p>Switzerland</p>
					</div>
					<div className='tokens-container'>
						<p>Tokens Remaining: 5</p>
						<p>expiry date: 20/03/2021</p>
					</div>
				</div>
			</TopProfileBar>
			<NavigateDashboard />
		</Container>
	);
};

export default UserProfilePage;
