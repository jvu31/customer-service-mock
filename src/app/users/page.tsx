"use client";
import React from "react";
const LazyList = React.lazy(() => import("./list"));

export default function Page() {
  return <LazyList />;
}
