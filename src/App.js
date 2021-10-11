import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Teacher from './components/Teacher/Teacher';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App bgcolor">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>


          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>

          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/teacher'>
            <Teacher></Teacher>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>

          </Route>


        </Switch>


      </Router>
      <Footer></Footer>



    </div>
  );
}

export default App;
