import './App.css';
import logo from './img/logo.png';
import Home from './component/Home';
import Contact from './component/Contact';
import History from './component/History';
import Service from './component/Service';
import { Navbar, Nav, Container} from 'react-bootstrap';

function App() {
  const nav_item = {
    fontFamily: ['Montserrat', 'sans-serif'],
    fontSize: 20,
    color: 'whitesmoke',
  }

  function scrollComponent(comp) {
    const element = document.getElementById(comp);
    element.scrollIntoView();
  }
  return (
    <div className='App'>
      <Navbar
      sticky="top" bg="dark" expand='lg' variant="dark">
        <Container >
          <Navbar.Brand>
            <img src={logo} alt="logo" style={ {height: '15vh'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-nabar-nav' style={ {color: 'whitesmoke'} } />
          <Navbar.Collapse id='basic-nabar-nav'>
            <Nav className='nav-item'>
              <Nav.Link style={ nav_item } onClick={() =>scrollComponent('home')}>Home</Nav.Link>
              <Nav.Link style={ nav_item } onClick={() =>scrollComponent('history')}>History</Nav.Link>
              <Nav.Link style={ nav_item } onClick={() =>scrollComponent('service')}>Service</Nav.Link>
              <Nav.Link style={ nav_item } onClick={() =>scrollComponent('contact')}>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id='home'>
        <Home/>
      </div>
      <div id='history'>
        <History/>
      </div>
      <div id='service'>
        <Service/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
