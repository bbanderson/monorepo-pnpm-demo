/** 코딩 컨벤션(관습) : 보통 현재 프로젝트(sns) 전역적으로 타입스크립트에게 "나 이런 타입 갖고 있어. 너가 전역적으로 알아줘!"라고 말해주는 파일. */

import "styled-components";
import { DesignSystemTheme } from "design-system/lib/theme";

declare module "styled-components" {
  export interface DefaultTheme extends DesignSystemTheme {}
}
