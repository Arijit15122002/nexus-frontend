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

    clearMessages: (state) => {
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

export const { setLoading, setMessages, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;
