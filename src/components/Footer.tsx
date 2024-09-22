import React, { useState } from "react";
import { useAppDispatch } from "../store";
import { addList, clearBoard } from "../slices/listsSlice";

export const Footer: React.FC = () => {
    const [listTitle, setListTitle] = useState("");
    const dispatch = useAppDispatch();

    // Handles form submission
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (listTitle.trim() !== "") {
            dispatch(addList({ title: listTitle }));
            setListTitle(""); // Clear input after adding the list
        }
    };

    // Clears the board
    const handleClearBoard = () => {
        dispatch(clearBoard());
        setListTitle(""); // Optionally clear input when clearing the board
    };

    return (
        <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
            <form onSubmit={handleFormSubmit} className="flex space-x-4">
                <input 
                    type="text"
                    placeholder="List title"
                    name="title"
                    value={listTitle} // Binds input value to the state
                    onChange={(e) => setListTitle(e.target.value)} // Updates the state on input change
                    className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
                />
                <button
                    type="submit"
                    className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
                >
                    Save
                </button>
                <button
                    onClick={handleClearBoard}
                    type="button"
                    className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
                >
                    Clear Board
                </button>
            </form>
        </footer>
    );
};
