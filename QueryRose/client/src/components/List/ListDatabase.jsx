import React from "react";
import Accordion from "../Accordion";
import { databaseProperties } from "../../constant/data/database";
import ListTables from "./ListTables";
import IconDatabase from "../../assets/database.svg";
import { API } from "../../libs/API";
import { useState } from "react";
import { useEffect } from "react";

export default function ListDatabase() {
  const [databases, setDatabases] = useState([]);

  const getDatabases = async () => {
    const databases = await API.get("/database");
    setDatabases(databases.data.result);
  };

  useEffect(() => {
    getDatabases();
  }, []);
  // console.log(databaseProps);

  return (
    <div className="py-2">
      {databases.map((x, y) => (
        <Accordion key={y} name={x.name} icon={IconDatabase}>
          {databaseProperties.map((item, index) => (
            <ListTables
              dbName={x.name}
              nama={item.nama}
              key={index}
              unique={item.key}
              icon={item.icon}
            />
          ))}
        </Accordion>
      ))}
    </div>
  );
}
