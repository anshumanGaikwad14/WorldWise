import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchPosition] = useSearchParams();
  const lat = Number(searchPosition.get("lat"));
  const lng = Number(searchPosition.get("lng"));
  return [lat, lng];
}
