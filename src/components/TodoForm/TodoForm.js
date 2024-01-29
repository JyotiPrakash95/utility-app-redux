import { useRef, useState } from "react";
import "./ToDoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../../redux/Actions/TodoAction";

export default function TodoForm() {
  const [todoText, setTodoText] = useState("");
  // let refValue = useRef("")
    const dispatch = useDispatch();
    
    const handleSubmit =(e)=> {
        e.preventDefault()
        setTodoText("");
        dispatch(add_todo(todoText));

  }
  // const handleEdit = () => {
  //   todoText = refValue.current.value;
  // }
    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button className="btn btn-success float-end" type="submit">
              Create Todo
            </button>
          </form>
        </div>
    );
}