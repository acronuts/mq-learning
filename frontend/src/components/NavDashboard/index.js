import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../style/Container';
import { NavbarDiV, SectionWorkshop, NavigationWrapper } from './styled';
import WorkshopCard from '../WorkshopCard';
import EmployeeCard from '../EmployeeCard';
import CompanyArea from '../CompanyArea';
import CompanyAdminCard from '../CompAdmCard';
import SearchBarComponent from '../SearchButton';
import CompaniesCard from '../CompaniesCard';
import Spinner from '../Spinner';

const NavigateDashboard = ({
	workshops,
	scheduledWorkshops,
	attendedWorkshops,
	user,
	employees,
	companies,
}) => {
	const [active, setActive] = useState('workshop');

	return (
		<Container>
			<NavigationWrapper>
				<NavbarDiV>
					<Link
						to='#'
						onClick={() => setActive('workshop')}
						className={active === 'workshop' ? 'active' : null}
					>
						Workshops
					</Link>
					<Link
						to='#'
						onClick={() => setActive('scheduledWorkshop')}
						className={active === 'scheduledWorkshop' ? 'active' : null}
					>
						Scheduled Workshops
					</Link>
					<Link
						to='#'
						onClick={() => setActive('attendedWorkshop')}
						className={active === 'attendedWorkshop' ? 'active' : null}
					>
						Attended Workshops
					</Link>
					<Link
						to='#'
						onClick={() => setActive('resources')}
						className={active === 'resources' ? 'active' : null}
					>
						Resources
					</Link>

					{user.isAdmin ? (
						<Fragment>
							<SearchBarComponent></SearchBarComponent>
							
							
							<Link
								to='#'
								onClick={() => setActive('employees')}
								className={active === 'employees' ? 'active' : null}
							>
								Employees
							</Link>
							<Link
								to='#'
								onClick={() => setActive('company')}
								className={active === 'company' ? 'active' : null}
							>
								Company
							</Link>
						</Fragment>
					) : null}

					{user.is_staff ? (
						<Link
							to='#'
							onClick={() => setActive('companies')}
							className={active === 'companies' ? 'active' : null}
						>
							Companies
						</Link>
					) : null}
				</NavbarDiV>

				<SectionWorkshop>
					{active === 'workshop' ? (
						<Fragment>
							{workshops.length ? (
								workshops.map(workshop => (
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<Spinner style={message}>loading..</Spinner>
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
								employees.map(employee => (
									<EmployeeCard employee={employee} key={employee.id} />
								))
							) : (
								<h4 style={message}>
									There are no employees registered for this company.
								</h4>
							)}
						</Fragment>
					) : null}

					{active === 'company' ? (
						<CompanyArea user={user} key={user.id} />
					) : null}

					{active === 'companies' ? (
						<Fragment>
							{companies.length ? (
								companies.map(company => (
									<CompaniesCard company={company} key={company.id} />
								))
							) : (
								<h4 style={message}>There are no registered Companies.</h4>
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
	marginLeft: '40%',
	fontWeight: '400',
};

export default NavigateDashboard;
