import React from 'react';
import {
	LeftSection,
	RightSection,
	InfoContainer,
} from '../EmployeeCard/styled';
import { CompanyAreaWrapper, LogoContainer } from './styled';

const CompanyArea = ({ user }) => {
	return (
		<CompanyAreaWrapper>
			<LogoContainer>
				<img src={user.company.logo} alt='company_logo' />
			</LogoContainer>
			<InfoContainer>
				{/* Component comes from EmployeeCard component */}
				<LeftSection company>
					<p>{user.company.name}</p>
					<p>{user.company.phone}</p>
					<p>{user.company.website}</p>
					<p>{user.company.address}</p>
				</LeftSection>
				<RightSection company>
					<p>{user.company.zip_code}</p>
					<p>{user.company.city}</p>
					<p>{user.company.country}</p>
				</RightSection>
			</InfoContainer>
		</CompanyAreaWrapper>
	);
};

export default CompanyArea;
