import React, { useRef, useState } from "react";
import { useAppDispatch } from "../store";
import { createCard } from "../slices/cardsSlice";

interface NewCardFormProps {
  listId: string;
}

export const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const titleInputRef = useRef<HTMLInputElement>(null); // ref for title input

  const handleAddCard = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (title.trim() !== "") {
      dispatch(createCard({ listId, title, description }));
      // clear input
      setTitle("");
      setDescription("");
      titleInputRef.current?.focus(); 
    }
  };

  return (
        <div className="group/new-card m-3 flex h-44 justify-center">
            <form
              onSubmit={handleAddCard}
              className="min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
            >
              <input
              ref={titleInputRef}
                className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
                autoFocus
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // update state with input entry
                name="title"
              />
              <textarea
                className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
                placeholder="Description"
                name="description"
              ></textarea>
              <div className="buttons">
                <button type="submit" className="w-full p-4">Save</button>
              </div>
            </form>
          </div>
    )
}