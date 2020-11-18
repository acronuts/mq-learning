import React, { useState } from 'react';
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
import ModalTokensUser from '../Modal/ModalTokensUser';

const EmployeeCard = ({ employee }) => {
	console.log(employee);

	const [tokenInput, setTokenInput] = useState('');
	const [showModal, setShowModal] = useState(false);

	const openModal = e => {
		setShowModal(true);
	};

	const hideModal = e => {
		setShowModal(false);
	};

	const updateField = e => {
		setTokenInput({
			...tokenInput,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

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
					<p>{employee.company ? employee.company.name : null}</p>
					<p>
						{employee.address}, {employee.zip_code} - {employee.city}
					</p>
					<p>{employee.country}</p>
				</LeftSection>
				<RightSection>
					<TokenSection>
						{employee.available_credit ? (
							<p>
								<span>Tokens available:</span>{' '}
								{employee.available_credit.total_available
									? employee.available_credit.total_available
									: 0}{' '}
								tokens
							</p>
						) : (
							'loading...'
						)}
					</TokenSection>
					<AllocateTokenSection>
						<span>Allocate tokens:</span>
						<input
							onChange={updateField}
							type='number'
							name='tokenInput'
							min='0'
						/>
					</AllocateTokenSection>
					<Button save onClick={openModal}>
						save
					</Button>
				</RightSection>
				{showModal ? (
					<ModalTokensUser
						handleClose={hideModal}
						employee={employee}
						tokenInput={tokenInput}
					/>
				) : null}
			</InfoContainer>
		</CardWrapper>
	);
};

export default EmployeeCard;
