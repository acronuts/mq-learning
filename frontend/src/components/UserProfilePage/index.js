import {React, useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopProfileBar, ProfileDetailsContainer } from './styled';
import { Button } from '../../style/Button';
import { Avatar } from './styled';
import avatar from '../../assets/images/avatar-placeholder.png';
import {useDispatch, useSelector} from "react-redux";

const UserProfilePage = ({ user }) => {
	const token = localStorage.getItem('token')
	const history = useHistory();
	const dispatch = useDispatch();

	const [currentStage, setcurrentStage] = useState(true);
	const [email, setEmail] = useState(user.email);
	const [first_name, setFirstName] = useState(user.first_name);
	const [last_name, setLastName] = useState(user.last_name);
	const [company, setCompany] = useState(user.company.name);
	const [address, setAddress] = useState(user.address);
	const [zip_code, setZip] = useState(user.zip_code);
	const [city, setCity] = useState(user.city);
	const [country, setCountry] = useState(user.country);
	const [avatar, setAvatar] = useState(user.avatar)

	const fullName = `${user.first_name} ${user.last_name}`;

	return (
		<Container>
			<TopProfileBar>
				<div className='avatar-container'>
					<Avatar user={user ? user : null} />
					<Link to='#'>
						<Button editProfileBtn onClick={() => history.push('/mainpage/')}>
							Back
						</Button>
						<Button editProfileBtn onClick={() => setcurrentStage(!currentStage)}>Edit profile</Button>
					</Link>
				</div>
				<div className='user-details-container'>
					<div className='left-side'>
						<h2>{fullName}</h2>
						<p>{user.email}</p>
						<p>{user.company ? user.company.name : null}</p>
					</div>
					<div className='right-side'>
						{/* <p>{user.zip_code}</p>
						<p>{user.city}</p>
						<p>{user.country}</p> */}
					</div>
					<div className='tokens-container'>
						<p>
							Company tokens:
							<span>
								{user.company.available_credit
									? user.company.available_credit.total_available
									: null}{' '}
								tokens
							</span>
						</p>
						<p>expiry date: 20/03/2021</p>
					</div>
				</div>
			</TopProfileBar>
			<Container>
				<ProfileDetailsContainer>
					<div className='header-container'>
						<h1>Profile Details</h1>
					</div>
					<div className='left-container'>
						<div className='profile-fields'>
							<p className='profile-field-title'>First Name</p>
							<input type='text' onChange={e => setFirstName(e.currentTarget.value)} defaultValue={user.first_name} disabled={currentStage === true ? true : false} />
						</div>
						<div className='profile-fields'>
							<p className='profile-field-title'>Last Name</p>
							<input type='text' onChange={e => setLastName(e.currentTarget.value)} defaultValue={user.last_name} disabled={currentStage === true ? true : false} />
						</div>
						<div className='profile-fields'>
							<p className='profile-field-title'>Company</p>
							<input type='text' onChange={e => setCompany(e.currentTarget.value)} defaultValue={user.company.name} disabled={currentStage === true ? true : false} />
						</div>
						<div className='profile-fields'>
							<p className='profile-field-title'>Address</p>
							<input type='text' onChange={e => setAddress(e.currentTarget.value)} defaultValue={user.address} disabled={currentStage === true ? true : false} />
						</div>
					</div>
					<div className='right-container'>
						<div className='profile-fields'>
							<p className='profile-field-title'>Zip / Postcode</p>
							<input type='text' onChange={e => setZip(e.currentTarget.value)} defaultValue={user.zip_code} disabled={currentStage === true ? true : false} />
						</div>
						<div className='profile-fields'>
							<p className='profile-field-title'>City</p>
							<input type='text' onChange={e => setCity(e.currentTarget.value)} defaultValue={user.city} disabled={currentStage === true ? true : false} />
						</div>
						<div className='profile-fields'>
							<p className='profile-field-title'>Country</p>
							<input type='text' onChange={e => setCountry(e.currentTarget.value)} defaultValue={user.country} disabled={currentStage === true ? true : false} />
						</div>
					</div>
						<div className='profile-fields'>
							<label className='avatar-upload-btn'>
								Change Profile Picture
								<input type='file' onChange={e => setAvatar(e.currentTarget.value)} />
							</label>
						</div>
				<div className='save-changes-btn-container'>
					<Button editProfileBtn>Save Changes</Button>
				</div>
				</ProfileDetailsContainer>
			</Container>
		</Container>
	);
};

export default UserProfilePage;
