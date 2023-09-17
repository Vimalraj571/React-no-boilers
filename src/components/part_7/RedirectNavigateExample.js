import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

const Layout = () => {
  // 2.
  const navigate = useNavigate();
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
      <li>
        <Link to="/redirect">Redirect</Link>
      </li>
      {/* .2 */}
      <button onClick={() => navigate("/redirect")}>Error Redirect</button>
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
const ErrorPage = () => {
  return <>Error</>;
};

const RedirectExample = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error-page" element={<ErrorPage />} />
            {/* 1. */}
            <Route path="/redirect" element={<Navigate to="/error-page" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RedirectExample;
