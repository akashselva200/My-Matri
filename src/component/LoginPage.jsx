import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles001.css';
import '../css/stylsheet.css';
import Header from './Header';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!username || !password) {
      setErrorMsg('Enter Member ID / Email and Password');
      return;
    }

    try {
      const isEmail = username.includes('@');
      let user = null;

      if (!isEmail) {
        const res = await fetch(`http://localhost:3001/users?id=${encodeURIComponent(username.trim())}`);
        if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
        const data = await res.json();
        user = Array.isArray(data) ? data[0] : data;
      } else {
        const res = await fetch('http://localhost:3001/users');
        if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
        const data = await res.json();
        const lower = username.trim().toLowerCase();
        user = data.find(u =>
          (u.schemeDetails?.username && String(u.schemeDetails.username).toLowerCase() === lower) ||
          (u.contactDetails?.Email && String(u.contactDetails.Email).toLowerCase() === lower)
        );
      }

      if (!user) {
        setErrorMsg('User not found');
        return;
      }

      const storedPassword = String(
        user.password ??
        user.schemeDetails?.password ??
        user.schemeDetails?.pass ??
        user.schemeDetails?.pwd ??
        ''
      ).trim();

      if (storedPassword !== String(password).trim()) {
        setErrorMsg('Invalid password');
        return;
      }

      // persist and navigate to profile (now route without id in URL)
      localStorage.setItem('loggedUserId', String(user.id));
      // navigate to /MyProfile (MyProfile will read id from localStorage)
      navigate('/MyProfile');
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg('Login failed. Ensure json-server is running and db.json is valid.');
    }
  };

  return (
    <div className="login-container" style={{ fontFamily: 'Arial, sans-serif' }}>

        {/* Header Section */}
        <Header />

      {/* Login Section */}
      <div style={{
        display: 'flex',
        maxWidth: '976px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#FFFF84',
        marginTop: '15px',
        borderRadius: '8px'
      }}>
        {/* Welcome Text */}
        <div style={{ flex: 2, paddingRight: '15px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '20px', color: 'green' }}>தில்லை மேட்ரிமோனி</h2>
          <p style={{ fontWeight: 'bold', color: '#990000' }}>
            திருமண விளமபர இணையதளம் உங்களை அன்புடன் வரவேற்கிறது
          </p>
          <div style={{ fontSize: '14px', color: 'red', marginTop: '10px', lineHeight: '24px' }}>
            குறிப்பு : விளம்பர கட்டணம் செலுத்தாத வரன் விபரங்கள் விளம்பரம் செய்ய இயலாது.
            <br />
            செலுத்திய விளம்பர கட்டணம் திருப்பி பெற முடியாது.
            <br />
            திருமணம் முடிந்தவர்கள் வேறு எந்த கட்டணமோ கமிஷனோ செலுத்த தேவை இல்லை.
            <br />
            திருமண அழைப்பிதழில் நன்றி செலுத்த நினைத்தால் ; நன்றி : தில்லை மேட்ரிமோனி,
            9 .புது தெரு (BSNL பக்கத்தில்) செய்யாறு–604407
            <br />
            <strong>www.thillaimatrimony.org | Cell: 9489331973</strong>
          </div>
        </div>

        {/* Login Form */}
        <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: '#69AF00', fontFamily: 'Georgia', fontWeight: 'bold', fontSize: '20px' }}>Login Details</h3>
          <form onSubmit={handleLoginSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label className="Label">Member ID / Email</label>
              <br />
              <input
                type="text"
                value={username}
                className="TextBox"
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '5px', fontSize: '16px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label className="Label">Password</label>
              <br />
              <input
                type="password"
                value={password}
                className="TextBox"
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '5px', fontSize: '16px' }}
              />
              <div style={{ textAlign: 'right', marginTop: '5px' }}>
                <a href="#forgot" style={{ fontSize: '12px', color: 'red' }}>Forgot Password?</a>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMsg}</div>}

            <div style={{ textAlign: 'right' }}>
              <button type="submit" style={{
                backgroundColor: '#990000',
                color: 'white',
                fontWeight: 'bold',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#f5f5dc',
        marginTop: '40px',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '3px solid #ccc'
      }}>
        <p style={{ fontSize: '15px', color: '#333' }}>Thillai Matrimony</p>
        <p style={{ fontSize: '14px', color: '#555' }}>No.9, New Street (Near BSNL Office), Cheyyaru - 604 407</p>
        <p style={{ fontSize: '14px' }}>
          <strong><span style={{ color: '#000099' }}>Phone: </span>+91-9489 33 1973</strong>
        </p>
        <p style={{ fontSize: '14px' }}>
          <strong><span style={{ color: '#000099' }}>Email: </span>
            <a href="mailto:dumdumdummarriage@gmail.com" className="link">
              dumdumdummarriage@gmail.com
            </a></strong>
        </p>
        <p style={{ color: '#69AF00', fontSize: '20px', fontWeight: 'bold' }}>SUBAM</p>
      </div>
    </div>
  );
}

export default LoginPage;
