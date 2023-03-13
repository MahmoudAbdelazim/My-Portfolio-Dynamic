import { useEffect, useState } from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ selectedSection }) => {
  const [experience, setExperience] = useState([]);
  const [msg, setMsg] = useState("");

  const updateExperience = (newExperience) => {
    setExperience(newExperience);
  };

  const fetchExperience = () => {
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
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const updateExistingExperience = (exp, e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(exp);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/experience", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setMsg("Experience Saved Successfully!");
        setTimeout(() => setMsg(""), 2000);
      })
      .catch((error) => console.log("error", error));
  };

  const addNewExperience = (exp, e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(exp);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/experience", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        fetchExperience();
      })
      .catch((error) => console.log("error", error));
  };

  const saveExperience = (exp, e) => {
    if (exp.id) {
      updateExistingExperience(exp, e);
    } else {
      addNewExperience(exp, e);
    }
  };

  const deleteExperience = (exp, e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(exp);
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/experience", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        fetchExperience();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      id="experience"
      style={{ display: selectedSection === "experience" ? "block" : "none" }}
    >
      <h2>Experience</h2>
      <div>
        {experience.map((expItem) => {
          return (
            <ExperienceItem
              key={expItem.id}
              expItem={expItem}
              saveExperience={saveExperience}
              deleteExperience={deleteExperience}
              msg={msg}
            />
          );
        })}
        <ExperienceItem
          expItem={{
            companyName: "",
            companyLink: "",
            title: "",
            dateFrom: null,
            dateTo: null,
            responsibilities: [],
          }}
          saveExperience={saveExperience}
        />
      </div>
    </div>
  );
};

export default Experience;
