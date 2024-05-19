import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
export interface CounterState {
  value: string | null
}

// Define the initial state using that type
const initialState: CounterState = {
  value: null
}


export const genres = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setgenres: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { setgenres } = genres.actions

export default genres.reducer