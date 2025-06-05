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
const LazyHistoryInfo = React.lazy(
  () => import("./infocomponents/historyinfo")
);
const LazyCardInfo = React.lazy(() => import("./infocomponents/cardinfo"));
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

  const [activePage, setPage] = useState("general");

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

  // Updates the user's vehicle information
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

  // Updates the user's card information
  const updateCardUser = (
    updatedDetails: Partial<Pick<Customer, "card">>
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
          <Link href="/users" className="hover:underline hover:text-black">
            Users{" "}
          </Link>
          <span className="mx-3">{">"}</span> {user.name}
        </h2>
        <button
          className="ml-auto button-delete"
          onClick={() => setShowPopup(true)}
        >
          Delete Account
        </button>
      </div>
      {/* Header Tab */}
      <div className="flex space-x-6">
        <button
          onClick={() => setPage("general")}
          className={`py-2 px-1 text-xl transition-colors duration-200 ease-in-out 
            ${
              activePage === "general"
                ? "text-dark_blue border-b-2 border-dark_blue font-semibold"
                : "text-dark_gray hover:text-dark_blue"
            }`}
        >
          General Info
        </button>
        <button
          onClick={() => setPage("payments")}
          className={`py-2 px-1 text-xl transition-colors duration-200 ease-in-out 
            ${
              activePage === "payments"
                ? "text-dark_blue border-b-2 border-dark_blue font-semibold"
                : "text-dark_gray hover:text-dark_blue"
            }`}
        >
          Payments
        </button>
        <button
          onClick={() => setPage("card")}
          className={`py-2 px-1 text-xl transition-colors duration-200 ease-in-out 
            ${
              activePage === "card"
                ? "text-dark_blue border-b-2 border-dark_blue font-semibold"
                : "text-dark_gray hover:text-dark_blue"
            }`}
        >
          Card
        </button>
      </div>
      {activePage === "general" && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyGeneralInfo user={user} updateUser={updateGeneralUser} />
          <LazyVehicleInfo user={user} updateVehicles={updateVehicleUser} />
        </Suspense>
      )}
      {activePage === "payments" && <LazyHistoryInfo user={user} />}
      {activePage === "card" && <LazyCardInfo user={user} updateCard={updateCardUser} />}

      {showPopup && (
        <Popup
          onConfirm={deleteUser}
          onCancel={() => setShowPopup(false)}
          header="Delete Account"
          message={message}
        />
      )}
    </div>
  );
}
