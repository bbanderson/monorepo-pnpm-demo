import React from "react";

// * Slot : Props로 받아올 내용을 보여주기 위해 미리 뚫어놓은 구멍.
// * Layout으로 우리가 볼 화면의 큰 틀을 만들어 놓고, 실제 그 안의 내용은 Slot으로 받아서 보여준다.
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">{children}</div>
  );
};

export default layout;
