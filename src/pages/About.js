import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import '../App.css'
import man from '../assets/man.png'

export default class About extends Component {
	render(){
		return(
			<Container className='tabsContainer'>
				<Tab.Container id='left-tabs-example' defaultActiveKey='first' >
					<Row>
					 <Col sm={3}>
					 	<Nav variant='pills' className='flex-column mt-2'>
					 		<Nav.Item>
					 			<Nav.Link eventKey='first'>
					 			 Design
					 			</Nav.Link>
					 		</Nav.Item>
					 		<Nav.Item>
					 			<Nav.Link eventKey='second'>
					 			 Team
					 			</Nav.Link>
					 		</Nav.Item>
					 		<Nav.Item>
					 			<Nav.Link eventKey='third'>
					 			 Programing
					 			</Nav.Link>
					 		</Nav.Item>
					 		<Nav.Item>
					 			<Nav.Link eventKey='fourth'>
					 			 Frameworks
					 			</Nav.Link>
					 		</Nav.Item>
					 		<Nav.Item>
					 			<Nav.Link eventKey='fifth'>
					 			 Libreries
					 			</Nav.Link>
					 		</Nav.Item>
					 	</Nav>
					 </Col>
					 <Col sm={9}>
					 	<Tab.Content>
					 		<Tab.Pane eventKey='first'>
					 			<img src={man} className='tabsImg'/>
					 			<p>
					 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam ipsum voluptates pariatur aut architecto deserunt cumque voluptatem minus asperiores eos repellendus, qui corporis voluptatum. Ullam, modi, eligendi. Cum, quaerat!
					 			</p>
					 		</Tab.Pane>
					 	 <Tab.Pane eventKey='second'>
					 			<img src={man} className='tabsImg'/>
					 			<p>
					 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam ipsum voluptates pariatur aut architecto deserunt cumque voluptatem minus asperiores eos repellendus, qui corporis voluptatum. Ullam, modi, eligendi. Cum, quaerat!
					 			</p>
					 		</Tab.Pane>
					 		<Tab.Pane eventKey='third'>
					 			<img src={man} className='tabsImg'/>
					 			<p>
					 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam ipsum voluptates pariatur aut architecto deserunt cumque voluptatem minus asperiores eos repellendus, qui corporis voluptatum. Ullam, modi, eligendi. Cum, quaerat!
					 			</p>
					 		</Tab.Pane>
					 		<Tab.Pane eventKey='fourth'>
					 			<img src={man} className='tabsImg'/>
					 			<p>
					 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam ipsum voluptates pariatur aut architecto deserunt cumque voluptatem minus asperiores eos repellendus, qui corporis voluptatum. Ullam, modi, eligendi. Cum, quaerat!
					 			</p>
					 		</Tab.Pane>
					 		<Tab.Pane eventKey='fifth'>
					 			<img src={man} className='tabsImg'/>
					 			<p>
					 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam ipsum voluptates pariatur aut architecto deserunt cumque voluptatem minus asperiores eos repellendus, qui corporis voluptatum. Ullam, modi, eligendi. Cum, quaerat!
					 			</p>
					 		</Tab.Pane>
					 	</Tab.Content>
					 </Col>
					</Row>
				</Tab.Container>
			</Container>
		)
	}
}