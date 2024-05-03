import  { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact: {
            reducer: (state, action) => {
            state.items += action.payload;
            },
            prepare: (value) => {
                return {
                    payload: {
                        id: crypto.randomUUID(),
                        items: value,
                    },
                };
            }
        },
        deleteContact: (state, action) => {
            state.items -= action.payload
        },
    },
});
console.log(slice);
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;