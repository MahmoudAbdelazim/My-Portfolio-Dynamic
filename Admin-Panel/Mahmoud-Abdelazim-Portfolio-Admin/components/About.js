import { useEffect, useState } from "react";

const About = ({ selectedSection }) => {
  const [about, setAbout] = useState({ aboutText: "", technologies: [] });

  const updateAbout = (newAbout) => {
    setAbout(newAbout);
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/about", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateAbout(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setAbout({
      ...about,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(bio);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/bio", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const addTechnology = () => {
    
  }

  return (
    <div
      id="about"
      style={{ display: selectedSection === "about" ? "block" : "none" }}
    >
      <h2>About</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="about">About: </label>
        <textarea
          name="about"
          id="about"
          value={about.aboutText}
          onChange={handleChange}
        ></textarea>
        <h5>Technologies</h5>
        <div>
          {about.technologies.map((technology) => {
            return (
              <input
                key={technology.id}
                type={"text"}
                name="technology"
                value={technology.technology}
                onChange={handleChange}
              />
            );
          })}
          <input type={"text"} />
          <button onClick={addTechnology}>Add</button>
        </div>
        <input type={"submit"} value="Save" />
      </form>
    </div>
  );
};

export default About;
