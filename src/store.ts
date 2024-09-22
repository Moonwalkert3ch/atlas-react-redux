import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import listsReducer from "./slices/listsSlice";
import cardsReducer from './slices/cardsSlice';

export const store = configureStore({
    reducer: {
        toDoList: listsReducer,
        cards: cardsReducer,
    },
});

// thesee types are helpfull for typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();