import { useState } from "react";
import Calculator from "./components/Calculator";
import Login from "./components/Login";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
  const [view, setView] = useState("calculator");

  return (
    <div>
      <h1>Meny</h1>
      <button onClick={() => setView("calculator")}>Kalkylator</button>
      <button onClick={() => setView("login")}>Logga in</button>
      <button onClick={() => setView("add")}>Lägg till film</button>
      <button onClick={() => setView("list")}>Visa filmer</button>

      <hr />

      {view === "calculator" && <Calculator />}
      {view === "login" && <Login />}
      {view === "add" && <AddMovie />}
      {view === "list" && <MovieList />}
    </div>
  );
}

export default App;
