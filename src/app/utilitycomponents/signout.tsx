"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SignOutButton() {
  const router = useRouter();
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("user") === "true");
    }
  }, []);

  const handleSignOut = () => {
    localStorage.setItem("user", "false");
    setIsLoggedIn(false); 
    router.push("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleSignOut} className="button-delete text-center w-full mt-4">
      Sign out
    </button>
    ) : (
        <div></div>
    )}
    </>
  );
}