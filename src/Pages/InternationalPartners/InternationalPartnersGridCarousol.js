import React from 'react';

import ClientsOne from '../../assets/images/clients/Clients1.png';
import ClientsTwo from '../../assets/images/clients/Clients2.png';
import ClientsThree from '../../assets/images/clients/Clients3.png';
import ClientsFour from '../../assets/images/clients/Clients4.png';
import ClientsFive from '../../assets/images/clients/Clients5.png';
import ClientsSix from '../../assets/images/clients/Clients6.png';
import ClientsSeven from '../../assets/images/clients/Clients7.png';
import ClientsEight from '../../assets/images/clients/Clients8.png';
import ClientsNine from '../../assets/images/clients/Clients9.png';
import GridCarousolItem from '../Shared/GridCarousolItem/GridCarousolItem';

const InternationalPartnersGridCarousol = () => {
	return (
		<div className=''>
			<div id="partnersGridCarousol" className="carousel  carousel-dark slide " data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="2000">
						<GridCarousolItem
							imgOne={ClientsOne}
							imgTwo={ClientsTwo}
							imgThree={ClientsThree}
							imgFour={ClientsFour}
							imgFive={ClientsFive}
							imgSix={ClientsSix}
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<GridCarousolItem
							imgOne={ClientsSeven}
							imgTwo={ClientsEight}
							imgThree={ClientsNine}
							imgFour={ClientsThree}
							imgFive={ClientsOne}
							imgSix={ClientsTwo}
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<GridCarousolItem
							imgOne={ClientsThree}
							imgTwo={ClientsFour}
							imgThree={ClientsSix}
							imgFour={ClientsOne}
							imgFive={ClientsTwo}
							imgSix={ClientsThree}
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<GridCarousolItem
							imgOne={ClientsTwo}
							imgTwo={ClientsThree}
							imgThree={ClientsFour}
							imgFour={ClientsFive}
							imgFive={ClientsSix}
							imgSix={ClientsOne}
						></GridCarousolItem>
					</div>

					<div className="carousel-item" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={ClientsFour}
							imgTwo={ClientsFive}
							imgThree={ClientsSix}
							imgFour={ClientsOne}
							imgFive={ClientsTwo}
							imgSix={ClientsThree}
						></GridCarousolItem>
					</div>

				</div>
				<button className="carousel-control-prev " type="button" data-bs-target="#partnersGridCarousol" data-bs-slide="prev">
					<span className="carousel-control-prev-icon preIcon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next " type="button" data-bs-target="#partnersGridCarousol" data-bs-slide="next">
					<span className="carousel-control-next-icon nextIcon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

		</div>
	);
};

export default InternationalPartnersGridCarousol;