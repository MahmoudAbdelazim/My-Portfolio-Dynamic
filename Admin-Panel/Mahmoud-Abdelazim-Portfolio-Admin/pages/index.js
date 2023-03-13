import { useState } from "react";
import About from "../components/About";
import Bio from "../components/Bio";
import Experience from "../components/Experience";
import NavList from "../components/NavList";

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
    </>
  );
};

export default IndexPage;
