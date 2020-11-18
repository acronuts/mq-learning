import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigateDashboard from '../components/NavDashboard';
import { Container } from '../style/Container';
import workshopAction from '../store/actions/workshopAction';
import companiesAction from '../store/actions/companiesAction';

const MainPage = () => {
	const dispatch = useDispatch();

	const user = useSelector(state => state.user.user);
	const companies = useSelector(state => state.company.company);
	const workshops = useSelector(state => state.workshop.workshop);

	useEffect(() => {
		const getData = () => {
			dispatch(workshopAction());
			dispatch(companiesAction());
		};
		getData();
	}, [dispatch, user]);

	return (
		<Fragment>
			{user ? <TopBar user={user} /> : null}
			<Container>
				{workshops && companies && user ? (
					<NavigateDashboard
						workshops={workshops}
						companies={companies}
						user={user}
					/>
				) : null}
			</Container>
			<Footer />
		</Fragment>
	);
};

export default MainPage;
