import { useState } from "react";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [message, setMessage] = useState("");

  const handleAddMovie = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Ingen token – logga in först.");
      return;
    }

    const movie = {
      title,
      director,
      description,
      productionYear,
    };

    try {
      const res = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(movie),
      });

      if (res.ok) {
        setMessage("Film tillagd!");
        setTitle("");
        setDirector("");
        setDescription("");
        setProductionYear("");
      } else {
        const data = await res.json();
        setMessage(data.message || "Kunde inte lägga till film.");
      }
    } catch (err) {
      setMessage("Nätverksfel");
    }
  };

  return (
    <div>
      <h2>Lägg till film</h2>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Regissör"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      /><br />
      <textarea
        placeholder="Beskrivning"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br />
      <input
        type="number"
        placeholder="Produktionsår"
        value={productionYear}
        onChange={(e) => setProductionYear(e.target.value)}
      /><br />
      <button onClick={handleAddMovie}>Lägg till</button>
      <p>{message}</p>
    </div>
  );
}

export default AddMovie;
