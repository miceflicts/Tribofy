import React from "react";

export default function CreateCommunityPricing(props) {
  return (
    <>
      {/* Pricing */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {/* Card */}
          <div className="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-neutral-800">
            <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
              Free
            </h4>
            <span className="mt-7 text-5xl font-bold text-gray-800 dark:text-neutral-200">
              Free
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Forever free
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  1 user
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Plan features
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Product support
                </span>
              </li>
            </ul>
            <a
              className="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col rounded-xl border-2 border-blue-600 p-8 text-center shadow-xl dark:border-blue-700">
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-100 px-3 py-1.5 text-xs font-semibold uppercase text-blue-800 dark:bg-blue-600 dark:text-white">
                Most popular
              </span>
            </p>
            <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
              Startup
            </h4>
            <span className="mt-5 text-5xl font-bold text-gray-800 dark:text-neutral-200">
              <span className="-me-2 text-2xl font-bold">$</span>
              39
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              All the basics for starting a new business
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  2 users
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Plan features
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Product support
                </span>
              </li>
            </ul>
            <a
              className="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-neutral-800">
            <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
              Team
            </h4>
            <span className="mt-5 text-5xl font-bold text-gray-800 dark:text-neutral-200">
              <span className="-me-2 text-2xl font-bold">$</span>
              89
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Everything you need for a growing business
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  5 users
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Plan features
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Product support
                </span>
              </li>
            </ul>
            <a
              className="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col rounded-xl border border-gray-200 p-8 text-center dark:border-neutral-800">
            <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
              Enterprise
            </h4>
            <span className="mt-5 text-5xl font-bold text-gray-800 dark:text-neutral-200">
              <span className="-me-2 text-2xl font-bold">$</span>
              149
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Advanced features for scaling your business
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  10 users
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Plan features
                </span>
              </li>
              <li className="flex gap-x-2">
                <svg
                  className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-neutral-400">
                  Product support
                </span>
              </li>
            </ul>
            <a
              className="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Pricing */}
    </>
  );
}
