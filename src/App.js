import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import { AppBar, CircularProgress } from "@material-ui/core";
import AnimationCanvas from "./views/animationcanvas";
import { Suspense } from "react";
import Home from "./views/home";
import Mutants from "./views/mutants";

function App() {
  return (
    <div>
      <Router>
        <AppBar
          className={"d-flex justify-content-center, flex-row, flex-wrap"}
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2 style={{ padding: "1.5vh 0" }}>
            Jarvis 2.0... online and ready, sir...
          </h2>
          <div className={"d-flex flex-row flex-wrap justify-content-between"}>
            <Link
              to={"home"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw" }}
            >
              Home
            </Link>
            <Link
              to={"mutants"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw" }}
            >
              Mutants
            </Link>

            <a
              href={"https://www.marvel.com"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw" }}
            >
              Marvel
            </a>
            <a
              href={"mailto:tony.miller@blackthought.tech"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw" }}
            >
              Connect
            </a>
          </div>
        </AppBar>
        <div className="animation-wrapper">
          <Suspense fallback={<CircularProgress />}>
            <AnimationCanvas />
          </Suspense>
          <Switch>
            <Route path={"/home"} component={Home} />
            <Route path={"/mutants"} component={Mutants} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
