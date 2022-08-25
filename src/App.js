import { useState } from "react";
import "./App.css";
import MyNameIs from "./MyNameIs";

function App() {
  const [name , setName] = useState('');

  function onChange(e) {
    setName(e.target.value);

  }

  return (
    <div className="App">
      <MyNameIs name={name}/>
      <label htmlFor="name">Nombre</label>
      <input name="name" type="text" onChange={onChange} />
    </div>
  );
}

export default App;
