import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Define the structure of a card and a list
interface List {
  id: string;
  title: string;
  cards: string[]; // Array of card IDs
}

interface ListsState {
  lists: List[];
}

// Initial state with a single list (example)
const initialState: ListsState = {
  lists: [
    { id: "1", title: "To-Do", cards: [] },
  ],
};

export const listsSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    // Add a new list
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList = {
        id: nanoid(), // Generates a unique ID for the list
        title: action.payload.title,
        cards: [],
      };
      state.lists.push(newList);
    },

    // Delete a list by ID
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload.listId);
    },

    // Add a card to a specific list by list ID
    addCardToList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
      const list = state.lists.find(list => list.id === action.payload.listId);
      if (list) {
        list.cards.push(action.payload.cardId);
      }
    },

    // Clear/reset the entire board
    clearBoard: (state) => {
      state.lists = [];
    },
  },
});

// Export the actions to use in components
export const { addList, deleteList, addCardToList, clearBoard } = listsSlice.actions;

// Export the reducer to be used in the store configuration
export default listsSlice.reducer;
