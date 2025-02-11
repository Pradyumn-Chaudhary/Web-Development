# Next.js Navigation Guide

## Overview
`next/navigation` is a set of client-side navigation utilities introduced in Next.js App Router to handle routing within React components.

## Installation
Next.js automatically includes `next/navigation`, so no additional installation is required. It is available for use in client components.

## Importing
To use navigation hooks, import them as follows:
```javascript
import { usePathname, useParams, useRouter, useSearchParams } from 'next/navigation';
```

## Hooks
### 1. `usePathname`
**Description:** Returns the current pathname of the URL.

**Usage:**
```javascript
'use client';
import { usePathname } from 'next/navigation';

export default function PathnameComponent() {
    const pathname = usePathname();
    return <p>Current Path: {pathname}</p>;
}
```

### 2. `useParams`
**Description:** Returns the dynamic route parameters as an object.

**Usage:**
```javascript
'use client';
import { useParams } from 'next/navigation';

export default function ParamsComponent() {
    const params = useParams();
    return <p>Params: {JSON.stringify(params)}</p>;
}
```
**Example Route:** `/blog/[id]` → `{ id: '123' }`

### 3. `useRouter`
**Description:** Provides programmatic navigation.

**Usage:**
```javascript
'use client';
import { useRouter } from 'next/navigation';

export default function RouterComponent() {
    const router = useRouter();
    
    return (
        <button onClick={() => router.push('/dashboard')}>Go to Dashboard</button>
    );
}
```

### 4. `useSearchParams`
**Description:** Returns the search parameters from the URL.

**Usage:**
```javascript
'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchParamsComponent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    
    return <p>Search Query: {query}</p>;
}
```
**Example URL:** `/search?query=nextjs` → Output: `Search Query: nextjs`

## Conclusion
These hooks provide a powerful way to handle client-side navigation in Next.js. Make sure to use them in client components as they rely on the browser environment.

