"use client";

import React from "react";

export default function Home() {
  React.useEffect(() => {
    const fetcher = async () => {
      const request = await fetch("/api/1");
      const json = await request.json();
      console.log(json);
    }
    
    fetcher();
  });

  return (
    <main>
      <div>
        Hello
      </div>
    </main>
  )
}
