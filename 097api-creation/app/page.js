"use client";  // This tells Next.js to treat this component as a Client Component

import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    const data = { name: "Jaguar", Object:"Car" };  // Replace with your actual data

    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Indicating JSON content
      },
      body: JSON.stringify(data),  // Send the data as JSON
    });

    let res = await a.json();  // Assuming the API response is in JSON format
    console.log(res);  // Optional: log the response
  };

  return (
    <div>
      <h1>NextJS API Route</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
