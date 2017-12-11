import React from 'react';
import '../layouts/Tyle.css'


class About extends React.Component {
	render () {
		return (
			<div>
			  <h2 className="fontweight">Santa Claus</h2>
			  <img src={require('../img/2.jpg')} className="image"/> 
			</div>
		)
	}
}

export default About;