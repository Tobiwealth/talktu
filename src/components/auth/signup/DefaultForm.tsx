import Link from "next/link";
import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";

interface DefaultFormData {
  name: string;
  email: string;
  password: string;
}

interface DefaultFormProps {
  onSubmit: (data: DefaultFormData) => void;
}

const DefaultForm = forwardRef<HTMLInputElement, DefaultFormProps>(({ onSubmit }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DefaultFormData>();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            {...register("name", { required: "Full name is required" })}
            type="text"
            placeholder="Enter full name"
            className="input-box"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Enter email address"
            className="input-box"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-field">
          <div className="space-y-1">
            <label htmlFor="password">Password</label>
            <div className="text-xs text-neutral-600">
              Password should be at least 8 characters long and should contain
              numbers and symbols
            </div>
          </div>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain numbers and symbols",
              },
            })}
            type="password"
            placeholder="Create a password"
            className="input-box"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
      </div>
      <div className="text-sm space-y-2 text-neutral-600">
        <div>
          By signing up you agree to the terms and conditions of Talktu
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="subscribeCheckbox"
            className="w-5 h-5 accent-retro_blue-main"
          />
          <label htmlFor="subscribeCheckbox">
            I’d like to receive weekly emails and updates from talktu
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="block text-center bg-sunglow-main w-3/5 min-[1060px]:w-full text-deep_blue font-semibold min-[1060px]:font-bold text-lg rounded-xl py-3 shadow-[0px_4px_0px] min-[1060px]:shadow-[0px_7px_0px] shadow-sunglow-900 min-[1060px]:shadow-sunglow-900"
      >
        <span className="hidden min-[1060px]:block ">
          Create Account
        </span>
        <span className="min-[1060px]:hidden">Next</span>
      </button>
    </form>
  );
});

DefaultForm.displayName = "DefaultForm";

export default DefaultForm;
