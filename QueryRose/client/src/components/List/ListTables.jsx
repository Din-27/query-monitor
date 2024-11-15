import React from "react";
import Accordion from "../Accordion";
import { useEffect } from "react";
import { API } from "../../libs/API";
import { useState } from "react";

export default function ListTables({ dbName, nama, unique, icon }) {
  const [databaseProps, setDatabaseProps] = useState([]);

  const getDatabasePropeties = async (name) => {
    const databases = await API.get("/" + name + "/" + dbName || null);
    setDatabaseProps(databases.data.result);
    return databases.data.result;
  };
  useEffect(() => {
    getDatabasePropeties(unique);
  }, []);

  return (
    <div className="mt-2 py-1">
      <Accordion name={nama} icon={icon}>
        {databaseProps.map((item, index) => (
          <li
            key={index}
            className="pl-8 cursor-default text-gray-900 transition hover:bg-gray-200 py-1 mt-1"
          >
            {/* <span className="transition group-open:-rotate-180"> */}
            {/* <svg
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
              </svg> */}
            {/* </span> */}
            <div className="flex space-x-2 items-center">
              <img
                className={nama === "Tables" ? "w-[13px]" : "w-[14px]"}
                src={icon}
                alt=""
              />{" "}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          </li>
        ))}
      </Accordion>
    </div>
  );
}
