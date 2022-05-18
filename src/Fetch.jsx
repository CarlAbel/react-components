import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";

import SectionSquared from "./SectionSquared";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/sectionSquared")
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
      {data && <SectionSquared data={data} />}
    </div>
  );
};
export default Fetch;
