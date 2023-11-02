import { createSelector } from "@reduxjs/toolkit";

const globalState = (state)=> state

export const userSelector = createSelector(globalState, ({user})=>user.data)

export const userIdSelector = createSelector(globalState, ({user})=>user.data.id)