// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Pages/Home';
// // import About from './Pages/About';
// import Movies from './Pages/Movies';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
