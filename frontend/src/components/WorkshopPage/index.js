import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopBarWrapper, Showcase, MainContent } from './styled';
import mqlogo from '../../assets/images/mq-logo.jpg';
import { Button } from '../../style/Button';
import Modal from '../Modal';
import moment from 'moment';

const WorkshopPage = ({ singleWorkshop, user }) => {
	// console.log(singleWorkshop.attendees);

	const history = useHistory();
	const [showModal, setShowModal] = useState(false);

	const openModal = e => {
		setShowModal(true);
	};

	const hideModal = e => {
		setShowModal(false);
	};

	const dateToFormat = date => {
		// return moment(date).format('D MMM YYYY, h:mm A');
		return moment(date).format('LLLL'); //localized timezone date and time format
	};

	//Todo figure out changing of Register to Unregister
	// const checkAttendees = () => {
	// 	let button;
	// 	const userId = user.id;
	// 	const attendees = singleWorkshop.attendees;
	// 	if (userId in attendees) {
	// 		button = (
	// 			<Button reserveBtn onClick={openModal}>
	// 				Unregister
	// 			</Button>
	// 		);
	// 	} else {
	// 		button = (
	// 			<Button reserveBtn onClick={openModal}>
	// 				Register
	// 			</Button>
	// 		);
	// 	}
	// 	return button;
	// };

	return (
		<Container workshop>
			<TopBarWrapper>
				<div className='logo-container'>
					<img src={mqlogo} alt='logo' />
				</div>
				<div className='workshop-info-container'>
					<h1>{singleWorkshop.title}</h1>
					<p>{dateToFormat(singleWorkshop.date_start)}</p>
					<p>{singleWorkshop.location}</p>
					<p>{singleWorkshop.subtitle}</p>
					<p>Cost: {singleWorkshop.cost} credits</p>
				</div>
			</TopBarWrapper>
			<Showcase banner={singleWorkshop.banner} />
			<MainContent>
				<div className='time-location-container'>
					<h1>Time & Location</h1>
					<p>{dateToFormat(singleWorkshop.date_start)}</p>
					<p>{singleWorkshop.location}</p>
				</div>
				<div className='workshop-details-container'>
					<h1>Details</h1>
					<p>{singleWorkshop.description}</p>
				</div>
				<div className='action-btns-container'>
					<Button backBtn onClick={() => history.push('/mainpage')}>
						Back
					</Button>
					<Button backBtn onClick={openModal}>
						Register
					</Button>{' '}
					{showModal ? (
						<Modal
							handleClose={hideModal}
							workshop={singleWorkshop}
							user={user}
						/>
					) : null}
				</div>
			</MainContent>
		</Container>
	);
};

export default WorkshopPage;
