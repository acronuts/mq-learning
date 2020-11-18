import React, { Fragment, useEffect } from 'react';
import {
	ModalExtContainer,
	ModalIntContainer,
	ContentSection,
} from '../styled';
import { Button } from '../../../style/Button';

const ModalTokensCompany = ({
	handleClose,
	company,
	tokenInput,
	currentStage,
	handleAllocateTokenCompany,
}) => {

	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentStage === 1) {
				handleClose();
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
									Are you sure you want to credit {tokenInput}{' '}
									token(s) to {company.name}?
								</p>
							</Fragment>
						) : null}

						{currentStage === 1 ? (
							<Fragment>
								<p>
									You have credited {tokenInput} token(s) to{' '}
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
