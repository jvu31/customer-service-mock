"use client";

import React, { useState, Suspense, use } from "react";
import Image from "next/image";
import "./globals.css";
import { FaAlignJustify, FaQuestionCircle } from "react-icons/fa";
const LazyList = React.lazy(() => import("../components/list"));

export default function Home() {
  const [screen, setScreen] = useState("list");
  const [profile, setProfile] = useState(-1);


  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white w-full shadow-md p-4 flex z-50">
        <Image src="/amp.png" alt="AMP Logo" width={200} height={50} />
        {/* Profile Icon */}
        <button className="ml-auto">
          <Image
            src="/csr.jpg"
            alt="AMP Logo"
            width={75}
            height={75}
            className="rounded-full hover:border-2 hover:border-dark_blue"
          />
        </button>
      </div>
      {/* Content Area */}
      <div className="flex flex-1 pt-[110px] overflow-hidden">
        {/* Sidebar */}
        <div className="bg-white h-full p-4 w-56 space-y-4 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <button
              className="text-dark_gray flex items-center space-x-2 p-2 hover:bg-gray-100 rounded w-full"
              onClick={() => setScreen("list")}
            >
              <FaAlignJustify className="text-dark_gray" size={20} />
              <div>User List</div>
            </button>
            <button
              className="text-dark_gray flex items-center space-x-2 p-2 hover:bg-gray-100 rounded w-full"
              onClick={() => setScreen("faq")}
            >
              <FaQuestionCircle className="text-dark_gray" size={20} />
              <div>FAQ</div>
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 h-full overflow-y-auto">
          <Suspense fallback={<div>Loading...</div>}>
            {screen === "list" && <LazyList setScreen={setScreen} />}
            {screen === "faq" && (
              <div className="p-8">
                {/* Placeholder for FAQ content */}
                <h1>FAQ Page</h1>
                Frequently Asked Questions will go here.
              </div>
            )}
            {screen === "profile"}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
