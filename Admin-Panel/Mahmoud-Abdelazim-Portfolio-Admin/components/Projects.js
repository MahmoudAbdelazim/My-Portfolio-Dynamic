const Projects = ({ selectedSection }) => {
  return (
    <div
      id="projects"
      style={{ display: selectedSection === "projects" ? "block" : "none" }}
    >
      <h2>Projects</h2>
      <div>
        <form>
          <label for="name">Name:</label>
          <input type={"text"} name="name" id="name" />

          <label for="description">Description:</label>
          <input type={"text"} name="description" id="description" />

          <label for="githubLink">GitHub Link:</label>
          <input type={"text"} name="githubLink" id="githubLink" />

          <label for="projectLink">Project Link:</label>
          <input type={"text"} name="projectLink" id="projectLink" />

          <label for="date">Date:</label>
          <input type={"date"} name="date" id="date" />
        </form>

        <h5>Technologies</h5>
        <div>
          <input type={"text"} name="technology" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
