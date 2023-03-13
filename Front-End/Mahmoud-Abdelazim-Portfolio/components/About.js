import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({ aboutText: "", technologies: [] });

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/about", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setAbout(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="about" id="about">
      <div className="about-left">
        <h2 className="section-head">About Me</h2>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>
          {about.aboutText}
        </p>
        <ul className="technologies">
          {about.technologies.map((technology) => {
            return (
              <li key={technology.id} className="technology">
                {technology.technology}
              </li>
            );
          })}
        </ul>
      </div>
      <img className="my-image" src="/images/me.jpeg" />
    </div>
  );
};

export default About;
