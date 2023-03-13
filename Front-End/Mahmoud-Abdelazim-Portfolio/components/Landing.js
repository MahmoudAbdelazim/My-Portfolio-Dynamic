import { useEffect, useState } from "react";

const Landing = () => {
  const [bio, setBio] = useState({name: '', mainBio: '', detailedBio: ''})

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/bio", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setBio(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="landing">
      <p className="landing-p">Hi, my name is</p>
      <h1 className="landing-name">{bio.name}</h1>
      <h2 className="main-bio">{bio.mainBio}</h2>
      <p className="detailed-bio">{bio.detailedBio}</p>
    </div>
  );
};

export default Landing;
