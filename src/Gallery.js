import React from 'react';
import './Gallery.css';
import Pic2 from './resources/pic2.jpg';
import Pic3 from './resources/pic3.jpg';
import Pic5 from './resources/pic5.jpg';
import Pic6 from './resources/pic6.jpg';
import {Link} from 'react-router-dom';

function Gallery() {
	return(
		<div className="Gallery">
			<img src={Pic2} alt="Pic2"/>
			<img src={Pic6} alt="Pic6"/>
			<img src={Pic3} alt="Pic3"/>
			<img src={Pic5} alt="Pic5"/>
			<Link className="button" to="/gallery">See More</Link>
		</div>
	)
}

export default Gallery;