import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css';
import lake from '../assets/lake.png'
import sea from '../assets/sea.png'

export default class CaruselBox extends Component {
	render(){
		return(
					<Carousel className='slider'>
					 <Carousel.Item>
					 	<img
					 		className='d-block w-100 slider'
					 		src={lake}
					 		alt='lake'
					 	/>
					 	<Carousel.Caption>
					 		<h3>Lake Image</h3>
					 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, consequatur.</p>
					 	</Carousel.Caption>
					 </Carousel.Item>
					 <Carousel.Item>
					 	<img
					 		className='d-block w-100 slider'
					 		src={sea}
					 		alt='sea'
					 	/>
					 	<Carousel.Caption>
					 		<h3>Sea Image</h3>
					 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, consequatur.</p>
					 	</Carousel.Caption>
					 </Carousel.Item>
					 <Carousel.Item>
					 	<img
					 		className='d-block w-100 slider'
					 		src={lake}
					 		alt='lake'
					 	/>
					 	<Carousel.Caption>
					 		<h3>Lake Image</h3>
					 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, consequatur.</p>
					 	</Carousel.Caption>
					 </Carousel.Item>
					</Carousel>
				)
	}
}