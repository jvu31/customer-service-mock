import React, { useState } from "react";
import { customers } from "./data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export default function List({ setScreen }: { setScreen: (screen: string) => void }) {
  const [users, setUsers] = useState(customers);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedSort, setSelectedSort] = useState(1);

  // Range of users visible on a page
  const currentUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Sorts name of users alphabetically
  const sortNames = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a.name < b.name) {
        return -1 * selectedSort;
      }
      if (a.name > b.name) {
        return 1 * selectedSort;
      }
      return 0;
    });

    // Flips between ascending and descending sort each time user selects sort
    setSelectedSort(selectedSort * -1);
    setUsers(sortedUsers);
    setCurrentPage(1);
  };

  // Returns names from search
  const handleSearch = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = customers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    setUsers(filteredUsers);
    setCurrentPage(1);
  };

  // Opens the profile of the specified user
  const openProfile = (id: number) => {
    setScreen("profile");
  }

  const test = () => {};

  return (
    <div className="p-8 space-y-4 flex flex-col h-full">
      <h2>Users {"   >   "} List</h2>
      <h1>List</h1>
      {/* Search */}
      <div className="flex items-center border border-dark_gray rounded-full bg-white w-1/4">
        <AiOutlineSearch className="text-gray-400 ml-2 text-lg" />
        <input
          type="text"
          placeholder="Search Name..."
          className="flex-1 p-2 border-0 focus:outline-none rounded-full"
          onChange={handleSearch}
        />
      </div>
      {/* Table */}
      <div className="bg-white rounded-lg w-full p-4 flex flex-col flex-1 overflow-hidden">
        <div className="grid grid-cols-4 text-dark_gray border-b border-dark_blue px-2 py-2">
          {/* Labels */}
          <button
            className="text-left w-fit underline underline-offset-4 hover:text-dark_blue"
            onClick={() => sortNames()}
          >
            Name
          </button>
          <div>Phone Number</div>
          <div>Account Type</div>
          <div>Status</div>
        </div>
        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {currentUsers.map((user) => (
            <div
              key={user.id}
              className="border-b border-light_blue py-4 hover:bg-light_gray"
            >
              <div
                className="grid grid-cols-4 px-2 text-black"
                onClick={() => openProfile(user.id)}
              >
                <div className="font-bold flex items-center">{user.name}</div>
                <div className="flex items-center">{user.phone}</div>
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
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="justify-end text-dark_gray flex space-x-8 pt-2 items-center px-2">
          {/* Setting rows per page */}
          <div>
            <span>Rows per page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          {/* Navigating between pages */}
          <div>
            {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, users.length)} of{" "}
            {users.length}
          </div>
          <div className="space-x-2">
            <button
              className="text-dark_gray"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              <FaArrowCircleLeft className="" size={20} />
            </button>
            <button
              className="text-dark_gray"
              onClick={() =>
                setCurrentPage(
                  Math.min(
                    Math.ceil(users.length / itemsPerPage),
                    currentPage + 1
                  )
                )
              }
            >
              <FaArrowCircleRight className="" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
