import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
import NavigateDashboard from '../components/NavDashboard';
import { Container } from '../style/Container';
import workshopAction from '../store/actions/workshopAction';
import userAction from '../store/actions/userAction';
import scheduledWorkshopAction from '../store/actions/scheduledWorkshopAction';
import attendedWorkshopAction from '../store/actions/attendedWorkshopAction';

const MainPage = () => {
	const dispatch = useDispatch();
	const [workshops, setWorkshops] = useState([]);
	const [user, setUser] = useState([]);
	const [scheduledWorkshops, setScheduledWorkshops] = useState([]);
	const [attendedWorkshops, setAttendedWorkshops] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const workshopData = await dispatch(workshopAction());
			const userData = await dispatch(userAction());
			const scheduledWorkshopsData = await dispatch(scheduledWorkshopAction());
			const attendedWorkshopsData = await dispatch(attendedWorkshopAction());
			setWorkshops(workshopData);
			setUser(userData);
			setScheduledWorkshops(scheduledWorkshopsData);
			setAttendedWorkshops(attendedWorkshopsData);
		};
		getData();
	}, [dispatch]);

	return (
		<Fragment>
			<TopBar user={user} />
			<Container>
				{workshops.length ? (
					<NavigateDashboard
						workshops={workshops}
						scheduledWorkshops={scheduledWorkshops}
						attendedWorkshops={attendedWorkshops}
						user={user}
					/>
				) : null}
			</Container>
			<Footer />
		</Fragment>
	);
};

export default MainPage;
