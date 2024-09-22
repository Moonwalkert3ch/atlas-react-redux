import { List } from "./List";
import { useAppSelector } from "../store";

export function Board() {
    const lists = useAppSelector((state) => state.toDoList.lists);

    return (
        <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list: { title: string; }) => (
          <List title={list.title} />
        ))}
      </div>
    </div>
    );
}