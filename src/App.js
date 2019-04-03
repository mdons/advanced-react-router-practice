import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import BrowserRouter from "react-router-dom";
import Switch from "react-router-dom";
import Route from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import Profiles from "./components/Profiles";
import Marquee from "./components/Marquee";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">
          <nav
            className="navbar navbar-inverse navbar-fixed-top"
            role="navigation"
          >
            <TopNav />
            <SideNav />
          </nav>
          <div style={{ backgroundColor: "white" }}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/charts" component={Charts} />
              <Route path="/tables" component={Tables} />
              <Route path="/settings" component={Settings} />
              <Route path="/wall" component={Wall} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/marquee/:text" component={Marquee} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
