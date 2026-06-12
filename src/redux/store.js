import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import deviceReducer from "./slices/deviceSlice";

export const store = configureStore({

    reducer: {
        theme: themeReducer,
        auth: authReducer,
        device: deviceReducer
    },
});