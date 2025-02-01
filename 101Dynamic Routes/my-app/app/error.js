"use client"

import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Error({ statusCode }) {
//   const router = useRouter();

  useEffect(() => {
    console.error(`An error occurred: ${statusCode}`);
  }, [statusCode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">{statusCode || "Error"}</h1>
      <p className="text-lg mt-4">
        {statusCode === 404
          ? "Oops! The page you are looking for does not exist."
          : "Something went wrong. Please try again later."}
      </p>
      <button
        onClick={() => router.push("/")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
             <Link href="/">Go Back Home</Link>
      </button>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
