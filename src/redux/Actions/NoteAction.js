// create constence

export const Add_Note = "Add Note";
export const Delete_Note = "Delete Note";

// Action creator
export const addNote = (text) => ({ text: text, type: Add_Note });
export const deleteNote = (index) => ({ index: index, type: Delete_Note });