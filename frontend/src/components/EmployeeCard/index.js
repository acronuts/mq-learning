import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import allocateTokenUserAction from '../../store/actions/allocateTokenUserAction';

const EmployeeCard = ({ employee }) => {
	const dispatch = useDispatch();

	const [tokenInput, setTokenInput] = useState('');

	const updateField = e => {
		setTokenInput({
			...tokenInput,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleAllocateTokenUser = e => {
		e.preventDefault();
		const getData = async () => {
			return await dispatch(allocateTokenUserAction(employee.id));
		};
		getData();
	};

	console.log('input', tokenInput);

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
							{employee.available_credit.total_available
								? employee.available_credit.total_available
								: 0}
						</p>
					</TokenSection>
					<AllocateTokenSection>
						<span>Allocate credits:</span>
						<input onChange={updateField} type='number' name='tokenInput' />
					</AllocateTokenSection>
					<Button save onClick={handleAllocateTokenUser}>
						save
					</Button>
				</RightSection>
			</InfoContainer>
		</CardWrapper>
	);
};

export default EmployeeCard;
