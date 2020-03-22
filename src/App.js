import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Events from './pages/Events';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PrivateRoute from './pages/PrivateRoute';
import { getProfile } from './store/actions/user';

import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/fileupload";
import AddEvents from './components/App';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.props.getProfile().finally(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (this.state && this.state.isLoading === false) {
      return (
        <div>
          <Router>
          <Switch>
            {/* website header */}
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/login" component={Login} />

            {/* dashboard sidebar*/}
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path='/index' component={Index}/>
            <PrivateRoute path='/add' component={AddPage} />
            <PrivateRoute path='/edit/' component={EditPage} />
            <PrivateRoute path='/fileupload/' component={FileUploadPage} />
            <PrivateRoute path='/addevents' component={AddEvents} />
            <PrivateRoute path='*' component={NotFound} />
          </Switch>
          </Router>
        </div>
      )
    } else {
      return (
        <div>Loading..</div>
      )
    }
  }
}

export default connect(null, { getProfile })(App);
