'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';
const LazyProfile = React.lazy(() => import("./profile"));

export default function ProfilePage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <LazyProfile id={id} />
    </Suspense>
  );
}
