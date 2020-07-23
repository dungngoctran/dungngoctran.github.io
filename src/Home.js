import React from 'react';
import Welcome from './Welcome';
import Gallery from './Gallery';
import Menu from './Menu';
import Contact from './Contact';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
	return(
		<div className="Home">
			<Welcome />
      <Gallery />
      <Menu />
      <Contact />
      <Link className="fas fa-images quicklink" to="/gallery"></Link>
		</div>
	)
}

export default Home;