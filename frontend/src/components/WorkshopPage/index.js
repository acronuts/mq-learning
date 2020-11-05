import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopBarWrapper, Showcase, MainContent } from './styled';
import mqlogo from '../../assets/images/mq-logo.jpg';
import { Button } from '../../style/Button';

const WorkshopPage = () => {
	const history = useHistory();

	return (
		<Container workshop>
			<TopBarWrapper>
				<div className='logo-container'>
					<img src={mqlogo} alt='logo' />
				</div>
				<div className='workshop-info-container'>
					<h1>How to Make Inner Values Based Decisions: Zürich</h1>
					<p>Mon, Nov 23rd | location </p>
					<p>Zürich</p>
					<p>Learn to develop deeper self awareness of your inner self.</p>
				</div>
				<div className='btn-container'>
					<Button reserveBtn>Reserve</Button>
				</div>
			</TopBarWrapper>
			<Showcase />
			<MainContent>
				<div className='time-location-container'>
					<h1>Time & Location</h1>
					<p>Jan 25, 2021, 6:30 PM – 9:30 PM GMT+1</p>
					<p>Zürich, Zürich, Switzerland</p>
				</div>
				<div className='workshop-details-container'>
					<h1>Details</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis
						ea nisi facilis ab minima consequuntur omnis architecto. Recusandae
						voluptatibus enim totam corporis modi tenetur obcaecati, et placeat
						quod perspiciatis nisi debitis numquam neque amet suscipit pariatur
						commodi sint incidunt odio repellendus beatae porro eius. Doloremque
						animi tempore laboriosam veniam ipsam, cum rem sapiente nostrum
						facilis deserunt mollitia sed placeat officia, sint id? Ullam nihil
						modi quas ea consequatur! Odit hic illo sunt amet voluptate atque
						autem iste nisi vitae esse. Eveniet dolorem fugiat in quo ea minus?
						Nihil libero provident eum sed porro enim quisquam, consectetur
						cumque deserunt fugiat. Nihil libero provident eum sed porro enim
						quisquam, consectetur cumque deserunt fugiat.Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat. Nihil
						libero provident eum sed porro enim quisquam, consectetur cumque
						deserunt fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.Nihil libero
						provident eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat. Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.Nihil libero
						provident eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat. Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.Nihil libero
						provident eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat. Nihil
						libero provident eum sed porro enim quisquam, consectetur cumque
						deserunt fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.porro enim
						quisquam, consectetur cumque deserunt fugiat. Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.porro enim
						quisquam, consectetur cumque deserunt fugiat. Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.porro enim
						quisquam, consectetur cumque deserunt fugiat. Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.porro enim
						quisquam, consectetur cumque deserunt fugiat. Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.porro enim
						quisquam, consectetur cumque deserunt fugiat. Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.porro enim
						quisquam, consectetur cumque deserunt fugiat. Nihil libero provident
						eum sed porro enim quisquam, consectetur cumque deserunt
						fugiat.Nihil libero provident eum sed porro enim quisquam,
						consectetur cumque deserunt fugiat.Nihil libero provident eum sed
						porro enim quisquam, consectetur cumque deserunt fugiat.
					</p>
				</div>
				<div className='action-btns-container'>
					<Button backBtn onClick={() => history.push('/main-page')}>
						Back
					</Button>
					<Button reserveBtn>Reserve</Button>
				</div>
			</MainContent>
		</Container>
	);
};

export default WorkshopPage;
