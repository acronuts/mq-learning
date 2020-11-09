import React, { useState, Fragment } from 'react';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import { NavbarDiV, SectionWorkshop, NavigationWrapper } from './styled';
import WorkshopCard from '../WorkshopCard';

const NavigateDashboard = ({ workshops }) => {
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
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<h1>loading..</h1>
							)}
						</Fragment>
					) : null}
					{active === 'scheduledWorkshop' ? (
						<Fragment>
							{workshops.length !== 0 ? (
								workshops.map(workshop => (
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<h1>loading..</h1>
							)}
						</Fragment>
					) : null}
					{active === 'attendedWorkshop' ? (
						<Fragment>
							{workshops.length !== 0 ? (
								workshops.map(workshop => (
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<h1>loading..</h1>
							)}
						</Fragment>
					) : null}

					{/* todo: create resources component */}
					{active === 'resources' ? (
						<Fragment>
							{workshops.length !== 0 ? (
								workshops.map(workshop => (
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<h1>loading..</h1>
							)}
						</Fragment>
					) : null}
				</SectionWorkshop>
			</NavigationWrapper>
		</Container>
	);
};

export default NavigateDashboard;
