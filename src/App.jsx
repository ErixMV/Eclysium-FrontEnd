import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
/*
    ! WARNING: Using the module: hot-loader creates warnings in console.  
*/
import { hot } from "react-hot-loader";
import "./app.sass";
// import Header from "./components/Shared/Header"
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Access from "./components/pages/Access"
import Navbar from "./components/Shared/Navbar";
import Library from "./components/pages/Library";

function App() {

    return <Router>
        <Navbar />
        {/* <Header /> */}
        <div style={{ marginTop: "8vh", width: "100vw" }}></div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/library" component={Library} />
            <Route exact path="/login" component={Access} />
            {/* <Route component={ 404 } /> */}
        </Switch>
    </Router>
}

export default hot(module)(App);
// export default App;