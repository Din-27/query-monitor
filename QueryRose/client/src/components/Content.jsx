import { useState } from "react";
import Drawer from "./Drawer";
import { useEffect } from "react";
import { dataCmds } from "../constant/data/commands";
import { API } from "../libs/API";
import createConnectionMysql from "../helpers/createConnection";
import { convertToUpperCase } from "../helpers/convertToUppercase";

export default function Content() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    const text = e.target.value;
    setQuery(text);
  };

  const getResultQuery = async () => {
    const data = await API.post("/query", {
      query,
    });
    setResult(data.data.result);
  };

  const handleKeyPress = async (e, query) => {
    console.log(`Key pressed: ${e.key}`, query);
    if (e.key === "F9") {
      await getResultQuery();
    }
  };

  useEffect(() => {
    const commands = [];

    const split = query.toLowerCase().split(" ");
    for (const item of split) {
      const dataCmd = dataCmds.filter(
        (x) =>
          x.name === item.toLowerCase() &&
          (x.status === "CMD VANILLA" || x.status === "FUNCTION")
      );
      console.log(convertToUpperCase(item));
      commands.push(dataCmd[0]?.cmd ? convertToUpperCase(item) : item);
    }

    const querySet = commands.join().replace(/,/gm, " ");
    setQuery(convertToUpperCase(query));
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [query]);

  const handleCreateConnection = () => {
    const getFileName = createConnectionMysql({
      host: "localhost",
      user: "test",
      dbName: "testing",
    });
    console.log(getFileName);
  };

  return (
    <div className="p-4 w-full h-fit">
      <div>
        <div onClick={getResultQuery} className="flex mr-4 space-x-4 mb-2">
          <button className="bg-blue-500 text-white dont-bold py-2 px-6 rounded">
            Run
          </button>
          <button
            onClick={handleCreateConnection}
            className="bg-red-500 text-white dont-bold py-2 px-6 rounded"
          >
            Close
          </button>
          <button
            onClick={() => setQuery("")}
            className="bg-red-500 text-white dont-bold py-2 px-6 rounded"
          >
            Clear
          </button>
        </div>
      </div>
      {/* <Tabs /> */}
      <div className="relative border-2 border-gray-200 border-dashed rounded-lg">
        <textarea
          value={query}
          onChange={onChange}
          className="p-4 text-xl font-semibold h-[475px] w-full focus:ring-0 border-none outline-0"
          name=""
          id=""
        />
        <Drawer result={result} />
      </div>
    </div>
  );
}
