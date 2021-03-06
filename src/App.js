import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
//import {AppBar} from "@material-ui/core/AppBar";
import {CircularProgress} from '@material-ui/core'
import AnimationCanvas from "./views/animationcanvas";
import { Suspense } from "react";
// import Home from "./views/home";
import Mutants from "./views/mutants";

function App() {
  return (
    <div>
      <Router>
        <nav
          className={"d-flex justify-content-center align-items-center flex-row flex-wrap"}
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            boxShadow: '0 0 3vh deepskyblue',
            height: '15vh',
            position: 'static'
          }}
        >
          <h4 style={{ margin: "0 5vw" }}>
            Jarvis 2.0... Enhanced Entity Server
          </h4>
          <div className={"d-flex flex-row flex-wrap justify-content-between align-items-center"}>
             {/* <Link
              to={"home"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw", width: '7rem' }}
            >
              Home
            </Link> */}
            <Link
              to={"server"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw", width: '7rem'}}
            >
             Server
            </Link>

            <a
              href={"https://www.marvel.com"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw", width: '7rem' }}
            >
              Marvel
            </a>
            <a
              href={"mailto:tony.miller@blackthought.tech"}
              className="btn btn-outline-dark"
              style={{ color: "#666", margin: "2vh 3vw", width: '7rem' }}
            >
              Connect
            </a>
          </div>
        </nav>
        <div className="animation-wrapper">
          <Suspense fallback={<CircularProgress />}>
            <AnimationCanvas />
          </Suspense>
          <Switch>
             {/* <Route path={"/home"} component={Home} /> */}
            <Route path={"/server"} component={Mutants} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
