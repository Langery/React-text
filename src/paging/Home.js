import React from 'react';
import '../layouts/Tyle.css'

class Home extends React.Component {
	render () {
		return (
			<div>
			  <h2 className="fontstyle">Merry Christmas</h2>
			  <img src={require('../img/1.jpg')} className="image"/>
			</div>
		)
	}
}

export default Home;