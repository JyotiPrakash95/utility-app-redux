import { Add_Note, Delete_Note } from "../Actions/NoteAction";
const initialState = {
    Note: [
      { text: "this is Note 1", createdOn: new Date() },
      { text: "this is Note 2", createdOn: new Date() },
      { text: "this is Note 3", createdOn: new Date() },
      { text: "this is Note 4", createdOn: new Date() },
    ],
//   Note: [
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
//       createdOn: new Date(),
//     },
//     {
//       text: "Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.",
//       createdOn: new Date(),
//     },
//   ],
};

export default function noteReducer(state = initialState, action) {
    switch (action.type) {
        case Add_Note:
            return {
              ...state,
              Note: [
                ...state.Note,
                { text: action.text, createdOn: new Date() },
              ],
            };
        case Delete_Note:
            state.Note.splice(action.index, 1);
            return {
                ...state, Note: [...state.Note]
            }
        default:
            return state;
    }
}