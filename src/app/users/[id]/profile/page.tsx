'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';
//import { UserProvider } from "../../../components/data";
const LazyProfile = React.lazy(() => import("../../../../components/profile"));

export default function ProfilePage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      
        <LazyProfile id={id} />
      
    </Suspense>
  );
}
