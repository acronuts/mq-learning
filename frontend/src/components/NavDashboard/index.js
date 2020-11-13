import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import {
	NavbarDiV,
	SectionWorkshop,
	NavigationWrapper,
	BtnContainer,
	SubNavbar,
} from './styled';
import WorkshopCard from '../WorkshopCard';
import EmployeeCard from '../EmployeeCard';
import CompanyArea from '../CompanyArea';
import CompanyAdminCard from '../CompAdmCard';

const NavigateDashboard = ({
	workshops,
	scheduledWorkshops,
	attendedWorkshops,
	user,
	employees,
	compAdmins,
}) => {
	const [active, setActive] = useState('workshop');

	return (
		<Container>
			<NavigationWrapper>
				<NavbarDiV>
					<Link
						btnNavDashboard
						onClick={() => setActive('workshop')}
						className={active === 'workshop' ? 'active' : null}
					>
						Workshops
					</Link>
					<Link
						btnNavDashboard
						onClick={() => setActive('scheduledWorkshop')}
						className={active === 'scheduledWorkshop' ? 'active' : null}
					>
						Scheduled Workshops
					</Link>
					<Link
						btnNavDashboard
						onClick={() => setActive('attendedWorkshop')}
						className={active === 'attendedWorkshop' ? 'active' : null}
					>
						Attended Workshops
					</Link>
					<Link
						btnNavDashboard
						onClick={() => setActive('resources')}
						className={active === 'resources' ? 'active' : null}
					>
						Resources
					</Link>

					{user.isAdmin ? (
						<Fragment>
							<Link
								btnNavDashboard
								onClick={() => setActive('employees')}
								className={active === 'employees' ? 'active' : null}
							>
								Employees
							</Link>
							<Link
								btnNavDashboard
								onClick={() => setActive('company')}
								className={active === 'company' ? 'active' : null}
							>
								Company
							</Link>
						</Fragment>
					) : null}

					{user.is_staff ? (
						<Link
							btnNavDashboard
							onClick={() => setActive('compAdmins')}
							className={active === 'compAdmins' ? 'active' : null}
						>
							Company Administrators
						</Link>
					) : null}
				</NavbarDiV>

				{/* SUBNAVBAR */}
				{/* {active === 'workshop' ||
				active === 'scheduledWorkshop' ||
				active === 'attendedWorkshop' ? (
					<SubNavbar>
						<Link
							onClick={() => setActive('self')}
							className={active === 'self' ? 'active' : null}
						>
							Self
						</Link>
						<Link
							onClick={() => setActive('work')}
							className={active === 'work' ? 'active' : null}
						>
							Work
						</Link>
						<Link
							onClick={() => setActive('relations')}
							className={active === 'relations' ? 'active' : null}
						>
							Relations
						</Link>
					</SubNavbar>
				) : null} */}

				<SectionWorkshop>
					{active === 'workshop' ? (
						<Fragment>
							{workshops.length ? (
								workshops.map(workshop => (
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<h1 style={message}>loading..</h1>
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
										workshop={attendedWorkshop}
									/>
								))
							) : (
								<h4 style={message}>You haven't attended any event.</h4>
							)}
						</Fragment>
					) : null}

					{/* todo: create resources component */}
					{active === 'resources' ? <h4>Resources</h4> : null}

					{active === 'employees' ? (
						<Fragment>
							{employees.length ? (
								employees.map(employee => <EmployeeCard employee={employee} />)
							) : (
								<h4 style={message}>
									There are no employees registered for this company.
								</h4>
							)}
						</Fragment>
					) : null}

					{user.company ? <CompanyArea user={user} /> : null}

					{active === 'compAdmins' ? (
						<Fragment>
							{compAdmins.length ? (
								compAdmins.map(compAdmin => (
									<CompanyAdminCard compAdmin={compAdmin} />
								))
							) : (
								<h4 style={message}>There are no registered Administrators.</h4>
							)}
						</Fragment>
					) : null}
				</SectionWorkshop>
			</NavigationWrapper>
		</Container>
	);
};

const message = {
	marginTop: '9rem',
	marginLeft: '2rem',
	fontWeight: '400',
};

export default NavigateDashboard;
