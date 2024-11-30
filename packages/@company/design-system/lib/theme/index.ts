import { componentToken, referenceToken, systemToken } from "./colors";
import { typography } from "./typography";

/** styled-components, tailwindcss에서 import하여 사용. */
export const theme = {
  colors: {
    ref: referenceToken,
    sys: systemToken,
    comp: componentToken,
  },
  fontSize: typography,
};

// any -> 진짜 타입을 알려주는 고마운 친구.
export type DesignSystemTheme = typeof theme;

// styled-components는 우리가 만든 디자인시스템을 아직 몰라요. -> 디자인시스템을 "주입" 해줘야 돼요.
// * 기존 라이브러리나 모듈/파일을 내 입맛에 맞게 확장하는 문법. -> 타입스크립트한테 알려주는거에요.

// * 원래 styled-components는 기본적으로 DefaultTheme 라는 그들만의 "테마" 타입을 가지고 있습니다.
// * 그런데, 여기 위에다가 우리의 디자인시스템을 감싸줌으로써 실제 그 라이브러리는 더 풍부해지는 겁니다.
declare module "styled-components" {
  export interface DefaultTheme extends DesignSystemTheme {}
}
