import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ModalExtContainer, ModalIntContainer, ContentSection } from './styled';
import { Button } from '../../style/Button';
import ReservationAction from '../../store/actions/reservationAction';

const Modal = ({ handleClose, workshop, user }) => {
	const dispatch = useDispatch();

	const [currentStage, setCurrentStage] = useState(0);

	const handleReservation = e => {
		e.preventDefault();
		setCurrentStage(currentStage + 1);
		const getData = async () => {
			return await dispatch(ReservationAction(workshop.id));
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

	// const checkTokens = () => {
	// 	if (user.available_credits) {
	// 		if (user.available_credits.total_available >= workshop.cost) {
	// 			return (
	// 				<p>
	// 					Thanks for registering, {user.first_name}! You are all set to attend
	// 					the workshop!
	// 				</p>
	// 			);
	// 		} else {
	// 			return (
	// 				<p>You don't own enough credits. Please contact administrator.</p>
	// 			);
	// 		}
	// 	}
	// 	return user.available_credits;
	// };

	return (
		<Fragment>
			<ModalExtContainer>
				<ModalIntContainer>
					<ContentSection>
						{currentStage === 0 ? (
							<Fragment>
								{workshop.attendees ? (
									workshop.attendees.includes(user.id) ? (
										<p>
											Are you sure you want to unregister? {workshop.cost}{' '}
											credit(s) will be credited back to you account.
										</p>
									) : (
										<p>
											Are you sure you want to register? This action will
											consume {workshop.cost} credits from you!
										</p>
									)
								) : null}
							</Fragment>
						) : null}

						{currentStage === 1 ? (
							<Fragment>
								{user.available_credit.total_available < workshop.cost &&
								!workshop.attendees.includes(user.id) ? (
									<p>
										Sorry, you don't have enough tokens. Please, contact
										administrator.
									</p>
								) : workshop.attendees.includes(user.id) ? (
									<p>You have successfully unregistered from the workshop!</p>
								) : (
									<p>
										Thanks for registering, {user.first_name}! You are all set
										to attend the workshop
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
							<Button modalBtn onClick={handleReservation}>
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

export default Modal;
