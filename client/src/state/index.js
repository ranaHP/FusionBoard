import { Mode } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Mode: "dark",
    userId: '63701cc1f03239b7f700000e',
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.Mode = state.Mode === "light" ? "dark" : "light";
        }
    }
})

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer