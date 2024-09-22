import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Card {
    id: string;
    title: string;
    description: string;
}

interface CardsState {
    cards: Card[];
}

const initialState: CardsState = {
    cards: [],
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        createCard: (
            state,
            action: PayloadAction<{ title: string; description: string }>
        ) => {
            const newCard: Card = {
                id: uuidv4(),
                title: action.payload.title,
                description: action.payload.description,
            };
            state.cards.push(newCard);
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        clearBoard: (state) => {
            state.cards = [];
        },
    },
});

export const { createCard, deleteCard, clearBoard } = cardsSlice.actions;

export default cardsSlice.reducer;