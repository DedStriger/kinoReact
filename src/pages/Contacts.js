import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default class Contacts extends Component {
	render(){
		return(
			<Container style={{width:'500px'}}>
				<h1 className='text-center'>Contact us</h1>
				<Form>
					<Form.Group controlId='formsBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email'/>
						<Form.Text>
						 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus impedit, cupiditate quaerat! Delectus amet, tenetur a, iste vero minima reiciendis!
					 </Form.Text>
				 </Form.Group>

				 <Form.Group controlId='formsBasicPassword'>
				 	<Form.Label>Your password</Form.Label>
						<Form.Control as='textarea' rows='3' />
				 </Form.Group>

				 <Form.Group controlId='formsBasicCheckbox'>
						<Form.Check type='checkbox' label='Check me out' />
				 </Form.Group>

				 <Button variant='primary' type='submit'> Submit</Button>
				</Form>
			</Container>
		)
	}
}