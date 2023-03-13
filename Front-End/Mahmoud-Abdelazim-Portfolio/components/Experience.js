import moment from "moment";
import { useEffect, useState } from "react";
import Work from "./Work";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/experience", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        result = JSON.parse(result);
        result.forEach((exp, idx) => {
          result[idx].dateFrom = moment(result[idx].dateFrom).format('MMM YYYY');
          result[idx].dateTo = moment(result[idx].dateTo).format('MMM YYYY');
        })
        setExperience(result);
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <div className="experience">
      <h2 className="section-head">Where I've Worked</h2>
      {experience.map((exp) => {
        return <Work exp={exp} />;
      })}
    </div>
  );
};

export default Experience;
