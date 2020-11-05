import React, { Fragment } from 'react';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
// import WorkshopCard from '../components/WorkshopCard';
import NavigateDashboard from '../components/NavDashboard';
import { Container } from '../style/Container';

const MainPage = () => {
	return (
		<Fragment>
			<TopBar />
			<Container>
				<NavigateDashboard />
			</Container>
			<Footer />
		</Fragment>
	);
};

export default MainPage;
