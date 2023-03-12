const Experience = ({selectedSection}) => {
  return (
    <div
        id="experience"
        style={{ display: selectedSection === "experience" ? "block" : "none" }}
      >
        <h2>Experience</h2>
        <div>
          <form>
            <label for="companyName">Company: </label>
            <input type={"text"} name="companyName" id="companyName" />

            <label for="companyLink">Company Link: </label>
            <input type={"text"} name="companyLink" id="companyLink" />

            <label for="title">Title: </label>
            <input type={"text"} name="title" id="title" />

            <label for="dateFrom">From: </label>
            <input type={"date"} name="dateFrom" id="dateFrom" />

            <label for="dateTo">To: </label>
            <input type={"date"} name="dateTo" id="dateTo" />
          </form>

          <h5>Responsiblities</h5>
          <div>
            <input type={"text"} name="responsibility" />
          </div>
        </div>
      </div>
  )
}

export default Experience;