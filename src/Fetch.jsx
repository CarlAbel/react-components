import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";

import SectionNewsDigest from "./SectionNewsDigest";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/sectionNewsDigest")
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
      {data && <SectionNewsDigest data={data} />}
    </div>
  );
};
export default Fetch;
