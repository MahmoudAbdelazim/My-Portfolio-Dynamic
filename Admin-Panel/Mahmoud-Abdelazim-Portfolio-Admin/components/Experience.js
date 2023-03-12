import { useEffect, useState } from "react";

const Experience = ({ selectedSection }) => {
  const [experience, setExperience] = useState([]);

  const updateExperience = (newExperience) => {
    setExperience(newExperience);
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/experience", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateExperience(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setExperience({
      ...experience,
      [e.target.name]: value,
    });
  };

  return (
    <div
      id="experience"
      style={{ display: selectedSection === "experience" ? "block" : "none" }}
    >
      <h2>Experience</h2>
      <div>
        {experience.map((exp) => {
          return (
            <form key={exp.id}>
              <label htmlFor="companyName">Company: </label>
              <input
                type={"text"}
                name="companyName"
                id="companyName"
                value={exp.companyName}
                onChange={handleChange}
              />

              <label htmlFor="companyLink">Company Link: </label>
              <input
                type={"text"}
                name="companyLink"
                id="companyLink"
                value={exp.companyLink}
                onChange={handleChange}
              />

              <label htmlFor="title">Title: </label>
              <input
                type={"text"}
                name="title"
                id="title"
                value={exp.title}
                onChange={handleChange}
              />

              <label htmlFor="dateFrom">From: </label>
              <input
                type={"date"}
                name="dateFrom"
                id="dateFrom"
                value={exp.dateFrom}
                onChange={handleChange}
              />

              <label htmlFor="dateTo">To: </label>
              <input
                type={"date"}
                name="dateTo"
                id="dateTo"
                value={exp.dateTo}
                onChange={handleChange}
              />

              <h5>Responsiblities</h5>
              <div>
                {exp.responsibilities.map((responsibility) => {
                  return (
                    <input
                      key={responsibility.id}
                      type={"text"}
                      name="responsibility"
                      value={responsibility.responsibility}
                      onChange={handleChange}
                    />
                  );
                })}
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
