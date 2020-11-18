import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	ModalExtContainer,
	ModalIntContainer,
	ContentSection,
} from '../styled';
import { Button } from '../../../style/Button';

const ModalTokensUser = ({
	handleClose,
	employee,
	tokenInput,
	modalRef,
	handleAllocateTokenUser,
	currentStage,
}) => {
	const user = useSelector(state => state.user.user);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentStage === 1) {
				handleClose();
			}
		}, 2000);
		return () => clearTimeout(timer);
	}, [currentStage, handleClose]);

	return (
		<ModalExtContainer ref={modalRef}>
			<ModalIntContainer>
				<ContentSection>
					{currentStage === 0 ? (
						<Fragment>
							<p style={{ color: 'black' }}>
								Are you sure you want to credit {tokenInput} token(s) to{' '}
								{employee.first_name}?
							</p>
						</Fragment>
					) : null}

					{currentStage === 1 ? (
						<Fragment>
							{user.company.available_credit.total_available < tokenInput ? (
								<p>Sorry, you don't have enough tokens.</p>
							) : (
								<p>
									you have credited {tokenInput} tokens to {employee.first_name}
								</p>
							)}
						</Fragment>
					) : null}

					<div
						className={
							currentStage === 1
								? 'action-btns-container hide'
								: 'action-btns-container'
						}
					>
						<Button modalBtn onClick={handleAllocateTokenUser}>
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
	);
};

export default ModalTokensUser;
