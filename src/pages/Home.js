import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import { Card, Container, CardDeck, Button} from 'react-bootstrap'
import team from '../assets/team.png'


export default class Home extends Component {
	render(){
		return(
		<>
			<CarouselBox />
			<Container className='mb-5'>
				<h2 className='text-center m-4'>Our team</h2>
				<CardDeck>
					<Card>
						<Card.Img 
							variant='top'
							src={team}
						 />
						 <Card.Body>
						  <Card.Title>Developers</Card.Title>
						  <Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium accusantium explicabo, quibusdam.
								</Card.Text>
								<Button variant='primary'>About team</Button>
						 </Card.Body>
					</Card>
					<Card>
						<Card.Img 
							variant='top'
							src={team}
						 />
						 <Card.Body>
						  <Card.Title>Developers</Card.Title>
						  <Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium accusantium explicabo, quibusdam.
								</Card.Text>
								<Button variant='primary'>About team</Button>
						 </Card.Body>
					</Card>
					<Card>
						<Card.Img 
							variant='top'
							src={team}
						 />
						 <Card.Body>
						  <Card.Title>Developers</Card.Title>
						  <Card.Text>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium accusantium explicabo, quibusdam.
								</Card.Text>
								<Button variant='primary'>About team</Button>
						 </Card.Body>
					</Card>
				</CardDeck>
			</Container>
		</>
		)
	}
}