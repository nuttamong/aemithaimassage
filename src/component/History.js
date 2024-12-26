import '../styles/History.css';
import img from '../img/massage-budapest.jpg';
import { useMediaQuery } from 'react-responsive';

function History() {
  const desktopStyle = {
    display: "flex",
    flexDirection: 'row',
  }

  const tabletStyle = {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
  }
  const isDesktopOrLaptop = useMediaQuery(
    {minWidth: 1100}, undefined
  )

  const isTableOrMobile = useMediaQuery({ query: '(max-width: 1100px)'})

  const content = [
      <div key={1} style={{padding: 30}}>
          <img src={img} alt="logo" style={ {height: '50vh'}} />
      </div>,
      <div key={2} style={{padding: 30}}>
        <h4>Traditionelle Thai-Massage und Spa-Massage</h4>
        <p>Die traditionelle Thai-Massage und die Spa-Massage haben je nach verwendeten Hilfsmitteln positive Auswirkungen auf den Körper. Unser Geschäft bietet verschiedene Arten von Massagen an, darunter:</p>
        <p> 1.	Traditionelle Thai-Massage</p>
        <p> 2.	Ölmassage</p>
        <p> 3.	Hot-Stone-Massage</p>
        <p> 4.	Spa-Behandlungen</p>
        <p>Jede Massagetechnik hat ihre eigenen Vorteile, trägt jedoch insgesamt zur Gesundheit des Körpers bei, z. B.:</p>
        <p> •	 Förderung der Entspannung und Stressabbau</p>
        <p> •	 Linderung von Schmerzen</p>
        <p> •	 Verbesserung des Schlafs</p>
        <p> •	 Förderung der Durchblutung</p>
      </div>
  ]
  
  return (
    <div className='wrapper'>
      <h1>History</h1>
      {isDesktopOrLaptop && <div style={desktopStyle}>
        {content}
      </div>}
      {isTableOrMobile && <div style={tabletStyle}>
        {content}
      </div>}
    </div>
  );
}

export default History;