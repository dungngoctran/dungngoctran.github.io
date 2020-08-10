import React from 'react';
import Pic0 from './resources/pic0.jpg';
import Pic1 from './resources/pic1.jpg';
import Pic2 from './resources/pic2.jpg';
import Pic3 from './resources/pic3.jpg';
import Pic4 from './resources/pic4.jpg';
import Pic5 from './resources/pic5.jpg';
import Pic6 from './resources/pic6.jpg';
import Pic7 from './resources/pic7.jpg';
import Pic8 from './resources/pic8.jpg';
import Pic9 from './resources/pic9.jpg';
import Pic10 from './resources/pic10.jpg';
import Pic11 from './resources/pic11.jpg';
import './GalleryFull.css';
import {Link} from 'react-router-dom';

const pics = [Pic0, Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11];

function GalleryFull() {
	return(
		<div className="GalleryFull">
			{pics.map((pic, index) => {return <img src={pic} key={index} alt={index}/>})}
			<Link className="fas fa-home quicklink" to="/"></Link>
		</div>
	)
}

export default GalleryFull;