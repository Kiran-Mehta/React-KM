// import { createStore } from "redux";  configureStore method of the @reduxjs/toolkit package, which replaces createStore.
import { configureStore } from '@reduxjs/toolkit'
import CountReducer from '../reducers/CountReducer';


const store = configureStore({
    reducer: {
      counter: CountReducer
    }
});

export default store;