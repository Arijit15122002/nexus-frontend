import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],

  page: 0,
  size: 10,

  totalPages: 0,
  totalElements: 0,

  first: true,
  last: true,
  loading: false,
};

const conversationSlice = createSlice({
  name: "conversation",

  initialState,

  reducers: {

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setConversations: (state, action) => {

      const response = action.payload;

      state.conversations = response.content;

      state.page = response.number;
      state.size = response.size;

      state.totalPages = response.totalPages;
      state.totalElements = response.totalElements;

      state.first = response.first;
      state.last = response.last;
    },

    clearConversations: (state) => {

      state.conversations = [];

      state.page = 0;
      state.size = 10;

      state.totalPages = 0;
      state.totalElements = 0;

      state.first = true;
      state.last = true;
    },

  },
});

export const {
  setLoading,
  setConversations,
  clearConversations,
} = conversationSlice.actions;

export default conversationSlice.reducer;