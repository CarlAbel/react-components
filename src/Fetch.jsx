import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";
import LeisureComponent from "./LeisureComponent";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/sectionOutdoor")
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

      {data && <LeisureComponent data={data} />}
    </div>
  );
};
export default Fetch;
