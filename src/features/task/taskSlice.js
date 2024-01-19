import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setFolders: (state, { payload }) => {
      state.folders = payload;
    },
    addFolder:(state,{payload}) => {
        state.folders = [...state.folders,payload];
    },
    updateFolder: (state, { payload }) => {
      const index = state.folders.findIndex(
        (folder) => folder._id.toString() === payload._id.toString()
      );
      if (index !== -1) {
        state.folders = state.folders.map((folder, i) =>
          i === index ? { ...folder, ...payload } : folder
        );
      }
    },
  },
});

export const { setFolders, addFolder, updateFolder } =
  taskSlice.actions;
export default taskSlice.reducer;
