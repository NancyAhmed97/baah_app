import { configureStore } from "@reduxjs/toolkit";
// import localizationReducer from "./Localization";
// import VariableReducer from "./variables";
// import authorizationReducer from "./Authorization";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import DarkModeRducer from "./DarkMode";
import favoriteRducer from "./Favorite";
import messagesRducer from "./Message";
import userRducer from "./user";
import usersRducer from "./users";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    
};

const RootReducers = combineReducers({
    // currentLocal: localizationReducer,
    // DateSelect:VariableReducer,
    // authorization: authorizationReducer,
    darkMode: DarkModeRducer,
    favorite: favoriteRducer,
    messages: messagesRducer,
    users: usersRducer,
    user: userRducer,




});

const persistedReducer = persistReducer(persistConfig, RootReducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});