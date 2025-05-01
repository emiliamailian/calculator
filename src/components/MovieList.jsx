import { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("Ingen token – logga in först.");
        return;
      }

      try {
        const res = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setMovies(data);
        } else {
          setMessage("Kunde inte hämta filmer.");
        }
      } catch (err) {
        setMessage("Nätverksfel");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Filmer</h2>
      {message && <p>{message}</p>}
      <ul>
        {movies.map((movie, index) => (
          <li key={index} style={{ marginBottom: "1rem", textAlign: "left" }}>
            <strong>Titel:</strong> {movie.title} <br />
            <strong>Regissör:</strong> {movie.director} <br />
            <strong>Beskrivning:</strong> {movie.description} <br />
            <strong>Produktionsår:</strong> {movie.productionYear}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
