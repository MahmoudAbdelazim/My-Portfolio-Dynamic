const NavList = ({selectedSection, setSelectedSection}) => {
  return (
    <nav className="nav nav-pills nav-fill">
      <a
        className={
          selectedSection === "bio"
            ? "nav-item nav-link active"
            : "nav-item nav-link"
        }
        href="#bio"
        onClick={() => setSelectedSection("bio")}
      >
        Bio
      </a>
      <a
        className={
          selectedSection === "about"
            ? " nav-item nav-link active"
            : "nav-item nav-link"
        }
        href="#about"
        onClick={() => setSelectedSection("about")}
      >
        About
      </a>
      <a
        className={
          selectedSection === "experience"
            ? " nav-item nav-link active"
            : "nav-item nav-link"
        }
        href="#experience"
        onClick={() => setSelectedSection("experience")}
      >
        Experience
      </a>
    </nav>
  );
};

export default NavList;