import React, { useState } from "react";
import { UserTable } from "./UserTable";
import { AddUserModal } from "./AddUserModal";
import { Button } from "@/components/ui/Button";

export const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
      </div>
      <UserTable />
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
