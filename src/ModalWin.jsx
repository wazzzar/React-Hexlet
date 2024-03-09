import React from 'react';
import Modal from "./Modal";

export default class ModalWin extends React.Component {

    state = { open: false };

    toggle = (e) => {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open Modal</button>
                <Modal isOpen={this.state.open}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}