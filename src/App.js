import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import ToDoBox from "./ToDoBox";
import './App.css'
function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState([]);
  const[bold,setBold]=useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      setTodos([...todos, { task: text, isCompleted: false, id: Date.now() }]);
      setText("");
    }
  };
  console.log(todos);

  return (
    <div className="container">
      <h1 className="text-warning text-center my-5">React To-Do List App!</h1>
      <Row>
        <Col className="m-auto" xs={6}>
          <Form onSubmit={(e) => submitHandler(e)} autoComplete="off">
            <Form.Group className="mb-3">
              <Form.Label className="display-6 text-secondary">
                what's on your mind today?
              </Form.Label>
              <Form.Control
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Set Task!
            </Button>
          </Form>
          {todos.map((el, index) => (
            <ToDoBox
              key={index}
              task={el.task}
              completed={el.isCompleted}
              id={el.id}
              todos={todos}
              setTodos={setTodos}
              newTask={newTask}
              setNewTask={setNewTask}
              bold={bold}
              setBold={setBold}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default App;
