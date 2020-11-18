import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import UserProfilePage from '../components/UserProfilePage';
import Footer from '../components/Footer';

const UserProfile = () => {
	const user = useSelector(state => state.user.user);

	return (
		<Fragment>
			{user ? (
				<Fragment>
					<UserProfilePage user={user} />
					<Footer />
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default UserProfile;
