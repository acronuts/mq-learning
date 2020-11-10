import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthComponent from '../HOC';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import UserProfile from '../pages/UserProfile';
import Workshop from '../pages/Workshop';
import TestPage from '../pages/Test';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/mainpage/' component={MainPage} />
				<Route
					exact
					path='/workshop-single/:workshopId/'
					component={Workshop}
				/>
				<Route exact path='/user-profile/' component={UserProfile} />

				<Route exact path='/test/' component={TestPage} />
			</Switch>
		</Router>
	);
};

export default Routes;
