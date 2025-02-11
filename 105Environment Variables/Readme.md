# Environment Variables in Next.js

## Overview
Environment variables store sensitive information such as API keys, database credentials, and other configuration settings that should not be hardcoded in the codebase.

Next.js supports environment variables using `.env` files, which can be used both on the server and client-side.

---

## Setting Up Environment Variables
Create a `.env.local` file in the root of your Next.js project:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://user:password@localhost:5432/mydb
SECRET_KEY=mysecretkey
```

> `.env.local` is ignored by Git by default, ensuring sensitive information is not exposed.

---

## Accessing Environment Variables
### 1. Server-Side Environment Variables
These variables are only accessible on the server-side.

```tsx
export async function getServerSideProps() {
  const dbUrl = process.env.DATABASE_URL;
  console.log("Database URL:", dbUrl);

  return {
    props: {},
  };
}
```

### 2. Client-Side Environment Variables
For security reasons, only variables prefixed with `NEXT_PUBLIC_` are accessible on the client-side.

```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", apiUrl);
```

---

## Difference Between `.env` and `.env.local`
| File         | Purpose |
|-------------|---------|
| `.env`      | General environment variables that apply to all environments (local, development, production). |
| `.env.local` | Environment-specific variables for local development. It is ignored by Git to prevent exposure of sensitive data. |

> Use `.env` for shared environment configurations and `.env.local` for local-only settings.

---

## Environment Variable Load Order
Next.js loads environment variables in the following order, with each level overriding the previous one if the same variable exists:

1. **`.env.local`** - Loaded first (not included in version control, useful for local development).
2. **`.env.development`** - Overrides `.env` and applies only in development mode.
3. **`.env.production`** - Overrides `.env` and applies only in production mode.
4. **`.env`** - Global environment variables shared across all environments.
5. **System Environment Variables** - Variables defined in the hosting environment or OS override all `.env` files.

> **Priority:** `.env.local` > `.env.{environment}` > `.env` > System-defined variables.

---

## Best Practices
- **Use `.env.local` for local development**: Do not commit `.env.local` to version control.
- **Use `.env.production` for production settings**: Create a separate file for production configurations.
- **Avoid hardcoding secrets in code**: Always use environment variables for sensitive data.
- **Prefix client-side variables with `NEXT_PUBLIC_`**: Prevents accidental exposure of private variables to the client.
- **Use a deployment service’s environment settings**: Services like Vercel and Netlify provide ways to set environment variables securely.

---

## Example `.env` Files
### `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=postgres://user:password@localhost:5432/mydb
SECRET_KEY=mydevsecret
```

### `.env.production`
```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://user:password@prod-db:5432/mydb
SECRET_KEY=myprodsecret
```

---

## Conclusion
Environment variables help keep sensitive information secure and allow easy configuration for different environments. Always follow best practices to manage and secure them properly.

