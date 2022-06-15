import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { addSyntheticTrailingComment } from "typescript";
import { Game } from "../../interfaces/Game";

interface GameState {
  games: Game[] | null;
  loading: boolean;
  singleGame: Game | null;
  error: any;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
  error: null,
};

//actions are processes that get data from backend
export const getGames = createAsyncThunk<Game[]>(
  "games/getGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createGame = createAsyncThunk<Object, Game>(
  "games/createGame",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "://localhost:8080/games/game",
        data
      );
      thunkAPI.dispatch(getGames());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers -> reduce to a specific state -> changes state

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.loading = false;
    });
    builder.addCase(getGames.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});


export default gameSlice.reducer;
export const {setGames} = gameSlice.actions;
