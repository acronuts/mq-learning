import React, { useState, Fragment } from 'react';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import { NavbarDiV, SectionWorkshop, NavigationWrapper } from './styled';
import WorkshopCard from '../WorkshopCard';

const NavigateDashboard = () => {
	const [active, setActive] = useState('workshop');
	// later onw the list will be replaced for fetching

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
					<Fragment>
						{active === 'workshop' ? (
							<ul>
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
								<WorkshopCard zoom />
							</ul>
						) : null}
					</Fragment>
					<Fragment>
						{active === 'scheduledWorkshop' ? (
							<ul>
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
							</ul>
						) : null}
					</Fragment>
					<Fragment>
						{active === 'attendedWorkshop' ? (
							<ul>
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
							</ul>
						) : null}
					</Fragment>

					<Fragment>
						{active === 'resources' ? (
							<ul>
								<WorkshopCard Zoom />
							</ul>
						) : null}
					</Fragment>
				</SectionWorkshop>
			</NavigationWrapper>
		</Container>
	);
};

export default NavigateDashboard;
