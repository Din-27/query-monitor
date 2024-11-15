import { useContext } from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Context } from "./context/useContext";

function App() {
  const [state] = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="flex relative top-20">
        {state.isSidebar && <Sidebar />}
        <Content />
      </div>
    </>
  );
}

export default App;
