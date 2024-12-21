import React from "react";
import { LoginBody } from "./body";

// * SSR vs CSR
// Server Action => 클라이언트에게 우리만의 로직을 보여주지 않는다. 왜 ? 서버에서만 하는 행위로 "제한"했기 때문.
// 'use server'라는 지시자를 통해서 Client Component에서도 실행을 하든가
// 아니면, 애초에 Server Component에서만 실행을 시키든가.
// * Next.js의 middleware와 연동했을 때 좋다!

// ? page.tsx는 Server Component로 만들고, children으로 유저와의 상호작용이 필요한 Client Component를 만들어서 Slot으로 주입한다.
// ? Next.js는 기본적으로 Server Component다. (SSR) => 해당 파일 "맨 위"에 'use client'를 붙이는 순간, Client Component로 변한다.
// ? => JS 함수 로직 및 번들이 클라이언트에게 넘어간다 & SEO가 안 좋아짐.
// ? 타협하고 싶어!!!!!

// * 관심사를 분리하라!
// ! page.tsx에는 SEO 및 보안(쿠키/미들웨어)/성능/속도가 필요한 로직을 작성하고, 유저와의 상호작용/styled-components/hooks는 body.tsx에 작성한다.
const LoginPage = () => {
  // * 서버 로직.
  return <LoginBody />;
};

export default LoginPage;
