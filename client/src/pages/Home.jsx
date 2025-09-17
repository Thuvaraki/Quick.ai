import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";

const Home = () => {
  return (
    // fragment doesn’t add an extra <div> wrapper in the rendered HTML.
    <>
      <Navbar />
      <Hero />
      <AiTools />
    </>
  );
};

export default Home;
