import { useState } from "react";

const IndexPage = () => {
  const [selectedSection, setSelectedSection] = useState("bio");

  return (
    <>
      <nav class="nav nav-pills nav-fill">
        <a
          className={
            selectedSection === "bio"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
          href="#bio"
          onClick={() => setSelectedSection("bio")}
        >
          Bio
        </a>
        <a
          className={
            selectedSection === "about"
              ? " nav-item nav-link active"
              : "nav-item nav-link"
          }
          href="#about"
          onClick={() => setSelectedSection("about")}
        >
          About
        </a>
        <a
          className={
            selectedSection === "experience"
              ? " nav-item nav-link active"
              : "nav-item nav-link"
          }
          href="#experience"
          onClick={() => setSelectedSection("experience")}
        >
          Experience
        </a>
        <a
          className={
            selectedSection === "projects"
              ? " nav-item nav-link active"
              : "nav-item nav-link"
          }
          href="#projects"
          onClick={() => setSelectedSection("projects")}
        >
          Projects
        </a>
        <a
          className={
            selectedSection === "achievements"
              ? " nav-item nav-link active"
              : "nav-item nav-link"
          }
          href="#achievements"
          onClick={() => setSelectedSection("achievements")}
        >
          Achievements
        </a>
        <a
          className={
            selectedSection === "social"
              ? " nav-item nav-link active"
              : "nav-item nav-link"
          }
          href="#social"
          onClick={() => setSelectedSection("social")}
        >
          Social
        </a>
      </nav>

      <div
        id="bio"
        style={{ display: selectedSection === "bio" ? "block" : "none" }}
      >
        <h2>Bio</h2>
        <form>
          <label for="name">Name: </label>
          <input type={"text"} name="name" id="name" />

          <label for="mainBio">Main Bio: </label>
          <input type={"text"} name="mainBio" id="mainBio" />

          <label for="detailedBio">Detailed Bio: </label>
          <input type={"text"} name="detailedBio" id="detailedBio" />
        </form>
      </div>

      <div
        id="about"
        style={{ display: selectedSection === "about" ? "block" : "none" }}
      >
        <h2>About</h2>
        <form>
          <label for="about">About: </label>
          <textarea name="about" id="about"></textarea>
          <h5>Technologies</h5>
          <div>
            <input type={"text"} name="technology" />
          </div>
        </form>
      </div>

      <div
        id="experience"
        style={{ display: selectedSection === "experience" ? "block" : "none" }}
      >
        <h2>Experience</h2>
        <div>
          <form>
            <label for="companyName">Company: </label>
            <input type={"text"} name="companyName" id="companyName" />

            <label for="companyLink">Company Link: </label>
            <input type={"text"} name="companyLink" id="companyLink" />

            <label for="title">Title: </label>
            <input type={"text"} name="title" id="title" />

            <label for="dateFrom">From: </label>
            <input type={"date"} name="dateFrom" id="dateFrom" />

            <label for="dateTo">To: </label>
            <input type={"date"} name="dateTo" id="dateTo" />
          </form>

          <h5>Responsiblities</h5>
          <div>
            <input type={"text"} name="responsibility" />
          </div>
        </div>
      </div>

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

      <div
        id="achievements"
        style={{
          display: selectedSection === "achievements" ? "block" : "none",
        }}
      >
        <h2>Achievements</h2>
        <div>
          <input type={"text"} name="achievement" />
          <input type={"date"} name="date" />
        </div>
      </div>

      <div
        id="social"
        style={{ display: selectedSection === "social" ? "block" : "none" }}
      >
        <h2>Social</h2>
        <div>
          <label for="name">Name: </label>
          <input type={"text"} name="name" />

          <label for="link">Link: </label>
          <input type={"text"} name="link" />

          <label for="logoLink">Logo Link: </label>
          <input type={"text"} name="logoLink" />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
