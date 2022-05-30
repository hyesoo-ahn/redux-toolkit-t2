import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import themeReducer from "./theme";

// store에 모든 상태값을 저장
// 이제 reducer에 상태관리할 것들을 저장한다.
export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
