import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversationId: null,
  messages: [],

  page: 0,
  size: 10,

  totalPages: 0,
  totalElements: 0,

  first: true,
  last: true,

  loading: false,
};

const messageSlice = createSlice({
  name: "message",

  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setMessages: (state, action) => {
      const { conversationId, response } = action.payload;

      state.conversationId = conversationId;
      state.messages = response.content;

      state.page = response.number;
      state.size = response.size;
      state.totalPages = response.totalPages;
      state.totalElements = response.totalElements;
      state.first = response.first;
      state.last = response.last;
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    updateMessage: (state, action) => {
      const { id, updates } = action.payload;

      const message = state.messages.find((m) => m.id === id);

      if (message) {
        Object.assign(message, updates);
      }
    },

    removeMessage: (state, action) => {
      state.messages = state.messages.filter((m) => m.id !== action.payload);
    },

    clearMessages: (state) => {
      state.conversationId = null
      state.messages = [];

      state.page = 0;
      state.size = 10;

      state.totalPages = 0;
      state.totalElements = 0;

      state.first = true;
      state.last = true;
    },
  },
});

export const { setLoading, setMessages, addMessage, updateMessage, removeMessage, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;
