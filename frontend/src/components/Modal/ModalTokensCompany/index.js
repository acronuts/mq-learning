import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	ModalExtContainer,
	ModalIntContainer,
	ContentSection,
} from '../styled';
import { Button } from '../../../style/Button';
import allocateTokenCompanyAction from '../../../store/actions/allocateTokenCompanyAction';

const ModalTokensCompany = ({ handleClose, company, tokenInput }) => {
	const dispatch = useDispatch();
	const [currentStage, setCurrentStage] = useState(0);

	const handleAllocateTokenCompany = e => {
		e.preventDefault();
		setCurrentStage(currentStage + 1);
		const getData = () => {
			dispatch(allocateTokenCompanyAction(company.id, tokenInput.tokenInput));
		};
		getData();
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentStage === 1) {
				handleClose();
				window.location.reload();
			}
		}, 2000);
		return () => clearTimeout(timer);
	}, [currentStage, handleClose]);

	return (
		<Fragment>
			<ModalExtContainer>
				<ModalIntContainer>
					<ContentSection>
						{currentStage === 0 ? (
							<Fragment>
								<p style={{ color: 'black' }}>
									Are you sure you want to credit {tokenInput.tokenInput}{' '}
									token(s) to {company.name}?
								</p>
							</Fragment>
						) : null}

						{currentStage === 1 ? (
							<Fragment>
								<p>
									You have credited {tokenInput.tokenInput} token(s) to{' '}
									{company.name}
								</p>
							</Fragment>
						) : null}

						<div
							className={
								currentStage === 1
									? 'action-btns-container hide'
									: 'action-btns-container'
							}
						>
							<Button modalBtn onClick={handleAllocateTokenCompany}>
								yes
							</Button>
							<Button modalBtn onClick={handleClose}>
								no
							</Button>
						</div>
					</ContentSection>
					<i onClick={handleClose} className='fas fa-times'></i>
				</ModalIntContainer>
			</ModalExtContainer>
		</Fragment>
	);
};

export default ModalTokensCompany;
