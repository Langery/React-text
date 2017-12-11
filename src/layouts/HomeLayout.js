import React from 'react';
import './Tyle.css'

var div = {
	height:'70px',
	lineHeight:'70px'
}
var header = {display:'inline-block'}
var imgs = {
	width:'18%',
	marginTop:'7px'
}
var main = {display:'inline-block',float:'right'}

class HomeLayout extends React.Component {
	render () {
		const {title,children} = this.props;
		return (
			<div style={div}>
				<header style={header}>
					<img src={require('../img/logo.jpg')} style={imgs}/>
				</header>
				<main className="fontweight" style={main}>
					{children}
				</main>
			</div>
		);
	}
}

export default HomeLayout;