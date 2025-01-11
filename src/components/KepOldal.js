import { useLocation } from "react-router-dom";

export default function KepOldal() {
  const location = useLocation();
  const { kep } = location.state || {}; // Az átadott adat elérése
  if (!kep) {
    return <p>Nem található kép.</p>;
  }

  return (
    <div className="container card" style={{ maxWidth: "38rem" }}>
      <h1>{kep.title}</h1>
      <img src={"http://localhost:8000/" + kep.name} alt={kep.title} />
    
    </div>
  );
}
