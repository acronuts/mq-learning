import React from 'react';
import { Link } from 'react-router-dom';
import {
	LeftSection,
	RightSection,
	InfoContainer,
} from '../EmployeeCard/styled';
import { CompanyAreaWrapper, LogoContainer } from './styled';
import { Button } from '../../style/Button';

const CompanyArea = ({ user }) => {
	return (
		<CompanyAreaWrapper>
			<LogoContainer>
				<div className='logo'>
					<img src={user.company.logo} alt='company_logo' />
				</div>
				<div className='company-description'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						officia placeat, eveniet nulla, iste ipsam, ab id incidunt porro
						tenetur alias sint accusamus amet architecto quos. Tempore tenetur
						adipisci impedit.
					</p>
				</div>
			</LogoContainer>
			<InfoContainer company>
				{/* Component comes from EmployeeCard component */}
				<LeftSection company>
					<p>
						<span>Name</span>
						{user.company.name}
					</p>
					<p>
						<span>Phone</span>
						{user.company.phone}
					</p>
					<p>
						<span>Website</span>
						<Link to='https://google.com'>{user.company.website}</Link>
					</p>
					<p>
						<span>Address</span>
						{user.company.address}
					</p>
				</LeftSection>
				<RightSection company>
					<p>
						<span>Post Code</span>
						{user.company.zip_code}
					</p>
					<p>
						<span>City</span>
						{user.company.city}
					</p>
					<p>
						<span>Country</span>
						{user.company.country}
					</p>
					<div className='actions-btn-container'>
						<Button>edit</Button>
						<Button>save</Button>
					</div>
				</RightSection>
			</InfoContainer>
		</CompanyAreaWrapper>
	);
};

export default CompanyArea;
