"use client";
import { Button } from "design-system/components/Button";
import { Input } from "design-system/components/Input";
import { useState } from "react";

// * 실제 브라우저 JS 번들에 포함시키게 된다.
// * 'use client'를 작성함으로써, 클라이언트 컴포넌트가 되는 구조!!! -> CSR
// ? CSR => 유저와의 상호작용 (이벤트 리스터 - onClick), react hook, styled-components 등등 사용할 때 씀.
export const LoginBody = () => {
  const [isLoginError, setIsLoginError] = useState(false);

  return (
    <form
      className="flex flex-col w-full max-w-[50%] m-auto gap-[16px]"
      onSubmit={(e) => {
        e.preventDefault();

        try {
          // ! API
          setIsLoginError(false);
          // =>  페이지 이동
        } catch (error) {
          setIsLoginError(true);
        }
      }}
    >
      <Input
        $type="Default"
        $label="아이디"
        placeholder="아이디를 입력해주세요"
        $hintText={isLoginError ? "아이디 및 비밀번호를 입력해주세요" : ""}
        $destructive={isLoginError}
        maxLength={10}
      />
      <Input
        $type="Default"
        $label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        $hintText={isLoginError ? "아이디 및 비밀번호를 입력해주세요" : ""}
        $destructive={isLoginError}
        type="password"
      />
      <Button hierarchy="Primary" size="2xl" destructive={false}>
        로그인
      </Button>
    </form>
  );
};
