import React from 'react';
import {
	AllocateTokenSection,
	CardWrapper,
	InfoContainer,
	LeftSection,
	RightSection,
	TokenSection,
} from '../EmployeeCard/styled';
import avatar from '../../assets/images/avatar-placeholder.png';
import { Button } from '../../style/Button';
import { LogoContainer } from '../CompanyArea/styled';

const CompaniesCard = ({ company }) => {
	return (
		// Components come from EmployeeCard
		<CardWrapper>
			<LogoContainer>
				<img src={company.logo ? company.logo : avatar} alt='company_logo' />
			</LogoContainer>
			<InfoContainer>
				<LeftSection>
					<p>{company.name}</p>
					<p>
						{company.fk_user_company
							? company.fk_user_company.map(admin =>
									admin.isAdmin
										? `Admin: ${admin.first_name} ${admin.last_name}`
										: 'Admin: No assigned Administrator.'
							  )
							: null}
					</p>
					<p>{company.phone}</p>
					<p>{company.website}</p>
					<p>
						{company.address}, {company.zip_code} - {company.city}
					</p>
					<p>{company.country}</p>
				</LeftSection>
				<RightSection>
					<TokenSection>
						<p>
							<span>Credit amount:</span>{' '}
							{company.available_credit.total_available
								? company.available_credit.total_available
								: 0}
						</p>
					</TokenSection>
					<AllocateTokenSection>
						<span>Allocate credits:</span>
						<input type='number' />
						<Button save>save</Button>
					</AllocateTokenSection>
				</RightSection>
			</InfoContainer>
		</CardWrapper>
	);
};

export default CompaniesCard;
