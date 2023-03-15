import React from "react";
import { Button, Modal, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

function CustomModal({ setShowModal, title, body, footer, path }) {
  return (
    <Modal
      show={true}
      onHide={() => {
        setShowModal(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LinkContainer to={path}>
          <Nav.Link>
            <Button className="btn btn-dark">{body}</Button>
          </Nav.Link>
        </LinkContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setShowModal(false);
          }}
        >
          {footer}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
