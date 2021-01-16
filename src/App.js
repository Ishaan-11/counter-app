import React, { useState } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

function App() {

  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  function handleIncrementDecrement(id, increase) {
    setCounters(prevValue => {
      const output = prevValue.map(counter => {
        let value = counter.value;
        if (counter.id === id) {
          increase ? value++ : value--;
        }
        return {...counter, value};
      });
      return output;
    });
  }

  function handleDelete(id) {
    setCounters(prevValue => {
      return prevValue.filter(counter => {
        return counter.id !== id;
      })
    })
  }

  function handleReset() {
    setCounters(prevValue => {
      return prevValue.map(counter => {
        counter.value = 0;
        return counter;
      });
    });
  }

  return (
    <div>
      <Navbar totalCounters={counters.filter(item => item.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onIncrementDecrement={handleIncrementDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          onRestart={() => window.location.reload()}
        />
      </main>
    </div>
  );
}

export default App;
