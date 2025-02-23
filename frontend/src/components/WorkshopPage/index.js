import React, { useState, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopBarWrapper, Showcase, MainContent } from './styled';
import mqlogo from '../../assets/images/mq-logo.jpg';
import { Button } from '../../style/Button';
import Modal from '../Modal';
import moment from 'moment';
import specificWorkshopAction from '../../store/actions/specificWorkshopAction';

const WorkshopPage = () => {
	const history = useHistory();
	const location = useLocation();
	const workshopId = location.pathname.slice(17, 18);
	const [singleWorkshop, setSingleWorkshop] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const token = useSelector(state => state.user.token);
	const user = useSelector(state => state.user.user);
	console.log(token);

	useEffect(() => {
		const getData = async () => {
			const data = await specificWorkshopAction(workshopId, token);
			setSingleWorkshop(data);
		};
		getData();
	}, [workshopId, token, user]);

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

	const attendees = () => {
		if (singleWorkshop.attendees) {
			const attendeesArray = singleWorkshop.attendees.map(
				attendee => attendee.id
			);
			return attendeesArray;
		}
	};

	return (
		<Container workshop>
			{singleWorkshop ? (
				<Fragment>
					<TopBarWrapper>
						<div className='logo-container'>
							<img src={mqlogo} alt='logo' />
						</div>
						<div className='workshop-info-container'>
							<h1>{singleWorkshop.title}</h1>
							<p>
								<i
									className={
										singleWorkshop.date_start ? 'far fa-calendar-alt' : null
									}
								></i>
								{dateToFormat(singleWorkshop.date_start)}
							</p>
							<p>
								<i
									className={
										singleWorkshop.location
											? singleWorkshop.location.toLowerCase === 'online'
												? 'fas fa-laptop'
												: 'fas fa-map-marker-alt'
											: null
									}
								></i>
								{singleWorkshop.location}
							</p>
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
							<Button backBtn onClick={() => history.push('/mainpage/')}>
								Back
							</Button>
							<Button backBtn onClick={openModal}>
								{attendees()
									? attendees().includes(user.id)
										? 'unregister'
										: 'register'
									: 'null'}
							</Button>{' '}
							{showModal ? (
								<Modal
									handleClose={hideModal}
									workshop={singleWorkshop}
									attendees={attendees}
								/>
							) : null}
						</div>
					</MainContent>
				</Fragment>
			) : null}
		</Container>
	);
};

export default WorkshopPage;
