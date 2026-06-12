import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: window.innerWidth,
  deviceType: getDeviceType(window.innerWidth),
};

function getDeviceType(width) {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

const deviceSlice = createSlice({
  name: "device",

  initialState,

  reducers: {
    setDevice: (state, action) => {
      state.width = action.payload.width;
      state.deviceType = getDeviceType(
        action.payload.width
      );
    },
  },
});

export const { setDevice } = deviceSlice.actions;

export default deviceSlice.reducer;