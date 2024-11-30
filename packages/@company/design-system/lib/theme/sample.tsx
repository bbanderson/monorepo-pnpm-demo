import React from "react";
import { referenceToken } from "./colors";

export const Button = () => {
  return (
    <button
      style={{
        backgroundColor: referenceToken.primary.brand[600],
      }}
    >
      sample
    </button>
  );
};
