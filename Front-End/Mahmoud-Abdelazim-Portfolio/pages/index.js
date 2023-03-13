import About from "../components/About";
import Experience from "../components/Experience";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const IndexPage = () => {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <Experience />
      <div className="footer">&copy; Built By Mahmoud Abdelazim</div>
    </>
  );
};

export default IndexPage;
