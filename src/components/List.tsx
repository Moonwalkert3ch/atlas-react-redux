import React from "react";
import { Card } from "./Card";

interface ListProps {
  id: string;
  title: string;
  cards: string[];
  onDelete: () => void;
}

export const List: React.FC<ListProps> = ({ title, cards, onDelete }) => {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <button onClick={onDelete} className="hidden group-hover/list:block">
        x {/* Delete list button */}
      </button>
      <h3>{title}</h3>
      {cards.map((cardId) => (
        <Card key={cardId} title={""} description={""} />
      ))}
    </div>
  );
};