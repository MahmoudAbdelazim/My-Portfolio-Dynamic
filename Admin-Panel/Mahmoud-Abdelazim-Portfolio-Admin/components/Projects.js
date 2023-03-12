import { useEffect, useState } from "react";

const Projects = ({ selectedSection }) => {
  const [projects, setProjects] = useState([]);

  const updateProjects = (newProjects) => {
    setProjects(newProjects);
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/project", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateProjects(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProjects({
      ...projects,
      [e.target.name]: value,
    });
  };

  return (
    <div
      id="projects"
      style={{ display: selectedSection === "projects" ? "block" : "none" }}
    >
      <h2>Projects</h2>
      <div>
        {projects.map((project) => {
          return (
            <form key={project.id}>
              <label htmlFor="name">Name:</label>
              <input type={"text"} name="name" id="name" value={project.name} />

              <label htmlFor="description">Description:</label>
              <input
                type={"text"}
                name="description"
                id="description"
                value={project.description}
                onChange={handleChange}
              />

              <label htmlFor="githubLink">GitHub Link:</label>
              <input
                type={"text"}
                name="githubLink"
                id="githubLink"
                value={project.githubLink}
                onChange={handleChange}
              />

              <label htmlFor="projectLink">Project Link:</label>
              <input
                type={"text"}
                name="projectLink"
                id="projectLink"
                value={project.projectLink}
                onChange={handleChange}
              />

              <label htmlFor="date">Date:</label>
              <input type={"date"} name="date" id="date" value={project.date} />
              <h5>Technologies</h5>
              <div>
                {project.technologies.map((technology) => {
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
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
