import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";

import SectionCollection from "./SectionCollection";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/sectionCollection")
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
      {data && <SectionCollection data={data} />}
    </div>
  );
};
export default Fetch;
