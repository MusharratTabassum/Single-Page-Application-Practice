import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
            <Courses></Courses>

          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route >
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
      <div>
        <Footer></Footer>

      </div>




    </div>
  );
}

export default App;
