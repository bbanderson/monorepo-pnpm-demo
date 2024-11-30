"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { theme } from "@/lib/theme"; // !

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const content = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // 브라우저에서 렌더링이 된 경우.
  if (typeof window !== "undefined") return content;

  // 아직 브라우저에서 렌더링이 안 된 경우.
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {content}
    </StyleSheetManager>
  );
}
