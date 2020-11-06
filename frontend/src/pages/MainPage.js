import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
// import WorkshopCard from '../components/WorkshopCard';
import NavigateDashboard from '../components/NavDashboard';
import { Container } from '../style/Container';
import workshopAction from '../store/actions/workshopAction';
import userAction from '../store/actions/userAction';

const MainPage = () => {
	const dispatch = useDispatch();
	const [workshops, setWorkshops] = useState([]);
	const [user, setUser] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(workshopAction());
			setWorkshops(data);
		};
		getData();
	}, [dispatch]);
	

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userAction());
			setUser(data);
		};
		getData();
	}, [dispatch]);

	return (
		<Fragment>
			<TopBar user={user} />
			<Container>
				{workshops.length !== 0 ? (
					<NavigateDashboard workshops={workshops} />
				) : null}
			</Container>
			<Footer />
		</Fragment>
	);
};

export default MainPage;
