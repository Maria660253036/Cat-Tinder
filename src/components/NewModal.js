import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {
  Col, Container, Row, ListGroupItem, ListGroup, FormControl, Form
} from 'react-bootstrap'

class NewModal extends Component {
    toggleModal = () => {
        this.props.toggle()
    }

    render() {
    return(
        <div>
        <Modal show={this.props.isOpen} onHide={this.toggleModal}>
            <Modal.Header>
                <Modal.Title>Cat Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>Name: {this.props.cat.name}</li>
                    <li>Age: {this.props.cat.age}</li>
                    <li>Enjoys: {this.props.cat.enjoys}</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={this.toggleModal}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
        </div>
        )
    }
}
export default NewModal;
