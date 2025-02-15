import React, { useState } from "react";
import { Table } from "@/components/ui/Table";
import { Pagination } from "@/components/ui/Pagination";

export const UserTable = () => {
  const headers = ["", "Name", "Email", "Status", "Acct Creation Date", "Action"];

  const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", status: "Active", createdAt: "2022-05-31" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", status: "Inactive", createdAt: "2022-05-31" },
    { id: 3, name: "Emily Davis", email: "emilydavis@example.com", status: "Suspended", createdAt: "2022-05-31" },
    { id: 4, name: "Michael Brown", email: "michaelbrown@example.com", status: "Active", createdAt: "2022-05-31" },
    { id: 5, name: "Sarah Wilson", email: "sarahwilson@example.com", status: "Inactive", createdAt: "2022-05-31" },
    { id: 6, name: "John Doe", email: "johndoe@example.com", status: "Active", createdAt: "2022-05-31" },
    { id: 7, name: "Jane Smith", email: "janesmith@example.com", status: "Inactive", createdAt: "2022-05-31" },
    { id: 8, name: "Emily Davis", email: "emilydavis@example.com", status: "Suspended", createdAt: "2022-05-31" },
    { id: 9, name: "Michael Brown", email: "michaelbrown@example.com", status: "Active", createdAt: "2022-05-31" },
    { id: 10, name: "Sarah Wilson", email: "sarahwilson@example.com", status: "Inactive", createdAt: "2022-05-31" },
    
  ];

  const renderStatusButton = (status: string) => {
    let borderColor, textColor, dotColor;

    switch (status.toLowerCase()) {
      case "active":
        borderColor = "border-green-500";
        textColor = "text-green-500";
        dotColor = "bg-green-500";
        break;
      case "inactive":
        borderColor = "border-yellow-500";
        textColor = "text-yellow-500";
        dotColor = "bg-yellow-500";
        break;
      case "suspended":
        borderColor = "border-red-500";
        textColor = "text-red-500";
        dotColor = "bg-red-500";
        break;
      default:
        borderColor = "border-gray-300";
        textColor = "text-gray-500";
        dotColor = "bg-gray-300";
        break;
    }

    return (
      <button
        className={`flex items-center px-3 py-1 border rounded-full text-sm font-medium ${borderColor} ${textColor}`}
      >
        <span className={`h-2 w-2 rounded-full mr-2 ${dotColor}`}></span>
        {status}
      </button>
    );
  };

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Table
        headers={headers}
        data={data.map((row) => ({
          checkbox: (
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-green-600 checked:ring-green-600 checked:text-green-600"
            />
          ),
          name: row.name,
          email: row.email,
          
          status: renderStatusButton(row.status),
          createdAt: new Date(row.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          action: (
            <button className="text-gray-500 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          ),
          
        }))}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
