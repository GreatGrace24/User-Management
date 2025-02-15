"use client";

import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { AddUserModal } from "@/components/user-management/AddUserModal";
import { UserTable } from "@/components/user-management/UserTable";
import {Button} from "@/components/ui/Button";

export default function UserManagementPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <DefaultLayout>
      {/* Sub-header */}
      <div className="flex justify-between items-start border-b pb-4 mb-4">
        {/* Left Side */}
        <div>
          <h2 className="text-xl font-bold text-blue-500">Manage User</h2>
          <p className="text-sm text-gray-500">
           Administer and oversee user accounts and priviledges within the platform.
          </p>
        </div>

        {/* Right Side */}
        <button className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={openModal}>
  Add User
  <div className="ml-2 flex items-center justify-center h-7 w-7 bg-white text-red-500 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  </div>
</button>
{/* AddUserModal */}
<AddUserModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      {/* Third Sub-header */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-3 ">
        {/* Left: Label */}
        <div className="font-bold text-blue-600">User</div>

        {/* Right: Tools */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-sm text-gray-700"
            />
          </div>

          {/* Filter */}
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13v5a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-7.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            Filter
          </button>

          {/* Date Picker */}
          <div className="relative">
            <input
              type="date"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-3 h-5 w-5 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 10h10m-8 4h6m-6-8h6"
              />
            </svg>
          </div>

          {/* Delete */}
          <button className="flex items-center text-blue-500 hover:text-red-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0a1 1 0 011-1h6a1 1 0 011 1m-8 0h10"
              />
            </svg>
            Delete
          </button>

          {/* Export */}
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v4h6v-4m2 0h5a2 2 0 002-2V7a2 2 0 00-2-2h-5m-2 0H9a2 2 0 00-2 2v8a2 2 0 002 2h6m-6 0H4a2 2 0 01-2-2V7a2 2 0 012-2h5m6 0h5"
              />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* User Table */}
      <UserTable />

    
    </DefaultLayout>
  );
}
