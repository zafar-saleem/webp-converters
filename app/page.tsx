"use client";

import React from "react";

export default function Home() {
  React.useEffect(() => {
    const fetcher = async () => {
      const request = await fetch("/api?message='GET Request'", {
        headers: {
          "content-type": "application/json"
        }
      });
      const json = await request.json();
      console.log(json);
    }

    const post = async () => {
      const request = await fetch("/api", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message: "POST request" }),
      });
      const json = await request.json();
      console.log(json);
    }
    fetcher();
    post();
  });
  
  return (
    <main>
      <div>
        Index
      </div>
    </main>
  )
}
