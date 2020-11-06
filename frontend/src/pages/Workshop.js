import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import WorkshopPage from '../components/WorkshopPage';
import Footer from '../components/Footer';
import specificWorkshopAction from '../store/actions/specificWorkshopAction';

const Workshop = props => {
	const dispatch = useDispatch();
	const [singleWorkshop, setSingleWorkshop] = useState([]);

	// Get specific workshop
	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(
				specificWorkshopAction(props.match.params.workshopId)
			);
			setSingleWorkshop(data);
		};
		getData();
	}, [props.match.params.workshopId, dispatch]);


	return (
		<Fragment>
			<WorkshopPage singleWorkshop={singleWorkshop} key={singleWorkshop.id} />
			<Footer />
		</Fragment>
	);
};

export default Workshop;
