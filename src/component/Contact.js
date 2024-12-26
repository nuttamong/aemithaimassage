import logo from '../img/logo.png';
import owner from '../img/owner.jpg';
import '../styles/Contact.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Contact() {
  const desktopStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }

  const tabletStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  }
  const isDesktopOrLaptop = useMediaQuery(
    {minWidth: 1100}, undefined
  )

  const isTableOrMobile = useMediaQuery({ query: '(max-width: 1100px)'})

  const content = [
    <img key={1} className="img" src={logo} alt="logo" />,
    <div key={2} className='flex-item'>
      <h3>Öffnungszeiten</h3>
      <p><IoMdTime /> Montag - Freitag 10:00 - 19:00 Uhr</p>
      <p><IoMdTime /> Samstag 10:00 - 17:00 Uhr</p>
    </div>,
    <div key={3} className='flex-item'>
      <h3>Anschrift</h3>
      <p>Aemi’s Thaimassage</p>
      <p><FaMapLocationDot /> Westerwaldstraße 10, 35745 Herborn</p>
      <p><FaPhoneAlt /> Tel. 027724761673</p>
      <Button className='btn btn-success btn-lg btn-block' href='https://maps.app.goo.gl/pQ6Z9R9gY8j71Zjv6?g_st=ic' target='_blank'>Google Map</Button>
    </div>,
    <div key={4} className='flex-item'>
      <img className="img-owner" src={owner} alt="owner" />
    </div>
  ]

  return (
    <div className='Contact'>
      {isDesktopOrLaptop && <div style={desktopStyle}>
        {content}
      </div>}
      {isTableOrMobile && <div style={tabletStyle}>
        {content}
      </div>}
    </div>
  );
}

export default Contact;