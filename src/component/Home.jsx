import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


function SornamMatrimony() {
  const [rainbowColor, setRainbowColor] = useState('red');
  const [regNo, setRegNo] = useState('');
  const navigate = useNavigate();

  // Rainbow text animation
  useEffect(() => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = 0;
    const interval = setInterval(() => {
      setRainbowColor(colors[i % colors.length]);
      i++;
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Login form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    if (form.txtusername && form.txtusername.value.trim() === '') {
      alert('Username can not be blank');
      form.txtusername.focus();
      return;
    }
    if (form.txtpassword && form.txtpassword.value.trim() === '') {
      alert('Password can not be blank');
      form.txtpassword.focus();
      return;
    }

    // Proceed with login logic here
  };


  // Registration number search submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (regNo.trim()) {
      navigate(`/profile/${regNo}`);
    } else {
      alert('Please enter a valid registration number');
    }
  };
  
  return (
    <div className="bgcolor" style={{ display: 'flex', maxWidth: 2500, margin: '2px 2px 2px 2px', padding: '2px 2px 2px 2px'}}>
      <form
        name="form1"
        method="post"
        action="https://sornammatri.com"
        className="indexform"
        id="form1"
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
       
        <Header />

        {/* Main Content Wrapper */}
        <div style={{ display: 'flex', margin: '25px auto 0 auto', gap: 22 }}>
          {/* Left Side */}
          <div style={{ flex: 2 }}>
            <marquee className="welcometxt" width="1280px" loop={3} style={{ backgroundColor: '#FFFDF7', padding: '0.1px', fontWeight: 'bold', fontSize: '18px', color: '#1a964eff', width: 1250 }}>
              சொர்ணம் மேட்ரிமோனி இலவச தொடர்பு மையம், முழு ஜாதக விபரத்துடன் புகைப்படம் தொலைபேசி எண்ணை விளம்பரம் செய்யும் ஒரே திருமண விளமபர இணையத்தளம், திருமணம் முடியும் வரை விளம்பரம் செய்ய ருபாய் Rs599 மட்டுமே. 
              வேறு எந்த கட்டணமோ, கமிஷனோ இல்லை, இந்த வெளிப்படையான சேவையை உங்கள் உறவினர்களுக்கும், நண்பர்களுக்கும் எடுத்து சொல்லி நமது சமுதாய வரன்களை அதிகமாக்கி விரைவாக திருமணம் முடியுங்கள், வாழ்க வளமுடன். சொர்ணம் மேட்ரிமோனி, 107A, Anbu nagar, Achariyapuram, Puducherry, செல்: 8056 484897
            </marquee>

            <div className="tamil" style={{ textAlign: 'center', margin: '10px 0' }}>
              <a href="https://en.wikipedia.org/wiki/Murugan" target="_blank" rel="noopener noreferrer">
                <img src="/images/muruganValliDeivanai.png" alt="Murugan Valli Deivanai" className="radius" style={{ width: 660, height: 300, maxWidth: '100%', marginBottom: 14 }} />
              </a>
            </div>

            <div style={{ textAlign: 'center', margin: '25px 0' }}>
              <span
                id="rainbowText"
                style={{
                  fontSize: 23,
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  color: rainbowColor,
                }}
              >
                <i>Welcome To Sornam Matrimony</i>
              </span>
            </div>
            <div style={{ textAlign: 'center', margin: '25px 0' }}>
              <img src="/images/muruganmarriage.png" className="radius" style={{ width: 660, height: 350, maxWidth: '100%' }} alt="Murugan Marriage" />
            </div>
            <div style={{ textAlign: 'center', margin: '25px 0' }}>
              <img src="/images/peacock.png" className="radius" style={{ width: 660, height: 660, maxWidth: '100%' }} alt="Peacock" />
            </div>
          </div>

          {/* Right Side / Sidebar */}
          <div className="sidebar-sections-container" style={{ flex: 1  }}>
            {/* Quick Search */}
            <section className="quick-search-section">
              <div className="Wedding" style={{ textAlign: 'center', marginBottom: 1, padding: 10, fontWeight: 'bold', fontSize: 18, color: '#ffffffff' }} >Quick Search</div>
              <div className="border" style={{ background: "#fff", padding: 10, borderRadius: 10, textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <table>
                  <tbody>
                    <tr>
                      <td className="Label">Gender:</td>
                      <td>
                        <select name="DropDownList1" id="DropDownList1" className="select">
                          <option value="Any">Any</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="Label">Language:</td>
                      <td>
                        <select name="DropDownList2" id="DropDownList2" className="select">
                          <option value="Any">Any</option>
                          <option value="Tamil">Tamil</option>
                          <option value="Telugu">Telugu</option>
                          <option value="Malayalam">Malayalam</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="Label">Caste:</td>
                      <td>
                        <select name="DropDownList3" id="DropDownList3" className="select">
                          <option value="Any">Any</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="Label">Subcaste:</td>
                      <td>
                        <select name="DropDownList4" id="DropDownList4" className="select">
                          <option value="Any">Any</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: 'right' }}>
                        <input type="image" name="ImageButton1" src="/images/Search_Btn.png" style={{ width: 120 }} alt="Search" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Search By Registration No */}
            <section className="search-regno-section" style={{ marginBottom: 15 }}>
      <div
        className="Wedding"
        style={{ textAlign: 'center', marginBottom: 1, padding: 10, fontWeight: 'bold', fontSize: 18, color: '#ffffffff' }}
      >
        Search By Online Reg. No.
      </div>
      <form
        onSubmit={handleSubmit}
        className="border"
        style={{
          background: '#fff',
          padding: 10,
          borderRadius: 10,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td className="Label">Profile Reg. No.</td>
              <td>
            
                <input
                
                  type="text"
                  className="TextBox"
                  style={{ width: 165 }}
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="Enter registration number"
                  required
                />
                
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ textAlign: 'right' }}>
                <button type="submit">Search</button>
              </td>
              
            </tr>
            
          </tbody>
        </table>
      </form>
    </section>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 15 }}>
              <img src="/IMG-20200729-WA0269.jpg" width={120} className="radius" alt="" />
              <img src="/IMG-20200729-WA0270.jpg" width={120} className="radius" alt="" />
            </div>
            <div style={{ textAlign: 'center', marginBottom: 18 }}>
              <a href="https://www.instamojo.com/@sornammatrimonycom/ld661a9b6a16f44309f4eb720d325fe19/" target="_blank" rel="noopener noreferrer">
                <img src="/images/Online-Payment.jpg" width={230} className="radius" style={{ border: "2px solid #0004fd" }} alt="Online Payment" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom 'சுபம்' image */}
        <div style={{ textAlign: 'center', margin: '36px 0 16px' }}>
          <img src="/images/சுபம்.png" style={{ maxWidth: '100%' }} alt="சுபம்" />
        </div>
      </form>
    </div>
   
  );
}

export default SornamMatrimony;