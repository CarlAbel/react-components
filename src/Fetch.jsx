import TravelComponent from "./TravelComponent";
import { useState, useEffect } from "react";

import SectionLatestNews from "./SectionLatestNews";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/sectionLatestNews")
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
      {data && <SectionLatestNews data={data} />}
    </div>
  );
};
export default Fetch;
