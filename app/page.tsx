"use client";

import React from "react";
import { labels } from "./converter-labels";
import * as Styles from "./page.styles";

export default function Home() {
  return (
    <Styles.Main>
      <Styles.Grid>
      {
        labels?.map((item) => (
          <Styles.Lynk key={item.label} href={item.path} color={item.color}>
            {/* <Image src={item.icon} width={128} height={128} alt="jpg to png image converter" /> */}
            {item.label}
          </Styles.Lynk>
        ))
      }
      </Styles.Grid>
    </Styles.Main>
  )
}
