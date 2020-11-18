import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import allocateTokenCompanyAction from '../../store/actions/allocateTokenCompanyAction';
import ModalTokensCompany from '../Modal/ModalTokensCompany';

const CompaniesCard = ({ company }) => {
	const dispatch = useDispatch();

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
										: null
							  )
							: 'Admin: No assigned Administrator.'}
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
						{company.available_credit ? (
							<p>
								<span>Tokens available:</span>{' '}
								{company.available_credit.total_available
									? company.available_credit.total_available
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
						<Button onClick={openModal} save>
							save
						</Button>
					</AllocateTokenSection>
				</RightSection>
				{showModal ? (
					<ModalTokensCompany
						company={company}
						handleClose={hideModal}
						tokenInput={tokenInput}
					/>
				) : null}
			</InfoContainer>
		</CardWrapper>
	);
};

export default CompaniesCard;
