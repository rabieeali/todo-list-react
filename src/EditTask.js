import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const EditTask = ({ id, task, todos, setTodos, setNewTask, newTask }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editHandler = (e) => {
    e.preventDefault();

    todos.map((elem) => {
      if (newTask) {
        elem.task = newTask;
        setTodos([...todos]);
        handleClose(true);
      }
    });
  };

  console.log(todos);

  return (
    <>
      <i onClick={handleShow} className="fa fa-edit text-primary"></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="m-auto text-info">Edit Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            className="btn-sm mt-3"
            variant="success"
            onClick={(e) => editHandler(e, id)}
          >
            Save Changes
          </Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
