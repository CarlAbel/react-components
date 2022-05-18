import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/sectionMaldives")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      <div></div>
      {data && <TravelComponent data={data} />}
    </div>
  );
};
export default Fetch;
