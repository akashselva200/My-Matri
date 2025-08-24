import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Make sure you have 'react-router-dom' installed
import '../css/ProfileFullView.css';
import  ProfileFullViewphoto  from './ProfileFullViewphoto';
import Header from './Header';

const stars = [
  '-- Select Star --', 'ANUSHAM', 'ASTHAM', 'ASWINI', 'AVITTAM', 'AYILYAM',
  'BARANI', 'CHITRAI', 'HASTHAM', 'KETTAI', 'KRITHIGAI', 'MAGAM',
  'MIRUGASIRISHAM', 'MOOLAM', 'POORADAM', 'POORAM', 'POOSAM', 'PUNARPOOSAM',
  'POORATTATHI', 'REVATHI', 'ROHINI', 'SADAYAM', 'SWATHI', 'THIRUVADIRAI',
  'THIRUVONAM', 'UTHIRADAM', 'UTHIRAM', 'UTTHIRATTATHI', 'VISAGAM'
];

const ProfileFullView = () => {
  const { id } = useParams(); // Gets the ID from the URL, e.g., /profile/1
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!id) {
        setLoading(false);
        setError("No profile ID provided.");
        return;
      }
      try {
        // The error "not valid JSON" happens when the API returns HTML (like an error page)
        // instead of JSON. This was caused by fetching from the wrong port (3000) and endpoint.
        // The code below fetches the specific user from the correct json-server endpoint.
        const response = await fetch(`http://localhost:3001/users/${id}`);

        if (!response.ok) {
          throw new Error(`Could not fetch user data (status: ${response.status})`);
        }
        
        const userData = await response.json(); // This will now correctly parse the JSON
        setUser(userData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <div>Loading Profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found.</div>;

  const PhotoDisplay = ({ user }) => {
    // Attempt to get the photo path from the user object, then guess it, then use a default.
    const photo1Path = user?.photos?.photo1 || `/photos/${user.id}_1.jpg`;
    const photo2Path = user?.photos?.photo2 || `/photos/${user.id}_2.jpg`;
    const defaultPhoto = '/photos/default.jpg';

    return (
      <div style={{ marginTop: '10px' }}>
        <img
          src={photo1Path}
          alt={`${user.personalDetails.txtName}'s photo 1`}
          onError={(e) => { e.target.onerror = null; e.target.src = defaultPhoto; }}
          style={{ width: '100%', maxWidth: '227px', border: '1px solid #3A2BDF', marginBottom: '10px', objectFit: 'cover', height: 'auto' }}
        />
        <img
          src={photo2Path}
          alt={`${user.personalDetails.txtName}'s photo 2`}
          onError={(e) => { e.target.onerror = null; e.target.src = defaultPhoto; }}
          style={{ width: '100%', maxWidth: '227px', border: '1px solid #3A2BDF', objectFit: 'cover', height: 'auto' }}
        />
      </div>
    );
  };


  const getParentsAliveStatus = () => {
    const isFatherAlive = user.personalDetails.fatherAlive === '1' || user.personalDetails.fatherAlive === 'Yes';
    const isMotherAlive = user.personalDetails.motherAlive === '1' || user.personalDetails.motherAlive === 'Yes';

    if (isFatherAlive && isMotherAlive) {
      return `Both Alive - அப்பா: ${user.personalDetails.fatherJob} - அம்மா: ${user.personalDetails.motherJob}`;
    } else if (isFatherAlive) {
      return `Only Father Alive - அப்பா: ${user.personalDetails.fatherJob}`;
    } else if (isMotherAlive) {
      return `Only Mother Alive - அம்மா: ${user.personalDetails.motherJob}`;
    }
    return "Parents Not Alive";
  };




  const getDietStatus = (diet) => {
  // Null/undefined fallback
  if (!diet) return "Doesn't Matter";
  if (diet.any) return "Doesn't Matter";

  // Build an array of allowed diets (not 'any')
  const allowed = Object.entries(diet)
    .filter(([key, val]) => key !== "any" && val)
    .map(([key]) => {
      if (key === "nonVegetarian") return "Non-Vegetarian";
      return key.charAt(0).toUpperCase() + key.slice(1);
    });

  return allowed.length ? allowed.join(', ') : "Doesn't Matter";
};



const getMaritalStatusLabel = (ms) => {
  if (!ms) return "Doesn't Matter";
  if (ms.any) return "Doesn't Matter";
  
  const labels = {
    unmarried: "UnMarried",
    married: "Married",
    widow: "Widow",
    divorce: "Divorce"
  };

  const active = Object.entries(ms)
    .filter(([key, val]) => key !== "any" && val)
    .map(([key]) => labels[key] || (key.charAt(0).toUpperCase() + key.slice(1)));

  return active.length ? active.join(', ') : "Doesn't Matter";
};




  return (
    <div>
      {/* The form and hidden inputs are removed as they are not needed for a client-side React app */}
      <Header/>
      <div>
          <table border="0" cellPadding="0" cellSpacing="0" width="976px" align="center">
            <tbody>
              <tr>
                <td>
                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                    <tbody>
                      <tr>
                        <td className="Label" style={{ fontWeight: '500', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>
                          <span style={{ color: 'Maroon' }}>
                            சொர்ணம் திருமண தகவல் மையம்,
                            107A. Anbunagar, Achariyapuram, Pondy -605110
                            Call : 8056484897
                          </span>
                        </td>
                      </tr>
                      <tr style={{ height: '7px' }}>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                              <tr>
                                <td align="left">
                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style={{ backgroundColor: '#FFFFD7', border: '1px solid #D7E1FF' }}>
                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                              <tr>
                                                <td className="head" style={{ width: '140px' }} align="left">
                                                  <b style={{ color: 'Red' }}>Reg. No. :</b>
                                                  <b style={{ fontWeight: 'normal' }}>
                                                    <span id="Reg_No" className="Label" style={{ textTransform: 'capitalize' }}>{user.id}</span>
                                                  </b>
                                                </td>
                                                <td className="head" align="left">
                                                  <b style={{ color: 'Red' }}>Name :</b>
                                                  <b style={{ fontWeight: 'normal' }}>
                                                    <span id="Name" className="Label" style={{ textTransform: 'capitalize' }}>{user.personalDetails.txtName},</span>
                                                    <span id="educationOccupation.qualification" className="Label" style={{ textTransform: 'capitalize' }}>{user.educationOccupation.qualification}</span>
                                                  </b>
                                                </td>
                                                <td className="head" style={{ width: '200px' }} align="left">
                                                  <b style={{ color: 'Red' }}>Reg. Month. :</b>
                                                  <b style={{ fontWeight: 'normal' }}>
                                                    <span id="Reg_Month" className="Label" style={{ textTransform: 'capitalize' }}>{user.schemeDetails.scheme} Member</span>
                                                  </b>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td valign="top">
                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                              <tr>
                                                <td style={{ border: '2px solid #D7E1FF' }}>
                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                    <tbody>
                                                      <tr>
                                                        <td valign="top">
                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td className="Label" style={{ fontWeight: 'bold', color: 'Green', backgroundColor: '#D7E1FF', textAlign: 'left', fontSize: '14px' }}>
                                                                  Bio Data
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td style={{ borderBottom: '1px solid #D7E1FF', borderRight: '1px solid #D7E1FF' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Gender-Marital Status</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="gender" className="Label" style={{ whiteSpace: 'normal'}}>{user.personalDetails.gender}</span>
                                                                          <span id="MaritalStatus" className="Label" style={{ textTransform: 'capitalize' }}>, {user.personalDetails.maritalStatus}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>DOB-Time-Place</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="DOB" className="Label" style={{ textTransform: 'capitalize' }}>{user.personalDetails.dateOfBirth}</span>
                                                                          <span id="Time" className="Label" style={{ textTransform: 'capitalize',  display: 'inline-block', maxWidth: '150px',verticalAlign: 'top' }}> - {user.personalDetails.timeOfBirth.hour}:{user.personalDetails.timeOfBirth.minute} {user.personalDetails.timeOfBirth.period}</span>
                                                                          <span id="Place" className="Label" style={{ textTransform: 'capitalize' }}> - {user.personalDetails.placeOfBirth}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Religion-Caste-Sub caste</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Religion" className="Label" style={{ textTransform: 'capitalize' }}>{user.astrologyDetails.religion}</span>
                                                                          <span id="Caste" className="Label" style={{ textTransform: 'capitalize' }}> - {user.astrologyDetails.caste}</span>
                                                                          <span id="Subcaste" className="Label" style={{ textTransform: 'capitalize' }}> - {user.astrologyDetails.subcaste}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Gothram-Star-Rasi</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Gothram" className="Label" style={{ textTransform: 'capitalize' }}>{user.astrologyDetails.gothram}</span>
                                                                          <span id="Star" className="Label" style={{ textTransform: 'capitalize' }}> - {user.astrologyDetails.star}</span>
                                                                          <span id="Rasi" className="Label" style={{ textTransform: 'capitalize' }}> - {user.astrologyDetails.raasi}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block', maxWidth: '190px',verticalAlign: 'top'  }}>Qualification-Job-Place of Job</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Qualification1" className="Label" style={{ textTransform: 'capitalize' }}>{user.educationOccupation.qualification}</span>
                                                                          <span id="Job" className="Label" style={{ textTransform: 'capitalize' }}> - {user.educationOccupation.job}</span>
                                                                          <span id="Place" className="Label" style={{ textTransform: 'capitalize' }}> - {user.educationOccupation.placeOfJob}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block', maxWidth: '190px',verticalAlign: 'top'  }}>Income/month-Height-Complexion</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="IncomeMonth" className="Label" style={{ textTransform: 'capitalize' }}>{user.educationOccupation.income}</span>
                                                                          <span id="Height" className="Label" style={{ textTransform: 'capitalize' }}>- {user.physicalAttributes.height}</span>
                                                                          <span id="Complexion" className="Label" style={{ textTransform: 'capitalize' }}>- {user.physicalAttributes.complexion}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Mother Tongue-Diet</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="MotherTongue" className="Label" style={{ textTransform: 'capitalize' }}>{user.personalDetails.motherTongue}</span>
                                                                          <span id="diet" className="Label" style={{ textTransform: 'capitalize' }}></span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Disability (If any)</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="physicalStatus" className="Label" style={{ textTransform: 'capitalize' }}>{user.physicalAttributes.physicalStatus}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '150px' }}>
                                                                          <b style={{ fontWeight: 'normal', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block', maxWidth: '190px',verticalAlign: 'top' }}>Parents Alive-Father's Job - Mother's Job</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span className="Label" style={{ textTransform: 'capitalize' }}>
                                                                            
                                                                            {getParentsAliveStatus()}
                                                                          </span>
                                                              
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td className="Label" style={{ borderBottom: '1px solid #D7E1FF', borderRight: '1px solid #D7E1FF' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr style={{ height: '20px', verticalAlign: 'middle' }}>
                                                                        <td style={{ width: '150px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', backgroundColor: '#cccccc', textAlign: 'center', fontWeight: 'bold' }} className="Label">
                                                                          <b style={{ fontWeight: 'normal' }}>Relationship</b>
                                                                        </td>
                                                                        <td style={{ width: '90px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', backgroundColor: '#cccccc', textAlign: 'center', fontWeight: 'bold' }} className="Label">
                                                                          <b style={{ fontWeight: 'normal' }}>Elder Brother</b>
                                                                        </td>
                                                                        <td style={{ width: '90px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', backgroundColor: '#cccccc', textAlign: 'center', fontWeight: 'bold' }} className="Label">
                                                                          <b style={{ fontWeight: 'normal' }}>Younger brother</b>
                                                                        </td>
                                                                        <td style={{ width: '120px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', backgroundColor: '#cccccc', textAlign: 'center', fontWeight: 'bold' }} className="Label">
                                                                          <b style={{ fontWeight: 'normal' }}>Elder Sister</b>
                                                                        </td>
                                                                        <td style={{ width: '120px', borderLeft: '1px solid #555555', borderRight: '1px solid #555555', backgroundColor: '#cccccc', borderTop: '1px solid #555555', textAlign: 'center', fontWeight: 'bold' }} className="Label">
                                                                          <b style={{ fontWeight: 'normal' }}>Younger Sister</b>
                                                                        </td>
                                                                        <td>&nbsp;</td>
                                                                      </tr>
                                                                      <tr style={{ height: '20px', verticalAlign: 'middle' }}>
                                                                        <td style={{ width: '150px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', textAlign: 'center', backgroundColor: 'White', fontWeight: 'bold' }} className="Label">
                                                                          Married
                                                                        </td>
                                                                  
                                                                        <td style={{ width: '90px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label1" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.married.elderBrothers}</span>
                                                                        </td>
                                                                        
                                                                        <td style={{ width: '90px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label2" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.married.youngerBrothers}</span>
                                                                        </td>
                                                                        
                                                                        <td style={{ width: '120px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label3" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.married.elderSisters}</span>
                                                                        </td>
                                                                        
                                                                        <td style={{ width: '120px', borderLeft: '1px solid #555555', borderRight: '1px solid #555555', borderTop: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label4" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.married.youngerSisters}</span>
                                                                        </td>

                                                                        <td>&nbsp;</td>
                                                                      </tr>
                                                                      <tr style={{ height: '20px', verticalAlign: 'middle' }}>
                                                                        <td style={{ width: '150px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', borderBottom: '1px solid #555555', textAlign: 'center', backgroundColor: 'White', fontWeight: 'bold' }} className="Label">
                                                                          UnMarried
                                                                        </td>
                                                                        <td style={{ width: '90px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', borderBottom: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label5" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.unmarried.elderBrothers}</span>
                                                                        </td>
                                                                        <td style={{ width: '90px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', borderBottom: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label6" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.unmarried.youngerBrothers}</span>
                                                                        </td>
                                                                        <td style={{ width: '120px', borderLeft: '1px solid #555555', borderTop: '1px solid #555555', borderBottom: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label7" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.unmarried.elderSisters}</span>
                                                                        </td>
                                                                        <td style={{ width: '120px', borderLeft: '1px solid #555555', borderRight: '1px solid #555555', borderBottom: '1px solid #555555', borderTop: '1px solid #555555', textAlign: 'center' }}>
                                                                          <span id="Label8" style={{ textTransform: 'capitalize' }}>{user.personalDetails.siblings.unmarried.youngerSisters}</span>
                                                                        </td>
                                                                        <td>&nbsp;</td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td style={{ borderBottom: '1px solid #D7E1FF', borderRight: '1px solid #D7E1FF' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Own House-Nativity</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Nativity" className="Label" style={{ textTransform: 'capitalize' }}>{user?.personalDetails?.nativity|| ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Any Other Details</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF',textTransform: 'capitalize', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block', maxWidth: '550px',verticalAlign: 'top', }}>
                                                                          <span id="personalDetails.AnyOtherDetails" className="Label" style={{ textTransform: 'capitalize', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block', maxWidth: '550px',verticalAlign: 'top' }}>{user?.personalDetails.AnyOtherDetails|| ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td className="Label" style={{ fontWeight: 'bold', color: 'Green', backgroundColor: '#D7E1FF', textAlign: 'left', fontSize: '14px' }}>
                                                                  Life Partner Expectations (வாழ்க்கை துணை பற்றிய எதிர்பார்ப்பு)
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td style={{ borderBottom: '1px solid #D7E1FF', borderRight: '1px solid #D7E1FF' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Qualification</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Qualification" className="Label" style={{ textTransform: 'capitalize' }}>{user?.partnerExpectation?.qualification || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Job</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Job_ForGirls" className="Label" style={{ textTransform: 'capitalize' }}>{user?.partnerExpectation?.jobRequired || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Job-Income/month</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="JobPlace" className="Label" style={{ textTransform: 'capitalize' }}>{user?.partnerExpectation?.job || '-'} - {user?.partnerExpectation?.income || ''}</span>
                                                                          <span id="Incomemonth1" className="Label" style={{ textTransform: 'capitalize' }}></span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Caste - Sub Caste</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Caste1" className="Label" style={{ textTransform: 'capitalize' }}> {user?.partnerExpectation?.caste || ''} </span>
                                                                          <span id="SubCaste1" className="Label" style={{ textTransform: 'capitalize' }}>- {user?.partnerExpectation?.subcaste || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Diet</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="Diet_Expec" className="Label" style={{ textTransform: 'capitalize' }}> {getDietStatus(user.partnerExpectation?.diet)}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Marital Status</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="MaritalStatus_Expec" className="Label" style={{ textTransform: 'capitalize' }}>{getMaritalStatusLabel(user.partnerExpectation?.maritalStatus)}</span>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', color: 'Green', width: '50px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Any Other Expectation</b>
                                                                        </td>
                                                                        <td>
                                                                          <span id="AnyOtherExpectation" className="Label" style={{ textTransform: 'capitalize', whiteSpace: 'normal', wordBreak: 'break-word', display: 'inline-block', maxWidth: '550px',verticalAlign: 'top' }}> {user?.partnerExpectation?.AnyOtherExpectation || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td style={{ width: '250px', verticalAlign: 'top', padding: '5px', textAlign: 'center' }}>
                                                          <table border="0" cellPadding="5px" cellSpacing="0" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td align="center">
                                                                  {/* Fixed invalid HTML: td cannot be a child of td. Replaced with div. */}
                                                                  <div style={{
                                                                      border: '1px solid #3A2BDF',
                                                                      textAlign: 'center',
                                                                      padding: '7px',
                                                                      fontWeight: 'bold'
                                                                      }}
                                                                      className="Label">
                                                                          www.SornamMatrimony.com
                                                                  </div>
                                                                  {/* Replaced broken import with inline component */}
                                                                  <PhotoDisplay user={user} />
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="Label" style={{ fontWeight: 'bold', color: 'Green', backgroundColor: '#D7E1FF', textAlign: 'left', fontSize: '14px' }}>
                                                  Contact Details
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style={{ borderBottom: '1px solid #D7E1FF', borderRight: '1px solid #D7E1FF' }}>
                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td style={{ width: '50%' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderLeft: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Contact Person</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF', borderLeft: '1px solid #D7E1FF' }}>
                                                                          <span id="ContactPerson" className="Label" style={{ textTransform: 'capitalize' }}> {user?.contactDetails?.contactPerson || ''} </span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                                <td style={{ width: '50%' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderLeft: '1px solid #D7E1FF', borderBottom: '1px solid #D7E1FF', color: 'Green', width: '120px' }}>
                                                                          <b style={{ fontWeight: 'normal' }}>Contact No.</b>
                                                                        </td>
                                                                        <td style={{ borderBottom: '1px solid #D7E1FF' }}>
                                                                          <span id="ContactNo" className="Label" style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{user?.contactDetails?.mobileNumber || ''} </span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>
                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td className="Label" style={{ borderRight: '1px solid #D7E1FF', borderLeft: '1px solid #D7E1FF', color: 'Green', width: '190px' }}>
                                                                  <b style={{ fontWeight: 'normal' }}>Email ID.</b>
                                                                </td>
                                                                <td>
                                                                  <span id="Email" className="Label">{user?.schemeDetails?.username || ''}</span>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ borderBottom: '1px solid #D7E1FF', borderLeft: '1px solid #D7E1FF', borderRight: '1px solid #D7E1FF' }}>
                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                              <tr>
                                <td style={{ paddingBottom: '10px', paddingLeft: '30px' }} valign="middle">
                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                              <tr>
                                                <td width="100%" height="28">
                                                  <table border="0" width="100%" cellPadding="0">
                                                    <tbody>
                                                      <tr>
                                                        <td align="center" className="Label" style={{ color: 'Green' }}>
                                                          &nbsp;Website : www.SornamMatrimony.org &nbsp;&nbsp;&nbsp;&nbsp;
                                                          <span style={{ color: 'Green' }}>Phone :</span> : +91- 8056 4848 97 &nbsp;&nbsp;&nbsp;&nbsp;
                                                          <span style={{ color: 'Green' }}>Email :</span> dumdumdummarriage@gmail.com
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <table border="0" width="100%" cellPadding="0">
                                                    <tbody>
                                                      <tr>
                                                        <td align="center" className="Label" style={{ color: 'Green' }}>
                                                          Dasa Balance :
                                                          <span id="lblDasa" className="Label" style={{ textTransform: 'capitalize' }}></span> {user?.astrologyDetails?.horoscopeChart?.balance?.dasa || ''} Dasa
                                                          &nbsp;&nbsp;<span id="lblYear" className="Label" style={{ textTransform: 'capitalize' }}></span> {user?.astrologyDetails?.horoscopeChart?.balance?.years || ''} Year(s)
                                                          &nbsp;&nbsp;<span id="lblMonths" className="Label" style={{ textTransform: 'capitalize' }}></span> {user?.astrologyDetails?.horoscopeChart?.balance?.months || ''} Month(s)
                                                          &nbsp;&nbsp;<span id="lblDays" className="Label" style={{ textTransform: 'capitalize' }}></span> {user?.astrologyDetails?.horoscopeChart?.balance?.days || ''} Day(s)
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                    <tbody>
                                                      <tr>
                                                        <td>&nbsp;</td>
                                                        <td style={{ width: '352px' }}>
                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi1" className="Label12" style={{ textTransform: 'capitalize' }}> {user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro1 || ''} </span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi2" className="Label12" style={{ textTransform: 'capitalize' }}> {user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro2 || ''} </span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi3" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro3 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi4" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro4 || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td width="88px">
                                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '77px', borderLeft: '1px solid #000000', borderRight: '1px solid #000000', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblRasi5" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro12 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblRasi6" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro11 ||''}</span>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                        <td>
                                                                          <p align="center">
                                                                            <b><font face="Arial" size="3" color="#008000">RASI</font></b>
                                                                          </p>
                                                                        </td>
                                                                        <td width="88px">
                                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblRasi7" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro5 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblRasi8" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro6 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td width="86px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi9" className="Label12" style={{ textTransform: 'capitalize' }}> {user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro10 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi10" className="Label12" style={{ textTransform: 'capitalize' }}> {user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro9 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi11" className="Label12" style={{ textTransform: 'capitalize' }}> {user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro8 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '1px solid #000000', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblRasi12" className="Label12" style={{ textTransform: 'capitalize' }}> {user?.astrologyDetails?.horoscopeChart?.rasi?.txtHoro7 || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td align="center" style={{ color: 'Maroon', fontWeight: 'bold', fontFamily: 'Arial', verticalAlign: 'middle', fontSize: '16px', lineHeight: '30px' }}>
                                                          சொர்ணம் மேட்ரிமோனி,
                                                          <br />107A. Anbunagar,<br />Achariyapuram, <br />Pondy - 605110
                                                          <br />
                                                          Call : 8056484897
                                                          <br />
                                                          www.SornamMatrimony.com
                                                        </td>
                                                        <td style={{ width: '352px'}}>
                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td style={{ height: '75px' }}>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td width="88px" style={{ height: '72px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam1" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam1 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam2" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam2 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam3" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam3 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam4" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam4 || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td width="88px">
                                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', borderTop: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblAmsam5" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam12 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblAmsam6" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam11 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                        <td>
                                                                          <p align="center">
                                                                            <b><font face="Arial" size="3" color="#008000">AMSAM</font></b>
                                                                          </p>
                                                                        </td>
                                                                        <td width="88px">
                                                                          <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', borderTop: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblAmsam7" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam5 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderBottom: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                                  <span id="lblAmsam8" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam6 || ''}</span>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td width="87px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam9" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam10 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam10" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam9 || ''}</span>
                                                                        </td>
                                                                        <td width="88px" style={{ height: '56px', border: '1px solid #000000', borderRight: '0px solid #cccccc', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam11" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam8 || ''}</span>
                                                                        </td>
                                                                        <td width="86px" style={{ height: '56px', border: '1px solid #000000', verticalAlign: 'middle', textAlign: 'center' }}>
                                                                          <span id="lblAmsam12" className="Label12" style={{ textTransform: 'capitalize' }}>{user?.astrologyDetails?.horoscopeChart?.amsam?.txtAmsam7 || ''}</span>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ProfileFullView;
