import { test, expect } from "vitest";

import listsReducer, { addCardToList, addList, clearBoard, deleteList } from "../slices/listsSlice";
import { a } from "vitest/dist/chunks/suite.CcK46U-P.js";

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
    const newListTitle = "To-Do";
    const action = addList({ title: newListTitle });

    // apply the action and retrieve new state
    const state = listsReducer(initialState, action);

    // checks if list increased meaning the new list was added
    expect(state.lists).toHaveLength(5);
    expect(state.lists[2]).toHaveProperty("title", newListTitle);
    // expect new lists cards array to be empty
    expect(state.lists[4].cards).toHaveLength(0);
});

// test for deleting
test("delets list renders correctly", () => {
    const action = deleteList({ listId: "1" });

    // apply action get new state
    const state = listsReducer(initialState, action);

    // checks length verifies is less
    expect(state.lists).toHaveLength(3);
    expect(state.lists.find(list => list.id === "1")).toBeUndefined();
});

// test to add card
test("adds card to list renders correctly", () => {
    const action = addCardToList({ listId: "1", cardId: "card9"});

    // apply action update the state
    const state = listsReducer(initialState, action);

    // checks if card added to right list
    expect(state.lists[0].cards).toHaveLength(3);
    expect(state.lists[0].cards).toContain("card9");
});

// test the resetting of the board
test("clear the board renders correctly", () => {
    const action = clearBoard();

    // apply action update the state
    const state = listsReducer(initialState, action);

    // check if lists array is clear
    expect(state.lists). toHaveLength(0);
});
