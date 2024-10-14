"use client"

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch("http://localhost:8000/test")
      .then(response => response.json())
      .then(json => console.log(json))
  })

  return (
    <>
      <div>Hello</div>
    </>
  );
}
