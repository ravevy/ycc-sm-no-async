import { createSlice } from "@reduxjs/toolkit";

export interface PlaylistTypes {
  playlist: {
    id: number;
    name: string;
    artists: string;
    album: string;
    genre: string;
    duration: number;
  }[];
  selectedItemId: number | null;
}

const initialState: PlaylistTypes = {
  playlist: [
    {
      id: 0,
      name: "Let It Happen",
      artists: "Tame Impala",
      album: "Currents",
      genre: "Psychedelic Pop",
      duration: 7.47,
    },
    {
      id: 1,
      name: "Ma Baker",
      artists: "Boney M.",
      album: "Love for Sale",
      genre: "Disco",
      duration: 4.31,
    },
    {
      id: 2,
      name: "Blast Off",
      artists: "Gesaffelstein",
      album: "Hyperion",
      genre: "Synthwave",
      duration: 3.35,
    },
    {
      id: 3,
      name: "Little Dark Age",
      artists: "MGMT",
      album: "Little Dark Age",
      genre: "Synth-pop",
      duration: 4.59,
    },
    {
      id: 4,
      name: "Borderline",
      artists: "Tame Impala",
      album: "The Slow Rush",
      genre: "Psychedelic Pop",
      duration: 4.34,
    },
    {
      id: 5,
      name: "Happy Nation",
      artists: "Ace of Base",
      album: "The Sign",
      genre: "Europop",
      duration: 4.15,
    },
    {
      id: 6,
      name: "All Night",
      artists: "Parov Stelar",
      album: "The Princess",
      genre: "Electronic",
      duration: 2.46,
    },
    {
      id: 7,
      name: "Smalltown Boy",
      artists: "Bronski Beat",
      album: "The Age of Consent",
      genre: "Synth-pop",
      duration: 5.02,
    },
    {
      id: 8,
      name: "Wondrous Place",
      artists: "The Last Shadow Puppets",
      album: "The Age Of The Understatement",
      genre: "Alternative",
      duration: 2.48,
    },
    {
      id: 9,
      name: "I Feel You",
      artists: "Depeche Mode",
      album: "Songs of Faith and Devotion",
      genre: "Alternative Rock",
      duration: 4.35,
    },
  ],
  selectedItemId: null,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
});

export const { selectItem } = playlistSlice.actions;
export default playlistSlice.reducer;
