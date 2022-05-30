import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: any) => state.user.value);
  const themeColor = useSelector((state: any) => state.theme.value);
  // useSelector => 리듀서에 접근할 수 있다.
  // 리듀서에 있는 state에 접근할건데, 어느 state냐 하면 아까 user라고 이름 지어준 리듀서에 있는 state에 접근할거란 소리
  // 그리고 user 리듀서에 우리가 초기값을 어떻게 설정했는지 보면 value라고 해놨다. 그래서 user에 있는 value 가져올거란 뜻이다.
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p> Name : {user.name}</p>
      <p> Age : {user.age}</p>
      <p> Email : {user.email}</p>
    </div>
  );
};

export default Profile;
