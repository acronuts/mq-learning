import React from 'react';
import { CardWrapper, ContentWrapper, ReserveBtnWrapper } from './styled';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';

const WorkshopCard = ({ workshop }) => {
	const history = useHistory();

	const dateToFormat = (date) => {
		// return moment(date).format('D MMM YYYY, h:mm A');
		return moment(date).format('LLL') //localized timezone date and time format
	}

	const dateCheck = (date) => {
		// return moment(date).format('D MMM YYYY');
		return moment(date).format('LL'); //localized timezone date format
	}

	const dateToTime = (date) => {
		// return moment(date).format('h:mm A');
		return moment(date).format('LT'); //localized timezone time format
	}

	// const dateToDay = (date) => {
	// 	return moment(date).format('dddd');
	// }

	return (
		<>
			<CardWrapper>
				<ContentWrapper>
					<div className='workshop-info'>
						<p>{workshop.title}</p>
						<p>{workshop.location}</p>
						<p>
							{dateToFormat(workshop.date_start)} --- {dateCheck(workshop.date_start) === dateCheck(workshop.date_end) ? dateToTime(workshop.date_end) : dateToFormat(workshop.date_end) }
							{/* {dateToFormat(workshop.date_start)} --- {dateToFormat(workshop.date_end)} */}
						</p>
						<p>{workshop.subtitle}</p>
					</div>
				</ContentWrapper>
				<ReserveBtnWrapper>
					<Button
						moreInfoBtn
						onClick={() => history.push(`/workshop-single/${workshop.id}/`)}
					>
						More Info
					</Button>
				</ReserveBtnWrapper>
			</CardWrapper>
		</>
	);
};

export default WorkshopCard;
