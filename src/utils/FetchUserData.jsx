import axios from "axios";
import {
  setConversations,
  setLoading as setConversationsLoading,
} from "../redux/slices/conversationSlice";
import {
  setMessages,
  setLoading as setMessagesLoading,
} from "../redux/slices/messageSlice";

export const FetchUserConversations = async (
  token,
  dispatch,
  page = 0,
  size = 10,
) => {
  console.log("FetchUserConversations has been triggered");

  dispatch(setConversationsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/conversations?page=${page}&size=${size}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    dispatch(setConversations(response.data));
  } finally {
    dispatch(setConversationsLoading(false));
  }
};

export const FetchConversationMessages = async (
  token,
  conversationId,
  dispatch,
  page = 0,
  size = 10,
) => {
  console.log("FetchConversationMessages triggered");

  dispatch(setMessagesLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/conversations/${conversationId}/messages?page=${page}&size=${size}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    dispatch(
      setMessages({
        conversationId,
        response: response.data,
      }),
    );
  } finally {
    dispatch(setMessagesLoading(false));
  }
};
