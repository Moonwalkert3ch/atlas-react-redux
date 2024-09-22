import React from "react";
import { Card } from "./Card";
import { useAppSelector, useAppDispatch } from "../store";
import { deleteCard } from "../slices/cardsSlice";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";

interface ListProps {
  id: string;
  title: string;
  cards: string[];
  onDelete: () => void;
}

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
      {/* Renders each card */}
      {cards.map((cardId) => {
        const card = allCards.find((c) => c.id === cardId); // look for card by id

        return (
          <Card
            key={cardId}
            title={card?.title || "Untitled"}
            description={card?.description || "No description available"}
            cardId={cardId}
            onDelete={() => handleDeleteCard(cardId)}
          />
        );
      })}
      
      <NewCardForm listId={id} />
    </div>
  );
};