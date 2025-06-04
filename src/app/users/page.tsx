

'use client';
import { Suspense } from 'react';
import { UserProvider } from "../data";
import React from 'react';
const LazyList = React.lazy(() => import("./list"));

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProvider>
        <LazyList />
      </UserProvider>
    </Suspense>
  );
}
