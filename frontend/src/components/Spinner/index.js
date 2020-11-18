import React, { Fragment } from 'react';
import spinner from '../../assets/svgs/spinner.svg';

const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='loading...'
				style={{ width: 70, margin: '10% 50%', display: 'block' }}
			/>
		</Fragment>
	);
};

export default Spinner;
