import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalExtContainer, ModalIntContainer, ContentSection } from './styled';
import { Button } from '../../style/Button';
import ReservationAction from '../../store/actions/reservationAction';

const Modal = ({ handleClose, workshop, user }) => {
	const dispatch = useDispatch();

	// console.log(user.available_credit.total_available);
	// console.log(workshop.id);

	const [currentStage, setCurrentStage] = useState(0);

	const handleReservation = e => {
		e.preventDefault();
		setCurrentStage(currentStage + 1);
		const getData = async () => {
			const data = await dispatch(ReservationAction(workshop.id));
			console.log(data);
		};
		getData();
	};

	return (
		<Fragment>
			<ModalExtContainer>
				<ModalIntContainer>
					<ContentSection>
						{currentStage === 0 ? (
							<p>
								Are you sure you want to register? This action will consume{' '}
								{workshop.cost} credits from you!
							</p>
						) : null}

						{currentStage === 1 ? (
							<Fragment>
								{user.available_credit.total_available < workshop.cost ? (
									<p>
										Sorry, you don't have enough tokens. Please, contact
										administrator.
									</p>
								) : (
									<p>
										Congratulations, {user.first_name}! You are all set to
										attend the workshop!
									</p>
								)}
								<Button modalBtn onClick={handleClose}>
									Back
								</Button>
							</Fragment>
						) : null}

						<div
							className={
								currentStage === 1
									? 'action-btns-container hide'
									: 'action-btns-container'
							}
						>
							<Button modalBtn onClick={handleReservation}>
								Yes
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

export default Modal;
