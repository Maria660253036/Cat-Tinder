import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {
  Col, Container, Row, ListGroupItem, ListGroup, FormControl, Form
} from 'react-bootstrap'

class EditCatModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: this.props.cat.name,
                age: this.props.cat.age,
                enjoys: this.props.cat.enjoys
            }
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    toggleModal = () => {
        this.props.toggle()
    }

    handleEdit = () => {
        this.props.edit(this.state.form, this.props.id)
    }

    render() {
    return(
        <div>
        <Modal show={this.props.isEdit} onHide={this.toggleModal}>
            <Col xs={12}>
                <Form>
                <Form.Row>
                    <Col>
                    <Form.Group condtrolID="formNameEntry">
                        <Form.Label id="name">Name</Form.Label>
                        <FormControl
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.form.name}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group condtrolID="formAgeEntry">
                        <Form.Label id="age">Age</Form.Label>
                        <FormControl
                          type="number"
                          name="age"
                          onChange={this.handleChange}
                          value={this.state.form.age}
                        />
                    </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Group condtrolID="formEnjoysEntry">
                    <Form.Label id="enjoys">Enjoys</Form.Label>
                    <FormControl
                      type="text"
                      name="enjoys"
                      onChange={this.handleChange}
                      value={this.state.form.enjoys}
                    />
                </Form.Group>

                <button id="submit" type="submit" onClick={this.handleEdit}>
                Edit Cat Profile
                </button>
                </Form>
            </Col>
            </Modal>
        </div>
        )
    }
}
export default EditCatModal;
