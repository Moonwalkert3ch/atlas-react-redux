import { test, expect } from "vitest";

import listsReducer, { addList } from "../slices/listsSlice";

// define the initial state for the tests
const initialState = {
    lists: [
        { id: "1", title: "To-Do", cards: ["card1", "card2"]},
        { id: "2", title: "To-Do", cards: ["card3", "card4"]},
        { id: "3", title: "To-Do", cards: ["card5", "card6"]},
        { id: "4", title: "To-Do", cards: ["card7", "card8"]}
    ],
};

// Test for adding a new list
test("adding a new list renders correctly", () => {
    const newListTitle = "Done";
    const action = addList({ title: newListTitle });

    // apply the action and retrieve new state
    const state = listsReducer(initialState, action);

    // checks if list increased meaning the new list was added
    expect(state.lists).toHaveLength(3);
    expect(state.lists[2]).toHaveProperty("title", newListTitle);
    // expect new lists cards array to be empty
    expect(state.lists[2].cards).toHaveLength(0);
})