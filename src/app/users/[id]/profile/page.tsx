"use client";
import { useParams } from "next/navigation";
import React from "react";
const LazyProfile = React.lazy(() => import("./profile"));

export default function ProfilePage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  return <LazyProfile id={id} />;
}
