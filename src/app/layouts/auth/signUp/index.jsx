"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CompanyLogo from "@/app/components/general/company-logo";

import { userService } from "@/app/services/api";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // First Name validation
    if (formData.firstName.length < 3) {
      newErrors.firstName = "First name is too small";
    }

    if (formData.firstName.length > 50) {
      newErrors.firstName = "First name is too long";
    }

    if (formData.lastName.length < 3) {
      newErrors.lastName = "Last name is too small";
    }

    if (formData.lastName.length > 50) {
      newErrors.lastName = "Last name is too long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const createUser = async () => {
    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.emailAddress,
        password: formData.password,
      };

      const res = await userService.createUser(userData);
      console.log(res);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Error creating community:", errorMessage);
      // check if error message contains "email already exists"
      if (errorMessage.includes("email already exists")) {
        setErrors((prev) => ({
          ...prev,
          emailAddress: "An user with this email already exists",
        }));
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    createUser();
  };

  return (
    <div className="mx-auto h-fit w-full max-w-md rounded-none border border-border bg-emphasis p-4 dark:bg-emphasis md:rounded-2xl md:p-8">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-gradient-to-tr from-black to-black/45 p-3 dark:to-black/5">
          <CompanyLogo svgSize={50} color="text-white " noText></CompanyLogo>
        </div>
        <p className="mt-2 text-xl font-bold text-text-default">
          Create your Tribofy account
        </p>
      </div>

      <form
        className="mb-6 mt-14 flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex h-fit w-full flex-col">
          <LabelInputContainer className="mb-4">
            <div className="flex w-full gap-2">
              <div className="flex w-[50%] flex-col space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className={`dark:bg-background ${errors.firstName ? "border border-red-500 focus-visible:ring-0" : ""}`}
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <span className="text-sm text-red-500">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="flex w-[50%] flex-col space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className={`dark:bg-background ${errors.lastName ? "border border-red-500 focus-visible:ring-0" : ""}`}
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <span className="text-sm text-red-500">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input
              id="emailAddress"
              name="emailAddress"
              placeholder="projectmayhem@fc.com"
              className={`dark:bg-background ${errors.emailAddress ? "border border-red-500 focus-visible:ring-0" : ""}`}
              type="email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            {errors.emailAddress && (
              <span className="text-sm text-red-500">
                {errors.emailAddress}
              </span>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              className={`dark:bg-background ${errors.password ? "border border-red-500 focus-visible:ring-0" : ""}`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password}</span>
            )}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              type="password"
              className={`dark:bg-background ${errors.confirmPassword ? "border border-red-500 focus-visible:ring-0" : ""}`}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">
                {errors.confirmPassword}
              </span>
            )}
          </LabelInputContainer>
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:from-background dark:to-black/85 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="mt-3 flex items-center justify-center gap-1">
          <p className="text-sm font-medium text-gray-600 dark:text-neutral-200">
            Already have an account?
          </p>

          <Link href="/pages/auth/signIn">
            <p className="text-sm font-semibold text-gray-950 dark:text-neutral-200">
              Sign In
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default SignUp;
