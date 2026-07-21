import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import deviceReducer from "./slices/deviceSlice";
import conversationReducer from "./slices/conversationSlice"
import messageReducer from "./slices/messageSlice"

export const store = configureStore({

    reducer: {
        theme: themeReducer,
        auth: authReducer,
        device: deviceReducer,
        conversation: conversationReducer,
        message: messageReducer
    },
});