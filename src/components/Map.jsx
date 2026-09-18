import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchPosition, setSearchPosition] = useSearchParams();
  const lat = searchPosition.get("lat");
  const lng = searchPosition.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        position: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchPosition({ lat: 30, lng: 50 })}>
        Set Position
      </button>
    </div>
  );
}

export default Map;
