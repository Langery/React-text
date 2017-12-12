import React from 'react';
import '../layouts/Tyle.css'

class Home extends React.Component {
	render () {
		return (
			<div className="div">
			  <h2 className="fontstyle">Merry Christmas</h2>
			  <img src={require('../img/1.jpg')} className="image"/>
			  <p className="write">
			  	The story is about Santa Claus.We always call his name a Grandpa for Christmas.
			  </p>
			</div>
		)
	}
}

export default Home;
