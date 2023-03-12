const Achievements = ({ selectedSection }) => {
  return (
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
  );
};

export default Achievements;
