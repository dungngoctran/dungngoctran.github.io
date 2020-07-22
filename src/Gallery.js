import React from 'react';
import './Gallery.css';
import Pic1 from './resources/pic1.jpg';
import Pic2 from './resources/pic2.jpg';
import Pic3 from './resources/pic3.jpg';
import Pic4 from './resources/pic4.jpg';
import Pic5 from './resources/pic5.jpg';
import Pic6 from './resources/pic6.jpg';
import Pic7 from './resources/pic7.jpg';

class Gallery extends React.Component {

	render() {
		return(
			<div className="Gallery">
				<img src={Pic1} alt="Day 1 angle 1"/>
				<img src={Pic2} alt="Day 1 angle 2"/>
				<img src={Pic3} alt="Day 2 pic 1"/>
				<img src={Pic4} alt="Day 2 pic 2"/>
				<img src={Pic5} alt="Day 2 pic 3"/>
				<img src={Pic6} alt="Day 3 pic 1"/>
				<img src={Pic7} alt="Day 3 pic 2"/>
			</div>
		)
	}
}

export default Gallery;