"use client";

import React, { useState, useContext, useEffect, Suspense } from "react";
import { Customer, UserContext } from "@/app/data";
import Link from "next/link";

const LazyGeneralInfo = React.lazy(
  () => import("./infocomponents/generalinfo")
);
const LazyVehicleInfo = React.lazy(
  () => import("./infocomponents/vehicleinfo")
);
const LazyPopup = React.lazy(() => import("@/app/utilitycomponents/popup"));

import Popup from "@/app/utilitycomponents/popup";
import { useRouter } from "next/navigation";

export default function Profile({ id }: { id: number }) {
  const { user: users, setUser: setUsers } = useContext(UserContext)!;
  const [user, setUser] = useState<Customer | undefined>(() =>
    users.find((u) => u.id === id)
  );
  const [showPopup, setShowPopup] = useState(false);
  const message = "Are you sure you want to delete this account?";
  const router = useRouter();

  useEffect(() => {
    const foundUser = users.find((u) => u.id === id);
    setUser(foundUser);
  }, [users, id]);

  const deleteUser = () => {
    setUsers(users.filter((u) => u.id !== id));
    router.push("/users");
  };

  // Updates the user
  const updateGeneralUser = (
    updatedDetails: Partial<
      Pick<Customer, "name" | "email" | "phone" | "membership">
    >
  ) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              ...updatedDetails,
              membership: { ...user.membership, ...updatedDetails.membership },
            }
          : user
      )
    );
  };

  // Updates the user
  const updateVehicleUser = (
    updatedDetails: Partial<Pick<Customer, "subscriptions" | "vehicles">>
  ) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              ...updatedDetails,
            }
          : user
      )
    );
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="page overflow-y-auto">
      <div className="flex">
        <h2>
            <Link href="/users" className="hover:underline hover:text-black">Users </Link>

           {">"} {user.name}
        </h2>
        <button
          className="ml-auto bg-red-700 hover:bg-red-500 text-white font-bold px-4 py-1 rounded-lg"
          onClick={() => setShowPopup(true)}
        >
          Delete Account
        </button>
      </div>
      {/* General Profile Info */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGeneralInfo user={user} updateUser={updateGeneralUser} />
        {/* Vehicles */}
        <LazyVehicleInfo user={user} updateVehicles={updateVehicleUser} />
      </Suspense>
      {showPopup && (
        <LazyPopup
          onConfirm={deleteUser}
          onCancel={() => setShowPopup(false)}
          header="Delete Account"
          message={message}
        />
      )}
    </div>
  );
}
