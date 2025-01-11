import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // A Részletek gombra kattintva  navigálunk a KepOldal komponenshez
    navigate("/kepoldal", { state: { kep: props.kep } });
  };
  return (
    <div className="col-3 card" style={{ width: "18rem" }}>
      <img
        src={"http://localhost:8000/" + props.kep.name}
        alt={props.kep.title}
        className="pt-2"
      />
      <p className="p-3">{props.kep.title}</p>
      <button className="btn btn-success" onClick={handleClick}>
        Részletek
      </button>
    </div>
  );
}