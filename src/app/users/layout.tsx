'use client'
import { UserProvider } from "@/app/data";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
