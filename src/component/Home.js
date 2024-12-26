import logo from '../img/logo.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home">
        <h1 className='welcome'>WELCOME</h1>
        <img className="img" src={logo} alt="logo" />
    </div>
  );
}

export default Home;