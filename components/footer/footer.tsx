"use client";

import React from "react";
import * as Styles from "./footer.styles";

export const Footer = ({ children }: React.PropsWithChildren) => {
  return (
    <Styles.Footer>{children}</Styles.Footer>
  )
}
