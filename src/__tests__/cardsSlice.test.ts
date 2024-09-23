import cardsReducer, { createCard, deleteCard, clearBoard } from '../slices/cardsSlice';
import { describe, expect, test } from 'vitest';

describe('cardsSlice', () => {
    const initialState = {
        cards: [],
    };

    test('should handle createCard', () => {
        const action = createCard({ listId: '1', title: 'Test Card', description: 'This is a test.' });
        const state = cardsReducer(initialState, action);

        expect(state.cards).toHaveLength(1);
        expect(state.cards[0]).toHaveProperty('id'); // Check that the ID is generated
        expect(state.cards[0].title).toBe('Test Card');
        expect(state.cards[0].description).toBe('This is a test.');
    });

    test('should handle deleteCard', () => {
        const initialStateWithCards = {
            cards: [
                { id: '1', title: 'Card 1', description: 'First card' },
                { id: '2', title: 'Card 2', description: 'Second card' },
            ],
        };

        const action = deleteCard('1');
        const state = cardsReducer(initialStateWithCards, action);

        expect(state.cards).toHaveLength(1);
        expect(state.cards[0].id).toBe('2'); // Check that the second card remains
    });

    test('should handle clearBoard', () => {
        const initialStateWithCards = {
            cards: [
                { id: '1', title: 'Card 1', description: 'First card' },
                { id: '2', title: 'Card 2', description: 'Second card' },
            ],
        };

        const action = clearBoard();
        const state = cardsReducer(initialStateWithCards, action);

        expect(state.cards).toHaveLength(0); // Check that the board is cleared
    });
});