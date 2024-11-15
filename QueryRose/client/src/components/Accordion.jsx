import React from "react";
import { databaseProperties } from "../constant/data/database";

export default function Accordion({ children, name, icon }) {
  const checkName = databaseProperties.filter((x) => x.nama === name);
  return (
    <div className="space-y-2">
      <details className="overflow-hidden [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex w-52 items-center gap-2 px-4 text-gray-900 transition">
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <div className="flex space-x-2 items-center">
            <img
              className={
                checkName.length === 0
                  ? "w-[18px]"
                  : name === "Tables"
                  ? "w-[14px]"
                  : "w-[15px]"
              }
              src={icon}
              alt=""
            />
            <span className="text-sm font-medium">{name}</span>
          </div>
        </summary>

        <ul className="space-y-1 ml-6">{children}</ul>
      </details>
    </div>
  );
}
