import { useEffect, useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import { dataList } from "./data";

function App() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setData(dataList);
  }, []);

  const handleToggle = (id) => {
    if (activeId == id && activeId !== null) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };
  return (
    <div className="app">
      <h1>Accordian</h1>
      {data &&
        data?.map((ele) => (
          <Accordian
            key={ele.id}
            item={ele}
            activeId={activeId}
            toggle={handleToggle}
          />
        ))}
    </div>
  );
}

export default App;
