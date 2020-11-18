import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	ModalExtContainer,
	ModalIntContainer,
	ContentSection,
} from '../styled';
import { Button } from '../../../style/Button';
import allocateTokenUserAction from '../../../store/actions/allocateTokenUserAction';

const ModalTokensUser = ({ handleClose, employee, tokenInput }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user.user);
	const [currentStage, setCurrentStage] = useState(0);

	const handleAllocateTokenUser = e => {
		e.preventDefault();
		setCurrentStage(currentStage + 1);
		const getData = () => {
			dispatch(allocateTokenUserAction(employee.id, tokenInput.tokenInput));
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
									token(s) to {employee.first_name}?
								</p>
							</Fragment>
						) : null}

						{currentStage === 1 ? (
							<Fragment>
								{user.company.available_credit.total_available <
								tokenInput.tokenInput ? (
									<p>Sorry, you don't have enough tokens.</p>
								) : (
									<p>
										you have credited {tokenInput.tokenInput} tokens to{' '}
										{employee.first_name}
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
		</Fragment>
	);
};

export default ModalTokensUser;
