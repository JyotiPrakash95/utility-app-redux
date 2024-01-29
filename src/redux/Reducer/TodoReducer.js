import { Add_TODO, Edit_TODO, Toggle_TODO } from "../Actions/TodoAction";

const initialState = {
  todos: [
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: true },
  ]
};
// Todo Reducer
export default function todoReducer(state=initialState, action) {
    // state
    switch (action.type) {
        case Add_TODO:
            return {
                ...state,
                todos: [...state.todos,
                    {
                    text:action.text, completed:false
                }]
            }
        case Toggle_TODO: 
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
        case Edit_TODO:
            return {
              ...state,
              todos: state.todos.map((todo, i) => {
                if (i === action.index) {
                  todo.text = todo.action.text;
                }
                return todo;
              }),
            };
        default:
            return state;
    }
}