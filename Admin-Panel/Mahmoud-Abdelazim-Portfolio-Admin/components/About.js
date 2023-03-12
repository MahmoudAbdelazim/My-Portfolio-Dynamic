const About = ({selectedSection}) => {
  return (
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
  );
};

export default About;
