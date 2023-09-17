import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
};

const Home = () => {
  return <>Home</>;
};
const About = () => {
  return <>About</>;
};
const Contact = () => {
  return <>Contact</>;
};

const SimpleRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SimpleRoute;
