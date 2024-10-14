"use client"

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => console.log(json))
  })

  return (
    <>
      <div>Hello</div>
    </>
  );
}
