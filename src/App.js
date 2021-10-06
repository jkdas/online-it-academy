import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Enroll from './components/Enroll/Enroll';
import Footer from './components/Footer/Footer';
import Instructors from './components/Instructors/Instructors';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home> </Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/course/:id">
            <Enroll></Enroll>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
