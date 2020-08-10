import React from 'react';
import Welcome from './Welcome';
import Gallery from './Gallery';
import Menu from './Menu';
import Contact from './Contact';
import {Link} from 'react-router-dom';
import './Home.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-175042129-1', {
	gaOptions: {
		siteSpeedSampleRate: 100
	}
});
ReactGA.pageview(window.location.pathname + window.location.search);

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