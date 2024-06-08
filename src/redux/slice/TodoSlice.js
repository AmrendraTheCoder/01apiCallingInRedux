import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.isLoading = true
            state.data = null
        }),
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        }),
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.isError = true
            console.log("Error", action.payload);
        })
    }
})

export default todoSlice.reducer