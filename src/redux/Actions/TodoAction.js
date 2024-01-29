// create constence

export const Add_TODO = "Add a TODO";
export const Toggle_TODO = "Toggle TODO";
export const Edit_TODO = "Edit Todo"

// creators
export const add_todo = (text) => ({ text: text, type: Add_TODO });
export const toggle_todo = (index) => ({ index: index, type: Toggle_TODO });
export const edit_todo = (index, text) => ({ index: index, type: Edit_TODO, text:text});