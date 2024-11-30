import React from "react";
import styled, { css } from "styled-components";

// pnpm dev
type Props = {
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  hierarchy:
    | "Primary"
    | "Secondary-color"
    | "Secondary-gray"
    | "Tertiary-color"
    | "Tertiary-gray"
    | "Link-color"
    | "Link-gray";
  destructive: boolean;
  icon?: "Leading" | "Trailing" | "Dot" | "Only";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

// VSCode extension
// * Template Literal Interpolation `${}`
const StyledButton = styled.button<Props>(
  ({ theme, size }) => css`
    ${(() => {
      switch (size) {
        case "2xl":
          return css`
            ${theme.fontSize["ds-Text-lg-Semibold"][1]}
            font-size: ${theme.fontSize["ds-Text-lg-Semibold"][0]};
            padding: 16px 28px;
          `;
        case "xl":
          return css`
            ${theme.fontSize["ds-Text-md-Semibold"][1]}
            font-size: ${theme.fontSize["ds-Text-md-Semibold"][0]};
            padding: 12px 20px;
          `;
        case "lg":
          return css`
            ${theme.fontSize["ds-Text-md-Semibold"][1]}
            font-size: ${theme.fontSize["ds-Text-md-Semibold"][0]};
            padding: 10px 18px;
          `;
        case "md":
          return css`
            ${theme.fontSize["ds-Text-sm-Semibold"][1]}
            font-size: ${theme.fontSize["ds-Text-sm-Semibold"][0]};
            padding: 10px 16px;
          `;
        case "sm":
          return css`
            ${theme.fontSize["ds-Text-sm-Semibold"][1]}
            font-size: ${theme.fontSize["ds-Text-sm-Semibold"][0]};
            padding: 8px 14px;
          `;
        default:
          return "";
      }
    })()}

    color: ${theme.colors.ref.base.white};
    border-radius: 8px;
    background-color: ${theme.colors.comp.button.primary.background};

    /* 사이즈에 따른 분기 로직. */

    /* hover */
    /* // ? & : 지금 작성중인 styled-components 그 자체. */
    &:hover {
      background-color: ${theme.colors.comp.button.primary.hover};
    }

    /* focus */
    &:focus {
      outline-color: ${theme.colors.comp.button.primary.focus};
      background-color: ${theme.colors.comp.button.primary.background};
    }

    /* active/pressed (누르고 있는 상태) */
    &:active {
      background-color: ${theme.colors.comp.button.primary.active};
    }

    /* disabled */
    &:disabled {
      background-color: ${theme.colors.comp.button.primary.disabled};
      /* // ? disabled 상태일 때 추가해주면, UX(사용자경험) 관점에서 좋다. */
      cursor: not-allowed;
    }
  `
);
