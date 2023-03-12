const Social = ({ selectedSection }) => {
  return (
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
  );
};

export default Social;
