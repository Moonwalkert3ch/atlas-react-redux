import { List } from "./List";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addList, clearBoard, deleteList } from "../slices/listsSlice";

export function Board() {
    const lists = useSelector((state: RootState) => state.toDoList.lists); // Access lists from state
    const dispatch = useDispatch();

    return (
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => (
          <List 
            key={list.id}
            id={list.id}
            title={list.title}
            cards={list.cards}
            onDelete={() => dispatch(deleteList({ listId: list.id }))} // Handle list deletion
          />
        ))}
      </div>
      {/* Add List Form */}
      <button onClick={() => dispatch(addList({ title: "New List" }))}>
        Add List
      </button>
      {/* Clear Board Button */}
      <button onClick={() => dispatch(clearBoard())}>
        Clear Board
      </button>
    </div>
  );
}