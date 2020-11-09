import React from 'react';
import { CardWrapper, ContentWrapper, ReserveBtnWrapper } from './styled';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button';
import moment from 'moment';

const WorkshopCard = ({ workshop }) => {
	const history = useHistory();

	const dateToFormat = (date) => {
		return moment(date).format('D MMM YYYY, h:mm A');
	}

	const dateCheck = (date) => {
		return moment(date).format('D MMM YYYY');
	}

	const dateToTime = (date) => {
		return moment(date).format('h:mm A');
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
