import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddChannelModal({ show, onClose }) {
  return (
    <>
      <Modal show={show} onHide={onClose} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title>Add channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter new channel name..."
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddChannelModal;
