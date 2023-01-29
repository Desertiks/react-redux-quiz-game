import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Log } from "../../types/Log";

interface LogState {
  logs: Log[];
  count: number;
}

const initialState: LogState = {
  logs: [],
  count: 0,
};

type PayloadLog = {
  eng: string;
  ua: string;
  wasCorrect: boolean;
};

let id = 0;

export const LogsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addNewLog: (state, action: PayloadAction<PayloadLog>) => {
      state.logs = [
        ...state.logs,
        { ...action.payload, countOfGame: state.count, id: id++ },
      ];
    },
    increment: (state) => {
        state.count = state.count + 1;
    }
  },
});

export const { addNewLog, increment } = LogsSlice.actions;

export const selectLogs = (state: RootState) => state.logs.logs;

export default LogsSlice.reducer;
