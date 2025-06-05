import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { Customer } from "@/app/data";

interface Props {
  user: Customer;
  updateUser: (
    updatedDetails: Partial<
      Pick<Customer, "name" | "email" | "phone" | "membership">
    >
  ) => void;
}

export default function GeneralInfo({ user, updateUser }: Props) {
  const [pendingChanges, setPendingChanges] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [newName, setName] = useState(user.name);
  const [newEmail, setEmail] = useState(user.email);
  const [newPhone, setPhone] = useState(user.phone);
  const [newMembership, setMembership] = useState(user.membership.type);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setMembership(user.membership.type);
      setPendingChanges(false);
    }
  }, [user, editUser]);

  // Handles saving the changes
  const saveChanges = () => {
    updateUser({
      name: newName,
      email: newEmail,
      phone: newPhone,
      membership: { ...user.membership, type: newMembership },
    });
    setEditUser(false);
    setPendingChanges(false);
  };

  return (
    <div className="space-y-2">
      <div className="flex w-[300px]">
        <h1>{user.name}</h1>
        <button className="ml-auto">
          <FaEdit
            className="hover:text-dark_gray items-center"
            size={30}
            onClick={() => setEditUser(!editUser)}
          />
        </button>
      </div>
      <div className="flex space-x-16">
        <div>
          <Image
            src={user.profileImage}
            alt="Profile Picture"
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div>{" "}
        {/* Non-Editing Mode */}
        {editUser !== true && (
          <div className="space-y-2">
            <h2>
              {user.email} | {user.phone}
            </h2>
            <div
              className={`rounded-md w-fit p-1 ${
                user.membership.type === "Silver"
                  ? "text-white bg-gradient-to-r from-gray-400 to-gray-600"
                  : user.membership.type === "Gold"
                  ? "text-white bg-gradient-to-r from-yellow-400 to-yellow-600"
                  : user.membership.type === "Platinum"
                  ? "text-white bg-gradient-to-r from-red-500 to-red-700"
                  : user.membership.type === "Elite"
                  ? "text-white bg-gradient-to-r from-blue-500 to-blue-700"
                  : ""
              }`}
            >
              {user.membership.type}
            </div>
            <div
              className={`flex items-center ${
                user.status === "active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.status.toUpperCase()}
            </div>
          </div>
        )}
        {/* Editing Mode */}
        {editUser === true && (
          <div className="space-y-2 flex flex-col">
            <div className="flex flex-col w-full space-y-4">
              {(["name", "email", "phone"] as const).map((field) => (
                <div key={field} className="relative w-full flex textbox">
                  <label
                    className="header"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    value={
                      field === "name"
                        ? newName
                        : field === "email"
                        ? newEmail
                        : newPhone
                    }
                    placeholder=""
                    className="area"
                    onChange={(e) => {
                      if (field === "name") setName(e.target.value)
                      else if (field === "email") setEmail(e.target.value)
                      else if (field === "phone") setPhone(e.target.value)
                      setPendingChanges(true);
                    }}
                  />
                </div>
              ))}
            </div>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark_blue text-sm" // Changed flex-1 to w-full for consistency
              defaultValue={user.membership.type}
              onChange={(e) => {
                setMembership(e.target.value);
                setPendingChanges(true);
              }}
            >
              <option value="Basic">Basic</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Elite">Elite</option>
            </select>
            <button
              className={`
                items-center bg-dark_blue hover:bg-light_blue rounded-full p-2 text-white text-left w-fit
                transition-all duration-300 ease-in-out transform
                ${
                  pendingChanges
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              `}
              onClick={() => saveChanges()}
              disabled={!pendingChanges}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
