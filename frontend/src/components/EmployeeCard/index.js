import React from 'react';
import {
	CardWrapper,
	AvatarContainer,
	InfoContainer,
	LeftSection,
	RightSection,
	TokenSection,
	AllocateTokenSection,
} from './styled';
import avatar from '../../assets/images/avatar-placeholder.png';
import { Button } from '../../style/Button';
const EmployeeCard = ({ employee }) => {
	const fullName = `${employee.first_name} ${employee.last_name}`;

	return (
		<CardWrapper>
			<AvatarContainer>
				<img
					src={employee.avatar ? employee.avatar : avatar}
					alt='employee-avatar'
				/>
			</AvatarContainer>
			<InfoContainer>
				<LeftSection>
					<p>{fullName}</p>
					<p>{employee.email}</p>
					<p>{employee.company.name}</p>
					<p>
						{employee.address}, {employee.zip_code} - {employee.city}
					</p>
					<p>{employee.country}</p>
				</LeftSection>
				<RightSection>
					<TokenSection>
						<p>
							<span>Credit amount:</span>{' '}
							{employee.available_credit.total_available}
						</p>
					</TokenSection>
					<AllocateTokenSection>
						<span>Allocate credits:</span>
						<input type='number' />
					</AllocateTokenSection>
					<Button save>save</Button>
				</RightSection>
			</InfoContainer>
		</CardWrapper>
	);
};

export default EmployeeCard;
