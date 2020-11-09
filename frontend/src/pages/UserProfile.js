import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UserProfilePage from '../components/UserProfilePage';
import Footer from '../components/Footer';
import userAction from '../store/actions/userAction';

const UserProfile = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userAction());
			setUser(data);
		};
		getData();
	}, [dispatch]);

	return (
		<Fragment>
			<UserProfilePage user={user} />
			<Footer />
		</Fragment>
	);
};

export default UserProfile;
