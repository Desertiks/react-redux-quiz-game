import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { Dictionary } from "../../types/Dictionary";

interface DictionaryState {
  words: Dictionary[];
}

const initialState: DictionaryState = {
  words: [
    {
      ua: "Кіт",
      eng: "Cat",
      id: 1,
    },
    {
      ua: "Собака",
      eng: "Dog",
      id: 2,
    },
    {
      ua: "Миша",
      eng: "Mouse",
      id: 3,
    },
    {
      ua: "Екран",
      eng: "Screen",
      id: 4,
    },
    {
      ua: "Сторінка",
      eng: "Page",
      id: 5,
    },
    {
      ua: "Слово",
      eng: "Word",
      id: 6,
    },
    {
      ua: "Ніч",
      eng: "Night",
      id: 7,
    },
    {
      ua: "День",
      eng: "Day",
      id: 8,
    },
    {
      ua: "Холод",
      eng: "Cold",
      id: 9,
    },
    {
      ua: "Зелений",
      eng: "Green",
      id: 10,
    },
    {
      ua: "Сонце",
      eng: "Sun",
      id: 11,
    },
    {
      ua: "Місяць",
      eng: "Moon",
      id: 12,
    },
    {
      ua: "Двигун",
      eng: "Engine",
      id: 13,
    },
    {
      ua: "Вода",
      eng: "Water",
      id: 14,
    },
    {
      ua: "Бумага",
      eng: "Papper",
      id: 15,
    },
  ],
};

let id = initialState.words.length + 1;

type PayloadDictionary = {
  ua: string;
  eng: string;
};

export const DictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addNewWord: (state, action: PayloadAction<PayloadDictionary>) => {
      state.words = [...state.words, { ...action.payload, id: id++ }];
    },
  },
});

export const { addNewWord } = DictionarySlice.actions;

export const selectWords = (state: RootState) => state.dictionary.words;

export default DictionarySlice.reducer;
