# Next.js Middleware Guide

Middleware in Next.js allows you to run code before a request is completed. It can modify the request or response, redirect users, or add custom logic. This guide covers everything you need to know about Next.js Middleware.

---

## Table of Contents

1. [What is Middleware?](#what-is-middleware)
2. [Setting Up Middleware](#setting-up-middleware)
3. [Middleware File Structure](#middleware-file-structure)
4. [Middleware API](#middleware-api)
5. [Common Use Cases](#common-use-cases)
6. [Examples](#examples)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)
9. [Resources](#resources)

---

## What is Middleware?

Middleware in Next.js is a function that runs **before a request is processed**. It can:

- Modify request or response headers.
- Redirect users to different pages.
- Add custom logic (e.g., authentication checks).
- Log requests for analytics or debugging.

Middleware runs on the **server-side**, making it ideal for handling sensitive logic or server-specific tasks.

---

## Setting Up Middleware

To use middleware in Next.js, create a `middleware.js` (or `middleware.ts`) file in the root of your project or inside the `src` folder.

### Steps:

1. Create a `middleware.js` or `middleware.ts` file in the root of your project.
2. Export a middleware function from this file.
3. Use the `NextResponse` and `NextRequest` objects to handle requests and responses.

Example:

```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Middleware executed!');
  return NextResponse.next();
}