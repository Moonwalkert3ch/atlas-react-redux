import { List } from "./List";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addList, clearBoard, deleteList, moveCard } from "../slices/listsSlice";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";

export function Board() {
    const lists = useSelector((state: RootState) => state.toDoList.lists); // Access lists from state
    const dispatch = useDispatch();

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const cardId = String(active.id);
        const fromListId = active.data.current?.listId as string;

        if (fromListId && over.id) {
          const toListId = String(over.id); //convert unique identifier to a string

          // checks if card is moved to a diffrent list
          if (fromListId !== toListId) {
            // dispatch action to move card between the list
          dispatch(moveCard({ cardId, fromListId, toListId }));
          }
        }
      }
    };

    return (
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >

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
  </DndContext>
  );
}