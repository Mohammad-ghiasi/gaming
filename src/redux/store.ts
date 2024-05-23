import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './slices/firstSclice'
// ...
import counterReducer from './slices/firstSclice';
import platforemSlice from './slices/platforemSlice';
import searchSlice from './slices/searchSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    platform: platforemSlice,
    search: searchSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// const count = useSelector((state: {counter: {value: number}}) => state.counter.value);
// const dispatch = useDispatch()