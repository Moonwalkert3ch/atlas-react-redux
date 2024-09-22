import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";

type ListPropTypes = {
    title: string;
}

export function List({title}:ListPropTypes) {
    return (
      <div className="group/list h-full min-w-96 p-4">
        <DeleteListButton />
        <h3>{title}</h3>
        <NewCardForm />
      </div>
    );
  }