import { useState } from "react";

function Calculator() {
  const [tal1, setTal1] = useState("");
  const [tal2, setTal2] = useState("");
  const [resultat, setResultat] = useState(null);

  const addera = () => setResultat(Number(tal1) + Number(tal2));
  const subtrahera = () => setResultat(Number(tal1) - Number(tal2));
  const multiplicera = () => setResultat(Number(tal1) * Number(tal2));
  const dividera = () => {
    if (Number(tal2) === 0) {
      setResultat("Kan inte dividera med 0!");
    } else {
      setResultat(Number(tal1) / Number(tal2));
    }
  };

  return (
    <div>
      <h1>Kalkylator</h1>
      <h2>Skriv in Tal 1 och Tal 2, välj sedan räknesättet:</h2>
      <input
        type="number"
        placeholder="Tal 1"
        value={tal1}
        onChange={(e) => setTal1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tal 2"
        value={tal2}
        onChange={(e) => setTal2(e.target.value)}
      />
      <div>
        <button onClick={addera}>Addera</button>
        <button onClick={subtrahera}>Subtrahera</button>
        <button onClick={multiplicera}>Multiplicera</button>
        <button onClick={dividera}>Dividera</button>
      </div>
      <h2>Resultat: {resultat !== null ? resultat : "-"}</h2>
    </div>
  );
}

export default Calculator;
