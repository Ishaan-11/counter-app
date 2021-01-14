import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);


  return (
    <div>
      <Navbar totalCounters={counters.filter(item => item.value > 0).length} />
    </div>
  );
}

export default App;
