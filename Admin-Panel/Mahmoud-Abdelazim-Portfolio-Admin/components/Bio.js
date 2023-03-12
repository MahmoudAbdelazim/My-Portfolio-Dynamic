import { useEffect, useState } from "react";

const Bio = ({ selectedSection }) => {
  const [bio, setBio] = useState({ name: "", mainBio: "", detailedBio: "" });

  const updateBio = (newBio) => {
    setBio(newBio);
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/bio", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateBio(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setBio({
      ...bio,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(bio);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/bio", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      id="bio"
      style={{ display: selectedSection === "bio" ? "block" : "none" }}
    >
      <h2>Bio</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type={"text"}
          name="name"
          id="name"
          value={bio.name}
          onChange={handleChange}
        />

        <label htmlFor="mainBio">Main Bio: </label>
        <input
          type={"text"}
          name="mainBio"
          id="mainBio"
          value={bio.mainBio}
          onChange={handleChange}
        />

        <label htmlFor="detailedBio">Detailed Bio: </label>
        <input
          type={"text"}
          name="detailedBio"
          id="detailedBio"
          value={bio.detailedBio}
          onChange={handleChange}
        />
        <input type={"submit"} value="Save"></input>
      </form>
    </div>
  );
};

export default Bio;
