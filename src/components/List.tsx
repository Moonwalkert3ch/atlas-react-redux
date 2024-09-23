import React from "react";
import { Card } from "./Card";
import { useAppSelector, useAppDispatch } from "../store";
import { deleteCard } from "../slices/cardsSlice";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


interface ListProps {
  id: string;
  title: string;
  cards: string[];
  onDelete: () => void;
}

interface SortableContextProps {
  cardId: string;
  title: string;
  description: string;
  onDelete: () => void;
}

const SortableCard: React.FC<SortableContextProps> = ({ cardId, title, description, onDelete })  => {
  // useSortable makes card draggable
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: cardId });

  // styles dor drag transformation and transition
  const style = {
    transform: CSS. Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card
        title={title}
        description={description}
        cardId={cardId}
        onDelete={onDelete}
      />
    </div>
  );
};

export const List: React.FC<ListProps> = ({ id, title, cards, onDelete }) => {
  const dispatch = useAppDispatch();

  // retrieves card data from the redux store
  const allCards = useAppSelector((state) => state.cards.cards);

  const handleDeleteCard = (cardId: string) => {
    dispatch(deleteCard(cardId)); // dispatches action to delete card
  };

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton listId={id} onDelete={onDelete} />

      <h3>{title}</h3>
      {/* Sortblecontext wraps the cards that need sort */}
      <SortableContext items={cards}>

      {/* Renders each card */}
      {cards.map((cardId) => {
        const card = allCards.find((c) => c.id === cardId); // look for card by id

        return (
          <SortableCard
            key={cardId}
            title={card?.title || "Lorem ipsum dolor"}
            description={card?.description || "Sed viverra, dom ed facilisis bibendum, ante placeat wquam"}
            cardId={cardId}
            onDelete={() => handleDeleteCard(cardId)}
          />
        );
      })}
      </SortableContext>

      <NewCardForm listId={id} />
    </div>
  );
};