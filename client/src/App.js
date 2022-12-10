import { useState } from 'react';
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Login disactivate={setIsLoggedIn}/>
    </div>
  );
}

export default App;
