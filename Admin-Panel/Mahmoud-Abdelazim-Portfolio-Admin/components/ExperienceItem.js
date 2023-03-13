import { useState } from "react";

const Responsibility = ({
  responsibility,
  handleChangeResponsibility,
  deleteResponsibility,
}) => {
  return (
    <div className="row">
      <div className="col-md-10">
        <input
          type={"text"}
          name="responsibility"
          className="form-control"
          value={responsibility.responsibility}
          onChange={(e) =>
            handleChangeResponsibility(responsibility.id, e.target.value)
          }
        />
      </div>
      <div className="col-md-2">
        <button
          className="btn btn-danger"
          onClick={(e) => {
            deleteResponsibility(responsibility.id, e);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ExperienceItem = ({ expItem, saveExperience, deleteExperience, msg }) => {
  const [exp, setExp] = useState(expItem);

  const [newResponsibility, setNewResponsibility] = useState({
    responsibility: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setExp({
      ...exp,
      [e.target.name]: value,
    });
  };

  const handleChangeResponsibility = (respId, value) => {
    let newExp = { ...exp, responsibilities: [] };
    exp.responsibilities.forEach((resp) => {
      if (resp.id != respId) {
        newExp.responsibilities.push(resp);
      } else {
        newExp.responsibilities.push({ id: respId, responsibility: value });
      }
    });
    console.log(newExp);
    setExp(newExp);
  };

  const addResponsibility = (e) => {
    e.preventDefault();
    let newExp = { ...exp };
    newExp.responsibilities.push(newResponsibility);
    setExp(newExp);
    console.log(newExp);
  };

  const deleteResponsibility = (respId, e) => {
    e.preventDefault();
    let newExp = { ...exp, responsibilities: [] };
    exp.responsibilities.forEach((resp) => {
      if (resp.id != respId) newExp.responsibilities.push(resp);
    });
    setExp(newExp);
  };

  return (
    <div className="card">
      <form className="form-group" onSubmit={(e) => saveExperience(exp, e)}>
        <label htmlFor="companyName">Company: </label>
        <input
          type={"text"}
          name="companyName"
          id="companyName"
          className="form-control"
          value={exp.companyName}
          onChange={handleChange}
        />

        <label htmlFor="companyLink">Company Link: </label>
        <input
          type={"text"}
          name="companyLink"
          id="companyLink"
          className="form-control"
          value={exp.companyLink}
          onChange={handleChange}
        />

        <label htmlFor="title">Title: </label>
        <input
          type={"text"}
          name="title"
          id="title"
          className="form-control"
          value={exp.title}
          onChange={handleChange}
        />

        <label htmlFor="dateFrom">From: </label>
        <input
          type={"date"}
          name="dateFrom"
          id="dateFrom"
          className="form-control"
          value={exp.dateFrom}
          onChange={handleChange}
        />

        <label htmlFor="dateTo">To: </label>
        <input
          type={"date"}
          name="dateTo"
          id="dateTo"
          className="form-control"
          value={exp.dateTo}
          onChange={handleChange}
        />

        <h5>Responsiblities</h5>
        <div className="form-group">
          {exp.responsibilities.map((responsibility) => {
            return (
              <Responsibility
                key={responsibility.id}
                responsibility={responsibility}
                handleChangeResponsibility={handleChangeResponsibility}
                deleteResponsibility={deleteResponsibility}
              />
            );
          })}

          <div className="form-group">
            <div className="row">
              <div className="col-md-10">
                <input
                  type={"text"}
                  className="form-control"
                  value={newResponsibility.responsibility}
                  onChange={(e) =>
                    setNewResponsibility({ responsibility: e.target.value })
                  }
                />
              </div>
              <div className="col-md-2">
                <button className="btn btn-success" onClick={addResponsibility}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <input
          type={"submit"}
          value={exp.id ? "Save Experience" : "Add Experience"}
          className="btn btn-primary"
        />
        <br />
        <button
          className="btn btn-danger"
          style={{ display: exp.id ? "default" : "none" }}
          onClick={(e) => deleteExperience(exp, e)}
        >
          Delete Experience
        </button>
      </form>
      <p className="text-success" style={{ textAlign: "center" }}>
        {msg}
      </p>
    </div>
  );
};

export default ExperienceItem;
