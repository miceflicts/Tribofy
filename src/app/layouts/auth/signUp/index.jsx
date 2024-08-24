"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CompanyLogo from "@/app/components/general/company-logo";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="mx-auto h-fit w-full max-w-md rounded-none border border-border bg-emphasis p-4 dark:bg-emphasis md:rounded-2xl md:p-8">
      <div className="flex w-full flex-col items-center justify-center">
        {/* <h2 className="text-xl font-bold text-text-default">Welcome back!</h2> */}

        <div className="flex h-fit w-fit items-center justify-center rounded-lg bg-gradient-to-tr from-black to-black/45 p-3 dark:to-black/5">
          <CompanyLogo svgSize={50} color="text-white " noText></CompanyLogo>
        </div>
        <p className="mt-2 text-xl font-bold text-text-default">
          Create your Tribofy account
        </p>
      </div>

      <form className="mb-6 mt-14 flex flex-col gap-4">
        <div className="flex h-fit w-full flex-col">
          <LabelInputContainer className="mb-4">
            <div className="flex w-full gap-2">
              <div className="flex w-[50%] flex-col space-y-2">
                <Label htmlFor="email">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="dark:bg-background"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex w-[50%] flex-col space-y-2">
                <Label htmlFor="email">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className="dark:bg-background"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="emailAddress"
              name="emailAddress"
              placeholder="projectmayhem@fc.com"
              className="dark:bg-background"
              type="email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              className="dark:bg-background"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.length > 0 ? (
              <span className="text ml-2 text-sm">{errors}</span>
            ) : null}
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              type="password"
              className="dark:bg-background"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.length > 0 ? (
              <span className="text ml-2 text-sm">{errors}</span>
            ) : null}
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
            Dont have an account yet?
          </p>

          <Link href={"/pages/auth/signUp"}>
            <p className="text-sm font-semibold text-gray-950 dark:text-neutral-200">
              Sign Up
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
