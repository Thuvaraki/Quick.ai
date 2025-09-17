import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Testimonial from "../components/Testimonial";
import Plan from "../components/Plan";

const Home = () => {
  return (
    // <> </> fragment doesn’t add an extra <div> wrapper in the rendered HTML.
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
    </>
  );
};

export default Home;
