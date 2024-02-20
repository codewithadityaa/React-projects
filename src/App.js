import React, { useState } from "react";
import data from './data';
import ListB from "./ListB";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <ListB people={people} />
        <button onClick={() => setPeople([])} >Clear all</button>
      </section>
    </main>
  )
}

export default App;
