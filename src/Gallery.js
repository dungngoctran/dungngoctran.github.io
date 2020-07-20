import React from 'react';
import './Gallery.css';
import Pic1 from './resources/pic1.jpg';
import Pic2 from './resources/pic2.jpg';

class Gallery extends React.Component {

	render() {
		return(
			<div className="Gallery">
				<img src={Pic1} alt="Day 1 angle 1"/>
				<img src={Pic2} alt="Day 1 angle 2"/>
			</div>
		)
	}
}

export default Gallery;