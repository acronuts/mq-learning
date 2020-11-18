import React, { useState, useRef } from 'react';
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
import { Button } from '../../style/Button';
import ModalTokensUser from '../Modal/ModalTokensUser';
import allocateTokenUserAction from '../../store/actions/allocateTokenUserAction';

const EmployeeCard = ({ employee }) => {
	const dispatch = useDispatch();
	const [tokenInput, setTokenInput] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [currentStage, setCurrentStage] = useState(0);

	const modalRef = useRef();

	const handleAllocateTokenUser = e => {
		e.preventDefault();
		setCurrentStage(currentStage + 1);
		const getData = () => {
			dispatch(allocateTokenUserAction(employee.id, tokenInput));
		};
		getData();
		setTimeout(() => {
			hideModal();
			setCurrentStage(0);
		}, 2000);
	};

	const openModal = e => {
		setShowModal(true);
	};

	const hideModal = e => {
		setShowModal(false);
	};

	const updateField = e => {
		setTokenInput(e.currentTarget.value);
	};

	return (
		<CardWrapper>
			<AvatarContainer employee={employee} />
			<InfoContainer>
				<LeftSection>
					<p>
						{employee.first_name} {employee.last_name}
					</p>
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
						modalRef={modalRef}
						handleAllocateTokenUser={handleAllocateTokenUser}
						currentStage={currentStage}
					/>
				) : null}
			</InfoContainer>
		</CardWrapper>
	);
};

export default EmployeeCard;
