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
	console.log(workshop.attendees);

	//todo remove seats available from card if attended workshop
	// const currentTime = new Date().dateNow
	// console.log(currentTime);

	const history = useHistory();

	const dateToFormat = date => {
		// return moment(date).format('D MMM YYYY, h:mm A');
		return moment(date).format('LLL'); //localized timezone date and time format
	};

	// const dateCheck = date => {
	// 	// return moment(date).format('D MMM YYYY');
	// 	return moment(date).format('LL'); //localized timezone date format
	// };

	// const dateToTime = date => {
	// 	// return moment(date).format('h:mm A');
	// 	return moment(date).format('LT'); //localized timezone time format
	// };

	// const dateToDay = (date) => {
	// 	return moment(date).format('dddd');
	// }

	return (
		<>
			<CardWrapper category={workshop.category}>
				<BannerWrapper banner={workshop.banner} />
				<ContentWrapper>
					<div className='title-section'>
						<h5>{workshop.title}</h5>
					</div>
					<div className='info-section'>
						<div className='description'>
							<p>{workshop.subtitle}</p>
						</div>
						<div className='info'>
							<div className='left'>
								<p>
									<i
										className={
											workshop.location.toLowerCase() === 'online'
												? 'fas fa-laptop'
												: 'fas fa-map-marker-alt'
										}
									></i>
									{workshop.location} */}
								</p>
								<p>
									<i className='far fa-calendar-alt'></i>
									{dateToFormat(workshop.date_start)}
								</p>
							</div>
							<div className='right'>
								<p>
									<i className='far fa-money-bill-alt'></i>
									{workshop.cost} credits
								</p>
								<p>
									<i className='fas fa-chair'></i>
									{workshop.max_seats - workshop.number_of_attendees} seats left
								</p>
							</div>
						</div>
					</div>
				</ContentWrapper>
				<ReserveBtnWrapper>
					<p>
						{workshop.attendees.length === 1
							? `Franziska is attending this workshop`
							: workshop.attendees.length === 2
							? `Franziska and Gregory are attending this workshop`
							: workshop.attendees.length > 2
							? `Franziska, Gregory and other ${
									workshop.attendees.length - 2
							  } are attending this workshop`
							: 'No one has registered for this workshop yet'}
					</p>
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

//
