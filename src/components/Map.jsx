import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearhParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h2>
        Position: {lat} - {lng}
      </h2>
      <button
        onClick={() => {
          setSearhParams({ lat: 23, lng: 50 });
        }}
      >
        Change Postion
      </button>
    </div>
  );
}

export default Map;
