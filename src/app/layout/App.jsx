import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDash from "../../features/events/EventDash/EventDash";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/events/EventForm/EventForm";
import SettingsDash from "../../features/user/Settings/SettingsDash";
import UserDetailed from "../../features/user/UserDetailed/UserDetailedPage";
import PeopleDash from "../../features/user/PeopleDash/PeopleDash";
import EventDetailedPage from "../../features/events/EventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import TestComponent from "../../features/test/TestComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDash} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDash} />
                  <Route path="/profile/:id" component={UserDetailed} />
                  <Route path="/settings" component={SettingsDash} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
