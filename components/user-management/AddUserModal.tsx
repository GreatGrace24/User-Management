import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MdEmail, MdCall } from 'react-icons/md';


const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
  "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
];

type FormValues = {
  firstName: string;
  lastName: string;
  organization: string;
  dob: string;
  email: string;
  contactNumber: string;
  contactAddress: string;
  country: string;
  state: string;
};

type AddUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const selectedCountry = watch("country");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data: ", data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
  <div className="max-w-4xl mx-auto">
      <h2 className="text-xl text-blue-600 font-semibold mb-6">User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-500">First Name</label>
            <Input
              placeholder="Julius"
               className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-500">Last Name</label>
            <Input
              placeholder="Nzubechi"
               className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-500">Organization ID</label>
            <Input
              placeholder="Julius Nzubechi Ventures"
               className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
              {...register("organization", { required: "Organization is required" })}
            />
            {errors.organization && (
              <p className="text-red-500 text-sm">{errors.organization.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-500">Date of Birth</label>
            <Input
              type="date"
              placeholder="07/06/2022"
               className="w-full border pr-10 border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
              {...register("dob", { required: "Date of Birth is required" })}
            
            />
            {errors.dob && (
              <p className="text-red-500 text-sm">{errors.dob.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-500">Email Address</label>
            <div className="flex items-center border rounded-md overflow-hidden">
            <span className="flex items-center justify-center w-10 text-blue-500">
                    <MdEmail className="h-5 w-5" />
                </span>
              <Input
                placeholder="alexandrica@gmail.com"
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-500">Contact Number</label>
            <div className="flex items-center border rounded-md overflow-hidden">
            <span className="flex items-center justify-center w-10 text-blue-500">
    <MdCall className="h-5 w-5" />
</span>

              <Input
                placeholder="234805 7586 234"
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
                {...register("contactNumber", {
                  required: "Contact number is required",
                })}
              />
            </div>
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-gray-500">Contact Address</label>
          <Input
            placeholder="juliusnzubechi@gmail.com"
            className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm placeholder-black focus:ring-blue-600 focus:border-blue-600"
            {...register("contactAddress", {
              required: "Contact address is required",
            })}
          />
          {errors.contactAddress && (
            <p className="text-red-500 text-sm">{errors.contactAddress.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-500">Country</label>
            <select
              {...register("country", { required: "Country is required" })}
              className="border border-gray-300 rounded-md px-2 py-1 w-full text-sm"
            >
              <option value="">Select Country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          {selectedCountry === "Nigeria" && (
            <div>
              <label className="text-gray-500">State</label>
              <select
                {...register("state", { required: "State is required" })}
                className="border border-gray-300 rounded-md px-2 py-1 w-full text-sm"
              >
                <option value="">Select State</option>
                {NIGERIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>
          )}
        </div>

        <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
          Update Account
        </Button>
      </form>
      </div>
    </Modal>
  );
};
