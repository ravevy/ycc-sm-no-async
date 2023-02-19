import { configureStore } from "@reduxjs/toolkit";

import playlistReducer from "./Playlist/PlaylistSlice";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
