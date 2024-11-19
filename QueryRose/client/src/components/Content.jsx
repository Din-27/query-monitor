import { useCallback, useContext, useRef, useState } from "react";
import Drawer from "./Drawer";
import { useEffect } from "react";
import { API } from "../libs/API";
import { convertToUpperCase } from "../helpers/convertToUppercase";
import { Context } from "../context/useContext";

export default function Content() {
  const textareaRef = useRef(null);
  const [state, dispatch] = useContext(Context);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    const textarea = textareaRef.current;
    const cursorStart = textarea.selectionStart;
    const cursorEnd = textarea.selectionEnd;
    const text = e.target.value;
    setQuery(convertToUpperCase(text));
    setTimeout(() => {
      textarea.setSelectionRange(cursorStart, cursorEnd);
    }, 0);
  };

  const getResultQuery = useCallback(
    async () => {
      if (state.isPlayground) {
        const data = await API.post("/query", {
          query,
        });
        setResult(data.data.result);
        dispatch({
          type: "PLAYGROUND",
          payload: false,
        });
      }
      if (state.isClickTable) {
        setResult(state.dataTable);
        dispatch({
          type: "CLICK_OFF",
        });
      }
    },
    [dispatch, query, state.dataTable, state.isClickTable, state.isPlayground]
  );

  const handleKeyPress = useCallback(
    async (e) => {
      // console.log(`Key pressed: ${e.key}`, query);
      if (e.key === "F9") {
        dispatch({
          type: "PLAYGROUND",
          payload: true,
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getResultQuery();
    // attach the event listener
    document.addEventListener("keydown", (e) => handleKeyPress(e, query));

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", (e) => handleKeyPress(e, query));
    };
  }, [getResultQuery, handleKeyPress, query]);

  const handleCreateConnection = () => {
    API.get("/connection/create");
  };

  console.log(result);

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
          ref={textareaRef}
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
