import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    // fragment doesn’t add an extra <div> wrapper in the rendered HTML.
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
