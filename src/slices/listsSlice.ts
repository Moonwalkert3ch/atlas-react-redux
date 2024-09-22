import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringify } from "uuid";

// define logic of moving a card between lists
interface Card {
  id: string;
  title: string;
  description: string;
}

// Define the structure of a card and a list
interface List {
  id: string;
  title: string;
  cards: string[]; // Array of card IDs
}

interface ListsState {
  lists: List[];
}

// Initial state with a single list
const initialState: ListsState = {
  lists: [
    { id: "1", title: "To-Do", cards: ["card1", "card2"]},
    { id: "2", title: "To-Do", cards: ["card3", "card4"]}
  ],
};

export const listsSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    // Add a new list
    addList: (state, action: PayloadAction<{ title: string }>) => {
      state.lists.push({
        id: `${state.lists.length + 1}`, //  generate unique ID for the list
        title: action.payload.title,
        cards: [],
      });
    },

    // Delete a list by ID
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload.listId);
    },

    // Add a card to a specific list by list ID
    addCardToList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
      const list = state.lists.find((list) => list.id === action.payload.listId);
      if (list) {
        list.cards.push(action.payload.cardId);
      }
    },

    // move the cards between lists
    moveCard: (state, action: PayloadAction<{ fromListId: string; toListId: string; cardId: string }>) => {
      const { fromListId, toListId, cardId } = action.payload;
      const fromList = state.lists.find(list => list.id === fromListId);
      const toList = state.lists.find(list => list.id === toListId);

      if (fromList && toList) {
        // drags the card from origianl list
        fromList.cards = fromList.cards.filter(id => id !== cardId);
        // drops card to desired list
        toList.cards.push(cardId);
      }
    },

    // Clear/reset the entire board
    clearBoard: (state) => {
      state.lists = [];
    },
  },
});

// Export the actions to use in components
export const { addList, deleteList, addCardToList, moveCard, clearBoard } = listsSlice.actions;

// Export the reducer to be used in the store configuration
export default listsSlice.reducer;
