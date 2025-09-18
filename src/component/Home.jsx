import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../css/styles001.css';

function SornamMatrimony() {

  const [regNo, setRegNo] = useState('');
  const navigate = useNavigate();


  // Registration number search submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = regNo.trim();
    if (id) {
      navigate(`/profile/${id}`); // programmatic navigation
    }
  };

  return (
    
    <div className="bgcolor">
      <div className="indexform" id="form1">
        <Header />

        {/* Main Content Wrapper */}
        <div className="main-content">
          {/* Left Side */}
          <div className="main-left">
            <marquee className="welcometxt" loop={3}>
              சொர்ணம் மேட்ரிமோனி இலவச தொடர்பு மையம், முழு ஜாதக விபரத்துடன் புகைப்படம் தொலைபேசி எண்ணை விளம்பரம் செய்யும் ஒரே திருமண விளமபர இணையத்தளம், திருமணம் முடியும் வரை விளம்பரம் செய்ய ருபாய் Rs599 மட்டுமே.
              வேறு எந்த கட்டணமோ, கமிஷனோ இல்லை, இந்த வெளிப்படையான சேவையை உங்கள் உறவினர்களுக்கும், நண்பர்களுக்கும் எடுத்து சொல்லி நமது சமுதாய வரன்களை அதிகமாக்கி விரைவாக திருமணம் முடியுங்கள், வாழ்க வளமுடன். சொர்ணம் மேட்ரிமோனி, 107A, Anbu nagar, Achariyapuram, Puducherry, செல்: 8056 484897
            </marquee>

            <div className="image-block">
              <a href="https://en.wikipedia.org/wiki/Murugan"  >
                <img src="/images/muruganValliDeivanai.png" className="radius" />
              </a>
            </div>

            <div className="rich-bright-text-wrapper">
              <span
                id="richBrightText"
                style={{
                  background: "linear-gradient(90deg, #ff512f, #f9d423, #f9311fff, #fff278ff, #f97153ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
      fontSize: "2.5rem",
      letterSpacing: "2.5px",
      transition: "transform 0.25s cubic-bezier(.17,.67,.83,.67)",
      display: "inline-block"
    }}
    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.06)")}
    onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
  >
    <i>Welcome To Sornam Matrimony</i>
  </span>
</div>



            <div className="image-block">
              <img src="/images/muruganmarriage.png" className="radius" alt="Murugan Marriage" />
            </div>

            <div className="image-block">
              <img src="/images/peacock.png" className="radius" alt="Peacock" />
            </div>
          </div>

          {/* Right Side / Sidebar */}
          <div className="main-right sidebar-sections-container">
            {/* Quick Search */}
            <section className="quick-search-section">
              <div className="Wedding">Quick Search</div>
              <form className="border" action="http://localhost:3000/search" method="GET">
                <table>
                  <tbody>
                    <tr>
                      <td className="Label">Gender:</td>
                      <td>
                        <select name="gender" id="gender" className="select">
                          <option value="Any">Any</option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="Label">Language:</td>
                      <td>
                        <select name="language" id="language" className="select">
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
                        <select name="caste" id="caste" className="select">
                          <option value="Any">Any</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="Label">Subcaste:</td>
                      <td>
                        <select name="subcaste" id="subcaste" className="select">
                          <option value="Any">Any</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: 'right' }}>
                        <button className="btn btn-primary" type="submit" style={{ background: 'none', border: 'none', padding: 0 }}>
                          <img src="/images/Search_Btn.png" style={{ width: 130 }} alt="Search" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </section>

            {/* Registration Number Search */}
            <section className="search-regno-section">
              <div className="Wedding">Search By Online Reg. No.</div>
              <form onSubmit={handleSubmit} className="border">
                <table>
                  <tbody>
                    <tr>
                      <td className="Label">Profile Reg. No.</td>
                      <td>
                        <input
                          type="text"
                          className="TextBox"
                          value={regNo}
                          onChange={(e) => setRegNo(e.target.value)}
                          placeholder="Enter registration No."
                          maxLength={20}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ textAlign: 'right' }}>
                        <button type="submit" style={{ background: 'none', border: 'none', padding: 0 }}>
                          <img src="/images/Search_Btn.png" style={{ width: 130 }} alt="Search" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </section>

            <div className="payment-block">
              <a
                href="https://www.instamojo.com/@sornammatrimonycom/ld661a9b6a16f44309f4eb720d325fe19/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/Online-Payment.jpg" width={230} className="radius" alt="Online Payment" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom 'சுபம்' image */}
        <div className="subam-container">
          <img src="/images/சுபம்.png" className="subam-img" alt="சுபம்" />
        </div>
      </div>
    </div>
    
  );
}

export default SornamMatrimony;
