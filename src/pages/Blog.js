import React, { Component } from 'react'
import { Media, Row, Col, Container, ListGroup, Card } from 'react-bootstrap'
import team from '../assets/team.png'

export default class Blog extends Component {
	render(){
		return(
			<Container >
				<Row>
					<Col md="9">
					 <Media className='mt-5 mb-5'>
					 	<img
					 		width={150}
					 		height={150}
					 		className='mr-3'
					 		src={team} 
					 	/>
					 	<Media.Body>
					 		<h5>Blog post</h5>
					 		<p>
					 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi eum, praesentium facilis, veritatis nisi asperiores iure nesciunt eos quis voluptas dolores, repudiandae vel nulla quod! Eaque, ab laudantium ratione!
					 		</p>
					 	</Media.Body>
					 </Media>
					 <Media className='mt-5 mb-5'>
					 	<img
					 		width={150}
					 		height={150}
					 		className='mr-3'
					 		src={team} 
					 	/>
					 	<Media.Body>
					 		<h5>Blog post</h5>
					 		<p>
					 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi eum, praesentium facilis, veritatis nisi asperiores iure nesciunt eos quis voluptas dolores, repudiandae vel nulla quod! Eaque, ab laudantium ratione!
					 		</p>
					 	</Media.Body>
					 </Media>
					 <Media className='mt-5 mb-5'>
					 	<img
					 		width={150}
					 		height={150}
					 		className='mr-3'
					 		src={team} 
					 	/>
					 	<Media.Body>
					 		<h5>Blog post</h5>
					 		<p>
					 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi eum, praesentium facilis, veritatis nisi asperiores iure nesciunt eos quis voluptas dolores, repudiandae vel nulla quod! Eaque, ab laudantium ratione!
					 		</p>
					 	</Media.Body>
					 </Media>
					 <Media className='mt-5 mb-5'>
					 	<img
					 		width={150}
					 		height={150}
					 		className='mr-3'
					 		src={team} 
					 	/>
					 	<Media.Body>
					 		<h5>Blog post</h5>
					 		<p>
					 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sequi eum, praesentium facilis, veritatis nisi asperiores iure nesciunt eos quis voluptas dolores, repudiandae vel nulla quod! Eaque, ab laudantium ratione!
					 		</p>
					 	</Media.Body>
					 </Media>
				 </Col>
				 <Col md='3' className='mt-5 mb-5'>
				 	<h5 className='text-center '>Categories</h5>
				 	<Card >
				 		<ListGroup variant='flush'>
				 			<ListGroup.Item>Html/Css</ListGroup.Item>
				 			<ListGroup.Item>Html/Css</ListGroup.Item>
				 			<ListGroup.Item>Html/Css</ListGroup.Item>
				 			<ListGroup.Item>Html/Css</ListGroup.Item>
				 			<ListGroup.Item>Html/Css</ListGroup.Item>
				 			<ListGroup.Item>Html/Css</ListGroup.Item>
				 		</ListGroup>
				 	</Card>
				 	<Card className='mt-5'>
				 		<Card.Body>
				 			<Card.Title>Site widget</Card.Title>
				 			<Card.Text>
				 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rem reiciendis possimus perspiciatis accusantium atque nisi, culpa fuga consectetur doloremque adipisci beatae non cumque corporis quod, consequatur ut, suscipit saepe!
				 			</Card.Text>
				 	 </Card.Body>
				 	</Card>
				 </Col>
				</Row>
			</Container>
		)
	}
}