import { useEffect, useState } from "react";

const Achievements = ({ selectedSection }) => {
  const [achievements, setAchievements] = useState([]);

  const updateAchievements = (newAchievements) => {
    setAchievements(newAchievements);
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/achievement", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateAchievements(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setAchievements({
      ...achievements,
      [e.target.name]: value,
    });
  };

  return (
    <div
      id="achievements"
      style={{
        display: selectedSection === "achievements" ? "block" : "none",
      }}
    >
      <h2>Achievements</h2>
      <div>
        {achievements.map((achievement) => {
          return (
            <form key={achievement.id}>
              <label htmlFor="achievement">Achievement: </label>
              <input
                type={"text"}
                name="achievement"
                value={achievement.achievement}
                onChange={handleChange}
              />

              <label htmlFor="date">Date: </label>
              <input
                type={"date"}
                name="date"
                value={achievement.date}
                onChange={handleChange}
              />
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
