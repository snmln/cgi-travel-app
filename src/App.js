// CGI-Travel-App
// Jul 29, 2021,
// Sean Malone

import "./App.css";
import Feed from './Componenets/Feed'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './Componenets/Details'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Feed} />
           <Route path="/travel/:id" exact component={Details} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
