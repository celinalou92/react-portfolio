import About from './components/pages/About';
import NavBar from './components/NavBar';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/assets/styles/styles.css'


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/react-portfolio' component={About}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
