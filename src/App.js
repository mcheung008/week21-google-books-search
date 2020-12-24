import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import Billboard from './components/Billboard';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Billboard/>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
            {/* <Saved /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
