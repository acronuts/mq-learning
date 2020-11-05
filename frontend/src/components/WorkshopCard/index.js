import React from 'react';
import { Container } from '../../style/Container';
import { CardWrapper, ContentWrapper, ReserveBtnWrapper } from './styled';
import { useHistory } from 'react-router-dom';
import { Button } from '../../style/Button'

const WorkshopCard = ({ workshop }) => {
    const history = useHistory();
    

    return (
        <>
                <CardWrapper>
                    <ContentWrapper>
                        <div className='workshop-info'>
                            <p>Title</p>
                            <p>Location</p>
                            <p>Start Date, Start Time</p>
                            <p>Description</p>
                            {/* <p>{workshop.title}</p>
                            <p>{workshop.location}</p>
                            <p>{workshop.scheduling.startDateFormatted}, {workshop.scheduling.startTimeFormatted}</p>
                            <p>{workshop.description}</p>
                            <p>{workshop.details}</p> */}
                        </div>
                    </ContentWrapper>
                    <ReserveBtnWrapper>
                        <Button moreInfoBtn onClick={() => history.push('/workshop-single')}>
                            More Info
                        </Button>
                    </ReserveBtnWrapper>
                </CardWrapper>
        </>
    )
}

export default WorkshopCard