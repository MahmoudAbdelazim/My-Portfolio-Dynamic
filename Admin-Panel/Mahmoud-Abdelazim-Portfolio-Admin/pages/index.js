import { useState } from "react";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Bio from "../components/Bio";
import Experience from "../components/Experience";
import NavList from "../components/NavList";
import Projects from "../components/Projects";
import Social from "../components/Social";

const IndexPage = () => {
  const [selectedSection, setSelectedSection] = useState("bio");

  return (
    <>
      <NavList
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />

      <Bio selectedSection={selectedSection} />

      <About selectedSection={selectedSection} />

      <Experience selectedSection={selectedSection} />

      <Projects selectedSection={selectedSection} />

      <Achievements selectedSection={selectedSection} />

      <Social selectedSection={selectedSection} />
    </>
  );
};

export default IndexPage;
