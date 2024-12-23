import { createSlice, nanoid } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
}

const initialState: { Users: User[] } = {
    Users: []
}
const Slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.Users.push(data);
        }
    }
});

export const {addUsers} = Slice.actions;
export default Slice.reducer;