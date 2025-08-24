import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <header>

     {/* Welcome Banner */}
      <marquee behavior="scroll" loop="3" scrollamount="5" style={{ backgroundColor: '#FFFDF7', padding: '8px', fontWeight: 'bold', fontSize: '18px', color: '#3366FF' }}>
        Welcome To Sornam Matrimony — <span style={{ color: 'maroon' }}>Advertising Matrimony Services</span>, <span style={{ color: 'green' }}>NO USER ID, NO PASSWORD</span>, <span style={{ color: 'purple' }}>FREE unlimited PROFILE view</span>, <span style={{ color: 'orange' }}>NO SERVICE CHARGES</span>, <span style={{ color: 'red' }}>NO RENEWAL Fees</span>, DIRECT CONTACT, <span style={{ color: 'green' }}>Just ₹1000 Only</span>. Call: 9489 33 1973
      </marquee>
      
        {/* Logo and Whatsapp */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 1100,
            margin: '3px auto 0 auto',
            padding: '1px 1px 1px 60px',
            transform: 'scale(1.05)'
          }}
        >
          <img src="/img/sornam-logo.png" width="590" className="radius" alt="Sornam Logo" />
          <img src="/img/sornam-Whatsappno.png" width="360" className="radius" alt="Whatsapp" />
        </div>

        {/* Navigation Bar */}
        <nav style={{ width: 1200, margin: '10px auto', fontWeight: 'bold', fontSize: '16px'}}>
          <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, background: '#990000', borderRadius: 6, margin: 0 }}>
            <li><Link className="mainlink" to="/" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Home</Link> </li>
            <li><Link className="mainlink" to="/search" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Search</Link></li>
            <li><Link className="mainlink" to="/registration" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Registration</Link> </li>
            <li><Link className="mainlink" to="/download-form" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Download Form</Link></li>
            <li><Link className="mainlink" to="/login" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Login</Link></li>
            <li><Link className="mainlink" to="/services" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Services</Link></li>  
            <li><Link className="mainlink" to="/schemes" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Schemes & Features</Link></li>
            <li><Link className="mainlink" to="/payment-options" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Payment Options</Link></li>
            <li><Link className="mainlink" to="/contact-us" style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', display: 'inline-block' }}>Contact Us</Link></li>
          </ul>
        </nav>

   </header>
  );
}

export default Header;