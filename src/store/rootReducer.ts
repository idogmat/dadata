import {combineReducers} from "@reduxjs/toolkit";
import {addressReducer} from "./addressReducer.ts";

export const reducers = {
    addressReducer
};

export const rootReducer = combineReducers(reducers);