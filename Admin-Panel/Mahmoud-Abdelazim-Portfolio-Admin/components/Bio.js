const Bio = ({selectedSection}) => {
  return (
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
  );
};

export default Bio;
