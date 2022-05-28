import { Row, Col } from "react-bootstrap";
import EditTask from "./EditTask";

const ToDoBox = ({
  bold,
  setBold,
  task,
  completed,
  id,
  todos,
  setTodos,
  setNewTask,
  newTask,
}) => {
  const deleteTask = (id) => {
    var filtered = todos.filter((el) => id !== el.id);
    setTodos(filtered);
  };

  return (
    <Row className="my-3">
      <Col className="m-auto shadow rounded text-white">
        <div className="row py-3 text-capitalize">
          <div className="col-10">
            <h6 className={`${bold ? "fw-bolder" : ""} text-dark`}>{task}</h6>
          </div>
          <div className="col-2 d-flex justify-content-evenly align-items-center text-center">
            <i
              onClick={() => setBold(!bold)}
              className="fa fa-star text-warning"
            ></i>
            <i
              onClick={() => deleteTask(id)}
              className="fa fa-trash text-danger"
            ></i>
            <EditTask
              id={id}
              task={task}
              todos={todos}
              setTodos={setTodos}
              newTask={newTask}
              setNewTask={setNewTask}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ToDoBox;
