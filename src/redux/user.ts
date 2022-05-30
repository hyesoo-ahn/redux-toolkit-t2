import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;
// login 이라는 함수를 action 기능이 작동하도록 다른데서 쓸거라는 뜻

export default userSlice.reducer;
// createSlice => 기존의 createReducer와 createAction이 하던 일을 같이 해준다.
// 사용할 리듀서의 이름을 정하고 그걸 createSlice로 지정해준다.
// name은 리듀서 이름 뭘로 할지 정하는거고
// initialState는 들어갈 데이터의 초기값 잡아주는 용도.
// reducers에서 이제 상태가 변하면 어떻게 실행될지 정하는 부분이다.
// 우리는 로그인 버튼을 눌렀을때 이름, 나이, 이메일이 변하게 하고 싶으니
// 로그인 함수를 만들어준다. state는 우리가 잡아놓은 초기값의 value를 가져오는 역할을 하고
// actions안에 payload랑 type 이라는 친구가 있는데 우리가 바꾸고 싶은 데이터를 원하는 곳에다가 넘겨주는 역할을 한다.
