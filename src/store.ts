import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import listsReducer from "./slices/listsSlice";
import cardsReducer from './slices/cardsSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// COMBINE THE REDUCERS
const rootReducer = combineReducers({
    toDoList: listsReducer,
    cards: cardsReducer,
});

// configure persist
const persistConfig = {
    key: 'toDoList',
    storage,
};

// persist reducwer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

// sets up the persistor to persist the store
export const persistor = persistStore(store);

// thesee types are helpfull for typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();