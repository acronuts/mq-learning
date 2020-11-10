import React, { useState, Fragment } from 'react';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import { NavbarDiV, SectionWorkshop, NavigationWrapper } from './styled';
import WorkshopCard from '../WorkshopCard';

const NavigateDashboard = ({
	workshops,
	scheduledWorkshops,
	attendedWorkshops,
	user,
}) => {
	const [active, setActive] = useState('workshop');

	return (
		<Container>
			<NavigationWrapper>
				<NavbarDiV userProfile>
					<Button btnNavDashboard onClick={() => setActive('workshop')}>
						Select Workshop
					</Button>
					<Button
						btnNavDashboard
						onClick={() => setActive('scheduledWorkshop')}
					>
						Scheduled Workshop
					</Button>
					<Button btnNavDashboard onClick={() => setActive('attendedWorkshop')}>
						Attended Workshop
					</Button>
					<Button btnNavDashboard onClick={() => setActive('resources')}>
						Resources
					</Button>
				</NavbarDiV>

				<SectionWorkshop>
					{active === 'workshop' ? (
						<Fragment>
							{workshops.length ? (
								workshops.map(workshop => (
									<WorkshopCard
										Zoom
										workshop={workshop}
										key={workshop.id}
										user={user}
									/>
								))
							) : (
								<h1>loading..</h1>
							)}
						</Fragment>
					) : null}

					{active === 'scheduledWorkshop' ? (
						<Fragment>
							{scheduledWorkshops.length ? (
								scheduledWorkshops.map(scheduledWorkshop => (
									<WorkshopCard
										Zoom
										key={scheduledWorkshop.id}
										user={user}
										workshop={scheduledWorkshop}
									/>
								))
							) : (
								<h4 style={message}>You are not registered in any event.</h4>
							)}
						</Fragment>
					) : null}
					{active === 'attendedWorkshop' ? (
						<Fragment>
							{attendedWorkshops.length ? (
								attendedWorkshops.map(attendedWorkshop => (
									<WorkshopCard
										Zoom
										key={attendedWorkshop.id}
										user={user}
										workshop={attendedWorkshop}
									/>
								))
							) : (
								<h4 style={message}>You haven't attended any event.</h4>
							)}
						</Fragment>
					) : null}

					{/* todo: create resources component */}
					{active === 'resources' ? <h1>Resources</h1> : null}
				</SectionWorkshop>
			</NavigationWrapper>
		</Container>
	);
};

const message = {
	'margin-top': '100px',
	'font-weigth': '500',
};

export default NavigateDashboard;
