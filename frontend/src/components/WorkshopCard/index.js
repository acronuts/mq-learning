import React from 'react';
import {
	CardWrapper,
	BannerWrapper,
	ContentWrapper,
	ReserveBtnWrapper,
} from './styled';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';
import moment from 'moment'

const WorkshopCard = ({ workshop }) => {
	//todo remove seats available from card if attended workshop
	// const currentTime = new Date().dateNow
	// console.log(currentTime);

	const history = useHistory();

	const dateToFormat = date => {
		// return moment(date).format('D MMM YYYY, h:mm A');
		return moment(date).format('LLL'); //localized timezone date and time format
	};

	const dateCheck = date => {
		// return moment(date).format('D MMM YYYY');
		return moment(date).format('LL'); //localized timezone date format
	};

	const dateToTime = date => {
		// return moment(date).format('h:mm A');
		return moment(date).format('LT'); //localized timezone time format
	};

	// const dateToDay = (date) => {
	// 	return moment(date).format('dddd');
	// }

	//todo register / unregister button single workshop
	// const checkAttended = () => {
	// 	let userId = user.id;
	// 	let attendees = workshop.attendees;
	// 	if (userId in attendees) {
	// 		console.log('Registered');
	// 	} else {
	// 		return null;
	// 	}
	// };

	return (
		<>
			<CardWrapper>
				<BannerWrapper banner={workshop.banner} />
				<ContentWrapper>
					<div className='title-section'>
						<h5>{workshop.title}</h5>
					</div>
					<div className='info-section'>
						<div className='subtitle'>
							<p>{workshop.subtitle}</p>
						</div>
						<div className='info'>
							<div className='left'>
								<p>
									<i
										class={
											workshop.location.toLowerCase() === 'online'
												? 'fas fa-laptop'
												: 'fas fa-map-marker-alt'
										}
									></i>
									{workshop.location}
								</p>
								<p>
									<i class='far fa-calendar-alt'></i>
									{dateToFormat(workshop.date_start)}
								</p>
							</div>
							<div className='right'>
								<p>
									<i class='far fa-money-bill-alt'></i>
									{workshop.cost} credits
								</p>
								<p>
									<i class='fas fa-chair'></i>
									{workshop.max_seats - workshop.number_of_attendees} seats left
								</p>
							</div>
						</div>
					</div>
				</ContentWrapper>
				<ReserveBtnWrapper>
					<i
						class={
							workshop.category
								? `fas fa-circle ${workshop.category}`
								: 'fas fa-circle'
						}
					></i>
					<Button
						moreInfoBtn
						onClick={() => history.push(`/workshop-single/${workshop.id}/`)}
					>
						more info
					</Button>
				</ReserveBtnWrapper>
			</CardWrapper>
		</>
	);
};

export default WorkshopCard;