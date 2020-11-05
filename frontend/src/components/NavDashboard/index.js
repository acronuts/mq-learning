import React, { useState, Fragment } from 'react';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import { NavbarDiV, SectionWorkshop, SectionInfo } from './styled';
import  WorkshopCard from '../WorkshopCard'; 





const NavigateDashboard  = () => {
	
	const [active, setActive] = useState('workshop');
	// later onw the list will be replaced for fetching
	

	return (
		<Container size>
	

			<NavbarDiV>
			<Button btnNavDashboard
				onClick={() => setActive('workshop')}
				 >
				Select Workshop
			</Button>
			<Button btnNavDashboard
				onClick={() => setActive('scheduledWorkshop')}
				
			>
				Scheduled Workshop
				
			</Button>
			<Button btnNavDashboard
				onClick={() => setActive('attendedWorkshop')}
			>
				Attended Workshop
			</Button>
			<Button btnNavDashboard
				onClick={() => setActive('resourses')}
			>
				Resourses
			</Button>
			</NavbarDiV>


			<SectionWorkshop>

				<Fragment>
				{active === 'workshop' ?  (
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
				)
				 : null}
				</Fragment>
				<Fragment>
				
				{active === 'scheduledWorkshop' ?  (
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
				)
				 : null}
				</Fragment>
				<Fragment>
				
				{active === 'attendedWorkshop' ?  (
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
				)
				 : null}
				</Fragment>

				<Fragment>
				
				{active === 'resourses' ?  (
					<ul>
						<WorkshopCard Zoom />
						
					</ul>
				)
				 : null}
				</Fragment>

			</SectionWorkshop>

		</Container>

	);
};

export default NavigateDashboard;

