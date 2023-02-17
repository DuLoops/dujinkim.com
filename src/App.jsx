import Main from "./pages/Main";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-223259595-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  ReactGA.pageview(window.location.pathname);
  return (
    <div className="app">
      <Main />
    </div>
  );
};

export default App;
