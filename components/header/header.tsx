"use client";

import React from "react";
import * as Styles from "./header.styles";

export const Header = ({ children }: React.PropsWithChildren) => {
  return (
    <Styles.Header>{children}</Styles.Header>
  )
}
