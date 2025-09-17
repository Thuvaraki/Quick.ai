import Navbar from "../components/Navbar";

const Home = () => {
  return (
    // fragment doesn’t add an extra <div> wrapper in the rendered HTML.
    <>
      <Navbar />
    </>
  );
};

export default Home;
