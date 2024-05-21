import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
export interface CounterState {
  value: number | null
}

// Define the initial state using that type
const initialState: CounterState = {
  value: null
}


export const platform = createSlice({
  name: 'platform',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setplatform: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { setplatform } = platform.actions

export default platform.reducer