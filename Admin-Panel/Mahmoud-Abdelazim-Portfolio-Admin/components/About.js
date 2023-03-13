import { useEffect, useState } from "react";

const About = ({ selectedSection }) => {
  const [about, setAbout] = useState({ aboutText: "", technologies: [] });
  const [newTechnology, setNewTechnology] = useState({ technology: "" });
  const [msg, setMsg] = useState("");

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

  const handleChangeTechnology = (id, value) => {
    let newAbout = {
      id: about.id,
      aboutText: about.aboutText,
      technologies: [],
    };
    about.technologies.forEach((technology) => {
      if (technology.id != id) newAbout.technologies.push(technology);
      else newAbout.technologies.push({ id: id, technology: value });
    });
    console.log("new about: ");
    console.log(newAbout);
    setAbout(newAbout);
  };

  const addTechnology = (e) => {
    e.preventDefault();
    let newAbout = about;
    newAbout.technologies.push(newTechnology);
    setNewTechnology({ technology: "" });
    setAbout(newAbout);
  };

  const deleteTechnology = (id, e) => {
    e.preventDefault();
    let newAbout = {
      id: about.id,
      aboutText: about.aboutText,
      technologies: [],
    };
    about.technologies.forEach((technology) => {
      if (technology.id != id) newAbout.technologies.push(technology);
    });
    console.log("new about: ");
    console.log(newAbout);
    setAbout(newAbout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(about);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/about", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setMsg("Data Saved Successfully!");
        setTimeout(() => setMsg(""), 2000);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      id="about"
      style={{ display: selectedSection === "about" ? "block" : "none" }}
    >
      <h2>About</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="aboutText">About: </label>
        <textarea
          type="text"
          name="aboutText"
          id="aboutText"
          value={about.aboutText}
          onChange={handleChange}
          className="form-control"
        ></textarea>
        <h5>Technologies</h5>
        <div className="form-group">
          {about.technologies.map((technology) => {
            return (
              <div className="row">
                <div className="col-md-10">
                  <input
                    key={technology.id}
                    type={"text"}
                    name="technology"
                    value={technology.technology}
                    className="form-control"
                    onChange={(e) =>
                      handleChangeTechnology(technology.id, e.target.value)
                    }
                  />
                </div>
                <div className="col-md-2">
                  <button
                    onClick={(e) => deleteTechnology(technology.id, e)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <div className="form-group">
            <div className="row">
              <div className="col-md-10">
                <input
                  type={"text"}
                  className="form-control"
                  value={newTechnology.technology}
                  onChange={(e) =>
                    setNewTechnology({ technology: e.target.value })
                  }
                />
              </div>
              <div className="col-md-2">
                <button onClick={addTechnology} className="btn btn-success">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <input type={"submit"} value="Save" className="btn btn-primary" />
      </form>
      <p className="text-success">{msg}</p>
    </div>
  );
};

export default About;
