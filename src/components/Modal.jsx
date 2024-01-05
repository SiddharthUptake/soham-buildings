import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, title, children }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <button color="primary" onClick={toggle}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
