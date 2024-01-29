import { Fragment } from 'react';
import { Provider } from "react-redux";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList'
import NoteForm from './components/NoteForm/NoteForm';
import NoteList from './components/NoteList/NoteList'
import { store } from "./redux/Store";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  // const [todos, setTodo] = useState([]);

  // const createTodo = (text) => {
  //   setTodo([...todos, {id: todos.length+1, text:text, completed:false}])
  // }

  // const toggleTodo = (index) => {
  //   const todoList = [...todos];
  //   todoList[index].completed = !todoList[index].completed;
  //   setTodo(todoList);
  // }

  return (
    <div>
      <Navbar />
      <Provider store={store}>
        {/* geting store from the our app stoe */}
        <BrowserRouter>
          {/* Using Browser router for the hashmap*/}
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route
              path="todo"
              element={
                <div style={{padding:"20px"}}>
                  <h1>Todo App</h1>
                  <TodoForm />
                  <TodoList />
                </div>
              }
            ></Route>
            <Route
              path="notes"
              element={
                <div style={{padding:"20px"}}>
                  <h1>Note App</h1>
                  <NoteForm />
                  <NoteList />
                </div>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
