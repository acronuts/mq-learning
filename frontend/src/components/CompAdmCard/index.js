import React from 'react';
import {
	AllocateTokenSection,
	AvatarContainer,
	CardWrapper,
	InfoContainer,
	LeftSection,
	RightSection,
	TokenSection,
} from '../EmployeeCard/styled';
import avatar from '../../assets/images/avatar-placeholder.png';
import { Button } from '../../style/Button';

const CompanyAdminCard = ({ compAdmin }) => {
	const fullName = `${compAdmin.first_name} ${compAdmin.last_name}`;

	return (
		<CardWrapper>
			<AvatarContainer>
				<img src={compAdmin.avatar ? compAdmin.avatar : avatar} alt='' />
			</AvatarContainer>
			<InfoContainer>
				<LeftSection>
					<p>{fullName}</p>
					<p>{compAdmin.email}</p>
					<p>{compAdmin.company.name}</p>
					<p>
						{compAdmin.address}, {compAdmin.zip_code} - {compAdmin.city}
					</p>
					<p>{compAdmin.country}</p>
				</LeftSection>
				<RightSection>
					<TokenSection>
						<p>
							<span>Credit amount:</span>{' '}
							{compAdmin.available_credit.total_available}
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

export default CompanyAdminCard;
