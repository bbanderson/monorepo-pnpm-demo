import React from "react";
import styled, { css } from "styled-components";

// ! 디자인 시스템 또는 UI 컴포넌트는 "서비스/비즈니스" 로직을 담아서는 안됩니다. => 어디서든 [재사용] 가능해야 하기 때문! => 가능성을 열어둬라!!!
type StyledProps = {
  $type:
    | "Default"
    | "Leading-dropdown"
    | "Trailing-dropDown"
    | "Leading-text"
    | "Input-field"
    | "Payment-input";
  $leadingIcon?: React.ReactNode;
  $trailingIcon?: React.ReactNode;
  // ? label이 피그마에서는 True/False이긴 한데, True면 그래서 뭔 내용인데? 가 필요해요 => string Optional
  // (디자인과 개발의 차이)
  $label?: string;
  $hintText?: string;
  $destructive?: boolean;
};

type Props = StyledProps & JSX.IntrinsicElements["input"]; // ? 우리가 정의한 props와 input 기본 props를 함께 받음.

export const Input = ({
  $type,
  $destructive,
  $hintText,
  $label,
  $leadingIcon,
  $trailingIcon,
  ...inputProps
}: Props) => {
  return (
    <Wrapper $destructive={$destructive}>
      {$label && <span className="label">{$label}</span>}
      <div className="input-container">
        {$leadingIcon && <div className="leading-icon">{$leadingIcon}</div>}
        <input {...inputProps} placeholder={inputProps?.placeholder ?? ""} />
        {/* // * Conditional Rendering (조건부 렌더링) */}
        {/* // * Slot : props 등 데이터가 주입될 자리를 만들어 놓는 것. */}
        {$trailingIcon && <div className="trailing-icon">{$trailingIcon}</div>}
      </div>
      {/* // ! JavaScript falsy 값을 잘 활용해보자!! */}
      {/* // ? falsy : false 스러운 값들  => null, undefined, "" */}
      {/* // * 여기서의 활용이란, 진짜 null 또는 undefined인 경우를 분기하자. */}
      {/* 
       // ? $hintText를 아예 위에서 안넘겨주면(undefined) -> 렌더링이 안됨.
       // ? $hintText에 빈 문자열("")을 넘겨주면 -> 렌더링이 됨. -> 우리가 준비해놓은 .hint-text의 margin 등의 스타일이 적용됨.
       // ? -> <Layout Shift> (배치의 변환 - 맨 처음 렌더링 된 상태에서 갑자기 모종의 이유로 px 등 깜빡거리거나 이동해버리는 현상) 방지.
       // * 프론트엔드 -> UI & 클라이언트 상태관리 전문 개발자. -> UI & UX
       // ! [프론트엔드 면접 꿀팁 용어] UX(사용자 경험)을 해치지 않기 위해서 UI를 평소에 잘 개발해야 된다.
      */}
      {$hintText !== undefined && ( // ? $hintText props를 넘겨 주었으면! -> 빈 문자열이라도 넘겨주면, Layout Shift 방지.
        <div className="hint-text">{$hintText}</div>
      )}
      {/* // TODO : Help Text Prop 설계 및 렌더링.
       <span>Help Text</span> */}
    </Wrapper>
  );
};

// * styled-components 활용법 2가지
/**
 *
 * 1) 각각의 분기가 너무 많아져서 분리를 더 하고 싶으면.
 * const Parent = styled.div``;
 * const Child = styled.div``;
 *
 *
 *      <Parent><Child /></Parent>
 *
 * 2) 꼭 그게 아니라면.
 *  const Parent = styled.div`
 *    .child1 {
 *        color: #111;  
 *    }
 * 
 *    input {
 *      color: q'1231'
 *    }
 * `;
 * 
 *      <Parent>
 *          <div className='child1' />
 *          <input />
 *      </Parent>

 */

// ? 크게 머리/가슴/배를 한번에 아우를 수 있는 큰 컨테이너.
// ? Partial => 타입스크립트 Utility 타입 => 모든 속성을 optional로 바꿔준다!! => 에러를 보통 없애줌. ("왜 xxx 안넘겨줌? 이런 에러 없애줌.")
const Wrapper = styled.div<Partial<StyledProps>>(
  ({ theme, $destructive }) => css`
    display: flex;
    flex-direction: column;

    .label {
      font-size: ${theme.fontSize["ds-Text-sm-Medium"][0]};
      ${theme.fontSize["ds-Text-sm-Medium"][1]};
      color: ${theme.colors.comp.input.labelTextColor};
      margin-bottom: 6px;
    }

    .input-container {
      display: flex;
      align-items: center;
      border: 1px solid;
      border-radius: 8px;
      padding: 10px 14px;
      background-color: ${theme.colors.ref.base.white};

      .leading-icon {
        margin-right: 8px;
      }

      input {
        all: unset; /* // ? input 기본 스타일 제거 - 보통 reset.css, normalize.css, next.js에서는 루트 디렉토리의 global.css 사용. */

        width: 100%;
        color: ${theme.colors.comp.input.textColor.default};

        &::placeholder {
          color: ${theme.colors.comp.input.textColor.placeholder};
        }

        &:not(:placeholder-shown) {
          color: ${theme.colors.comp.input.textColor.filled};
        }
      }

      .trailing-icon {
        margin-left: 0px;
      }

      /* 값이 없으면 */
      &:has(input:placeholder-shown) {
        border-color: ${theme.colors.comp.input.borderColor.placeholder};
        ${$destructive &&
        css`
          border-color: ${theme.colors.comp.input.borderColor.destructive};
        `};
      }

      /* 값이 있으면 */
      &:has(input:not(:placeholder-shown)) {
        border-color: ${theme.colors.comp.input.borderColor.focus};
      }

      &:has(input:focus) {
        ${$destructive
          ? css`
              border-color: ${theme.colors.comp.input.borderColor.destructive};
              box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05),
                0px 0px 0px 4px #fee4e2;
            `
          : css`
              border-color: ${theme.colors.comp.input.borderColor.focus};
              box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05),
                0px 0px 0px 4px #f4ebff;
            `};
      }

      &:has(input:disabled) {
        cursor: not-allowed;
        border-color: ${theme.colors.comp.input.borderColor.disabled};
        background-color: ${theme.colors.comp.input.backgroundColor.disabled};

        & input:disabled {
          color: ${theme.colors.comp.input.textColor.disabled};
        }
      }

      background-color: ${theme.colors.comp.input.backgroundColor.default};
    }

    .hint-text {
      margin-top: 6px;
      height: 20px;

      ${theme.fontSize["ds-Text-sm-Regular"]};

      color: ${$destructive
        ? theme.colors.comp.input.textColor.destructive
        : theme.colors.comp.input.hintTextColor};
    }
  `
);

/* // * 굳이 아래처럼 길게 하지 않아도 됩니다. */
/* font-size: ${theme.fontSize["ds-Text-sm-Medium"][0]} */
/* ${theme.fontSize["ds-Text-sm-Medium"][1]} */

// ${theme.fontSize["ds-Text-sm-Regular"]};
/* export const Input2 = () => {
  return (
    <div>
      <svg />
      <input />
      <svg />
      <span />
    </div>
  );
};
 */
