import { Mode } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Mode: "dark",
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