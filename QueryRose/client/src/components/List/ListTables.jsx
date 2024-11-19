import React, { useContext } from "react";
import Accordion from "../Accordion";
import { useEffect, useCallback } from "react";
import { API } from "../../libs/API";
import { useState } from "react";
import { Context } from "../../context/useContext";

export default function ListTables({ dbName, nama, unique, icon }) {
  const [_, dispatch] = useContext(Context);
  const [databaseProps, setDatabaseProps] = useState([]);

  const getDatabasePropeties = useCallback(
    async (name) => {
      const databases = await API.get(
        "/database/" + name + "/" + dbName || null
      );
      setDatabaseProps(databases.data.result);
      return databases.data.result;
    },
    [dbName]
  );

  const handleGetDataTableAndView = async (tableName, unique) => {
    console.log(_);

    if (unique === "Tables") {
      const { data } = await API.post("/query/click-table", { tableName });
      dispatch({
        type: "CLICK_TABLE",
        payload: data.result,
      });
      dispatch({
        type: "PLAYGROUND",
        payload: false,
      });
    }
    if (unique === "Views") {
      const { data } = await API.post("/query/click-table", { tableName });
      dispatch({
        type: "CLICK_TABLE",
        payload: data.result,
      });
    }
  };

  useEffect(() => {
    getDatabasePropeties(unique);
  }, [getDatabasePropeties, unique]);

  return (
    <div className="mt-2 py-1">
      <Accordion name={nama} icon={icon}>
        {databaseProps.map((item, index) => (
          <li
            key={index}
            onClick={() => handleGetDataTableAndView(item.name, nama)}
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
