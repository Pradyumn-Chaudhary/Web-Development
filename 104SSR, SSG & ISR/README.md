# SSR, SSG, and ISR in Next.js

## Overview
Next.js offers multiple rendering strategies to optimize performance and user experience:
- **SSR (Server-Side Rendering)**
- **SSG (Static Site Generation)**
- **ISR (Incremental Static Regeneration)**

Each method is useful in different scenarios, depending on data freshness, build times, and user needs.

---

## 1. Server-Side Rendering (SSR)
**Definition:** SSR generates the page dynamically on each request by executing server-side logic before sending the final HTML to the client.

**Usage:** Use `getServerSideProps` in Next.js.

```tsx
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
  };
}
```

**Pros:**
- Data is always fresh.
- SEO-friendly (pre-rendered HTML).

**Cons:**
- Slower performance due to server requests on each request.
- Increased server load.

---

## 2. Static Site Generation (SSG)
**Definition:** SSG pre-builds pages at build time and serves them as static files.

**Usage:** Use `getStaticProps` in Next.js.

```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // Optional for ISR
  };
}
```

**Pros:**
- Extremely fast as pages are static.
- Great for SEO.
- No backend load after deployment.

**Cons:**
- Content is only updated at build time unless ISR is used.
- Long build times for large datasets.

---

## 3. Incremental Static Regeneration (ISR)
**Definition:** ISR allows static pages to be regenerated in the background after deployment, without rebuilding the entire site.

**Usage:** Add `revalidate` to `getStaticProps`.

```tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // Page regenerates every 60 seconds
  };
}
```

**Pros:**
- Combines benefits of SSR and SSG.
- Pages stay fresh without frequent full rebuilds.
- Better performance than SSR.

**Cons:**
- First visitor may see stale data before revalidation occurs.
- Requires proper cache handling.

---

## When to Use What?
| Use Case                     | Best Choice  |
|------------------------------|-------------|
| Frequently updating data      | SSR         |
| Mostly static content        | SSG         |
| Static content with updates  | ISR         |

---

## Conclusion
Choosing between SSR, SSG, and ISR depends on your application's needs. SSR is great for dynamic data, SSG is best for static content, and ISR offers a balance between the two.

