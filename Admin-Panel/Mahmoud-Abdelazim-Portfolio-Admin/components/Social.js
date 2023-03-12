import { useEffect, useState } from "react";

const Social = ({ selectedSection }) => {
  const [social, setSocial] = useState([]);

  const updateSocial = (newSocial) => {
    setSocial(newSocial);
  };

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.baseIp + "/social", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        updateSocial(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSocial({
      ...social,
      [e.target.name]: value,
    });
  };

  return (
    <div
      id="social"
      style={{ display: selectedSection === "social" ? "block" : "none" }}
    >
      <h2>Social</h2>
      <div>
        {social.map((soc) => {
          return (
            <form key={soc.id}>
              <label htmlFor="name">Name: </label>
              <input
                type={"text"}
                name="name"
                value={soc.name}
                onChange={handleChange}
              />

              <label htmlFor="link">Link: </label>
              <input
                type={"text"}
                name="link"
                value={soc.link}
                onChange={handleChange}
              />

              <label htmlFor="logoLink">Logo Link: </label>
              <input
                type={"text"}
                name="logoLink"
                value={soc.logoLink}
                onChange={handleChange}
              />
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
