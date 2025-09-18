import React, { useState } from "react";
import '../css/NewRegistration.css'; // Corrected CSS import path
import Header from './Header';
import NoProfile from '../css/images/NoProfile.jpg';
import "../css/terms.css"; // include CSS for terms popup

const PLACEHOLDER = NoProfile;
const initialFormState = {
  registrationDate: "",
  ExpiryDate: "",
  personalDetails: {
    txtName: "",
    gender: "-Select-",
    dateOfBirth: "", // yyyy-mm-dd string
    timeOfBirth: {
      hour: "",
      minute: "",
      period: ""
    },
    placeOfBirth: "",
    nativity: "",
    motherTongue: "",
    maritalStatus: "Unmarried",
    fatherName: "",
    fatherAlive: "1",
    fatherJob: "",
    motherName: "",
    motherAlive: "1",
    motherJob: "",
    AnyOtherDetails: "",
    siblings: {
      married: {
        elderBrothers: "0",
        youngerBrothers: "0",
        elderSisters: "0",
        youngerSisters: "0",
      },
      unmarried: {
        elderBrothers: "0",
        youngerBrothers: "0",
        elderSisters: "0",
        youngerSisters: "0",
      }
    },
  },

  physicalAttributes: {
    height: "",
    weight: "",
    bloodGroup: "",
    diet: "",
    physicalStatus: "No",
    complexion: ""
  },
  educationOccupation: {
    qualification: "",
    job: "",
    placeOfJob: "",
    income: ""
  },

  astrologyDetails: {
   religion: "",
    caste: "",
    subcaste: "",
    star: "",
    padam: "",
    raasi: "",
    gothram: "",
    horoscopeChart: {
     balance: { dasa: "", years: "", months: "", days: "" },
      rasi: {
         txtHoro1: "",
         txtHoro2: "",
         txtHoro3: "",
         txtHoro4: "",
         txtHoro5: "",
         txtHoro6: "",
         txtHoro7: "",
         txtHoro8: "",
         txtHoro9: "",
         txtHoro10: "",
         txtHoro11: "",
         txtHoro12: ""

      },
      amsam: {
        txtAmsam1: "",
        txtAmsam2: "",
        txtAmsam3: "",
        txtAmsam4: "",
        txtAmsam5: "",
        txtAmsam6: "",
        txtAmsam7: "",
        txtAmsam8: "",
        txtAmsam9: "",
        txtAmsam10: "",
        txtAmsam11: "",
        txtAmsam12: ""
      }
    }

   },
  contactDetails: {
    permanentAddress: "",
    presentAddress: "",
    contactPerson: "",
    mobileNumber: "",
    Email: ""
  },
  partnerExpectation: {
    qualification: "",
    job: "",
    jobRequired: "",
    income: "",
    age: { from: "", to: "" },
    diet: { vegetarian: false, nonVegetarian: false, eggetarian: false, any: false },
    horoscopeRequired: "",
    maritalStatus: { unmarried: false, married: false, widow: false, divorce: false, any: false },
    caste: "",
    subcaste: "",
    anyOtherExpectation: ""
  },
  photos: {
    photo1: null,
    photo2: null
  },
  schemeDetails: {
    scheme: "",
    username: "",
    password: "",
    acceptTerms: false
  }
}

const brotherSisterOptions = [
  { label: " ", value: " " },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5 and above", value: "5 and above" },
];

const heightOptions = [
{ value: "NA", label: "-Select-" },
{ value: "4ft - 121 cm", label: "4ft - 121 cm" },
{ value: "4ft 1in - 124cm", label: "4ft 1in - 124cm" },
{ value: "4ft 2in - 127cm", label: "4ft 2in - 127cm" },
{ value: "4ft 3in - 129cm", label: "4ft 3in - 129cm" },
{ value: "4ft 4in - 132cm", label: "4ft 4in - 132cm" },
{ value: "4ft 5in - 134cm", label: "4ft 5in - 134cm" },
{ value: "4ft 6in - 137cm", label: "4ft 6in - 137cm" },
{ value: "4ft 7in - 139cm", label: "4ft 7in - 139cm" },
{ value: "4ft 8in - 142cm", label: "4ft 8in - 142cm" },
{ value: "4ft 9in - 144cm", label: "4ft 9in - 144cm" },
{ value: "4ft 10in - 147cm", label: "4ft 10in - 147cm" },
{ value: "4ft 11in - 149cm", label: "4ft 11in - 149cm" },
{ value: "5ft - 152cm", label: "5ft - 152cm" },
{ value: "5ft 1in - 154cm", label: "5ft 1in - 154cm" },
{ value: "5ft 2in - 157cm", label: "5ft 2in - 157cm" },
{ value: "5ft 3in - 160cm", label: "5ft 3in - 160cm" },
{ value: "5ft 4in - 162cm", label: "5ft 4in - 162cm" },
{ value: "5ft 5in - 165cm", label: "5ft 5in - 165cm" },
{ value: "5ft 6in - 167cm", label: "5ft 6in - 167cm" },
{ value: "5ft 7in - 170cm", label: "5ft 7in - 170cm" },
{ value: "5ft 8in - 172cm", label: "5ft 8in - 172cm" },
{ value: "5ft 9in - 175cm", label: "5ft 9in - 175cm" },
{ value: "5ft 10in - 177cm", label: "5ft 10in - 177cm" },
{ value: "5ft 11in - 180cm", label: "5ft 11in - 180cm" },
{ value: "6ft - 182cm", label: "6ft - 182cm" },
{ value: "6ft 1in - 185cm", label: "6ft 1in - 185cm" },
{ value: "6ft 2in - 187cm", label: "6ft 2in - 187cm" },
{ value: "6ft 3in - 190cm", label: "6ft 3in - 190cm" },
{ value: "6ft 4in - 193cm", label: "6ft 4in - 193cm" },
{ value: "6ft 5in - 195cm", label: "6ft 5in - 195cm" },
{ value: "6ft 6in - 198cm", label: "6ft 6in - 198cm" },
{ value: "6ft 7in - 200cm", label: "6ft 7in - 200cm" },
{ value: "6ft 8in - 203cm", label: "6ft 8in - 203cm" },
{ value: "6ft 9in - 205cm", label: "6ft 9in - 205cm" },
{ value: "6ft 10in - 208cm", label: "6ft 10in - 208cm" },
{ value: "6ft 11in - 210cm", label: "6ft 11in - 210cm" },
{ value: "7ft - 213cm", label: "7ft - 213cm" },
];

const weightOptions = [
  { value: "0", label: "- Kgs -" },
  ...Array.from({ length: 100 }, (_, i) => {
    const kg = 41 + i;
    return { value: kg.toString(), label: `${kg} kg` };
  }),
];

const bloodGroupOptions = [
  { value: "NA", label: "-Select-" },
  { value: "O+", label: "O+" },
  { value: "A+", label: "A+" },
  { value: "B+", label: "B+" },
  { value: "AB+", label: "AB+" },
  { value: "O-", label: "O-" },
  { value: "A-", label: "A-" },
  { value: "B-", label: "B-" },
  { value: "AB-", label: "AB-" },
];

const stars = [
  '-- Select Star --', 'ANUSHAM', 'ASTHAM', 'ASWINI', 'AVITTAM', 'AYILYAM',
  'BARANI', 'CHITRAI', 'HASTHAM', 'KETTAI', 'KRITHIGAI', 'MAGAM',
  'MIRUGASIRISHAM', 'MOOLAM', 'POORADAM', 'POORAM', 'POOSAM', 'PUNARPOOSAM',
  'POORATTATHI', 'REVATHI', 'ROHINI', 'SADAYAM', 'SWATHI', 'THIRUVADIRAI',
  'THIRUVONAM', 'UTHIRADAM', 'UTHIRAM', 'UTTHIRATTATHI', 'VISAGAM'
];

// Component for TextBox with white border for Horoscope section
const TextBox = ({ name, value, onChange }) => (
  <textarea
    name={name}
    className="TextBox_WhiteBorder"
    rows="2"
    cols="20"
    style={{ height: '56px', width: '100px', resize: 'none' }}
    value={value}
    onChange={onChange}
    type="text"  />
);

// Helper function to deeply update nested object state by dot notation key
function setNestedValue(obj, path, value) {
  const keys = path.split('.');

  let temp = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in temp)) temp[keys[i]] = {};
    temp = temp[keys[i]];
  }
  temp[keys[keys.length - 1]] = value;
  return { ...obj };
}



// 3️⃣ Component Start

export default function New_Registration() {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const finalValue = type === "checkbox" ? checked : type === "file" ? files[0] : value;

    // Use setNestedValue helper to update deeply nested objects
    setForm(prevForm => {
      let newForm = { ...prevForm };
      newForm = setNestedValue(newForm, name, finalValue);
      return newForm;
    });
  };

  const uploadPhoto = async (photo, id, photoIndex) => {
    if (!photo.file) {
      return null; // Return null if no file to upload
    }

    const formData = new FormData();
    // IMPORTANT: Append text fields BEFORE the file to ensure req.body is populated
    formData.append('id', id);
    formData.append('photoIndex', photoIndex);
    formData.append('photo', photo.file);

    try {
      // Send the photo to your new upload server
      const response = await fetch("http://localhost:3002/upload-photo", {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(`Photo ${photoIndex} upload failed.`);
      const result = await response.json();
      console.log(`Photo ${photoIndex} uploaded successfully:`, result.path);
      return result.path; // Return the server path of the uploaded photo
    } catch (error) {
      console.error(error);
      alert(error.message);
      return null;
    }
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.personalDetails.gender === "-Select-") {
      alert("Please select a gender.");
      return;
    }

    try {
      // 1. Fetch all existing users to determine the next ID
      const usersResponse = await fetch("http://localhost:3001/users");
      if (!usersResponse.ok) {
        throw new Error("Failed to fetch existing users.");
      }
      const users = await usersResponse.json();
      

      // 2. Determine the next ID based on gender
      const gender = form.personalDetails.gender;
      const prefix = gender === 'Male' ? 'M' : 'F';
      
      // Find the highest existing ID for the given gender
      let maxIdNum = 10000; // Start before 10000
      users.forEach(user => {
        if (typeof user.id === 'string' && user.id.startsWith(prefix)) {
          const numPart = parseInt(user.id.substring(1), 10);
          if (!isNaN(numPart) && numPart > maxIdNum) {
            maxIdNum = numPart;
          }
        }
      });

      const newId = `${prefix}${maxIdNum + 1}`;

      // 3. Create the new user object, excluding local file data for now
      const { photos: _photoFiles, ...formData } = form;
      const newUser = { ...formData, id: newId, photos: {} };

      // 4. POST the initial user data to json-server
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) {
        throw new Error(`Error during registration: ${await response.text()}`);
      }

      // 5. After successful registration, upload photos and get their paths
      const photoPaths = await Promise.all([
        uploadPhoto(photos[0], newId, 1),
        uploadPhoto(photos[1], newId, 2)
      ]);

      // 6. PATCH the new user record with the photo paths
      const photoUpdatePayload = { photos: { photo1: photoPaths[0], photo2: photoPaths[1] } };
      const patchResponse = await fetch(`http://localhost:3001/users/${newId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(photoUpdatePayload)
      });

      if (!patchResponse.ok) {
        throw new Error('Failed to update user with photo paths.');
      }

      if (response.ok) {
        alert(`Registration successful! Your registration ID is: ${newId}`);
        setForm(initialFormState); // Reset form after successful registration
        setPhotos([ // Also reset the photo previews
          { file: null, preview: PLACEHOLDER },
          { file: null, preview: PLACEHOLDER },
        ]);
      } else {
        alert(`Error during registration: ${await response.text()}`);
      }
    } catch (err) {
      alert(`An error occurred: ${err.message}`);
      console.error(err);
    }
  };
  
  //
 // Define state
  const [photos, setPhotos] = useState([
    { file: null, preview: PLACEHOLDER },
    { file: null, preview: PLACEHOLDER },
  ]);

  // Handler for file changes
  const handleChangee = (e, index) => {
  const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const newPhotos = [...photos];
        newPhotos[index] = { file, preview: ev.target.result };
        setPhotos(newPhotos);
      };
      reader.readAsDataURL(file);
    }
    };

  const handleClear = (index) => {
    const newPhotos = [...photos];
    newPhotos[index] = { file: null, preview: PLACEHOLDER };
    setPhotos(newPhotos);
    // Clear the actual input value (by keying the input)
    document.getElementById(`photo-input-${index}`).value = "";
  };

// term and conditions popup
  // TermsAndConditions component logic is now merged into New_Registration
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="new-registration">

       <Header />

    {/* Form Container */}
      <form
        className="registration-form"
        style={{
          maxWidth: 1100,
          background: "#e7ebf7",
          margin: "auto",
          padding: "0px 20px 0px 20px",
          boxShadow: "0px 0px 12px #ccc"
        }}   onSubmit={handleSubmit} /* <-- add this! */
      >
        <h2 style={{ color: "#69AF00", textAlign: "left", fontWeight: "bold" }}>
          <i>New Registration</i>
        </h2>

      {/* PERSONAL AND FAMILY DETAILS */}
      <fieldset className="personal-details-section">
  <legend className="personal-details-legend" ><b>Personal and Family Details</b></legend>
  <div className="personal-details-row">
    <label  style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "100px", top:"1px" }}>
      Name<span style={{ color: "red" }}>* </span>:&nbsp;
      <input
        className="personal-details-input"
        name="personalDetails.txtName"
        value={form.personalDetails.txtName}
        onChange={handleChange}
         style={{ width: 153 }}
        required 
      />
    </label>
    <label  style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "180px", top:"1px" }}>
      Gender <span style={{ color: "red" }}>* </span>:&nbsp;
      <select
        className="personal-details-select"
        name="personalDetails.gender"
        value={form.personalDetails.gender}
        onChange={handleChange}
        required
      >
        <option value="-Select-">-Select-</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </label>
          <label  style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "290px", top: "1px" }}>
            Date Of Birth<span style={{ color: "red" }}>* </span>:&nbsp;
            <input type="date"
             name="personalDetails.dateOfBirth" 
             className="personal-details-input"
             value={form.personalDetails.dateOfBirth} onChange={handleChange} 
             style={{ width: 150 }} 
              min="0"
              max="12" 
              placeholder="Hour" 
              required />
          </label>
  </div>

        {/* Time of Birth, Place of Birth, Nativity */}
      <div className="personal-details-row">
          <label  style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "48px", top: "-1px" }}>
            Time of Birth<span style={{ color: "red" }}> * </span> :&nbsp;
            <select className="personal-select" name="personalDetails.timeOfBirth.hour" value={form.personalDetails.timeOfBirth.hour} onChange={handleChange} required>
              <option value=" ">&nbsp;Hr</option>
              {[...Array(13).keys()].map(i =>
                <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
              )}
            </select>
            <select className="personal-select" name="personalDetails.timeOfBirth.minute" value={form.personalDetails.timeOfBirth.minute} onChange={handleChange} required>
              <option value=" ">&nbsp;Min </option>
              {[...Array(60).keys()].map(i =>
                <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
              )}
            </select>
            <select className="personal-select" name="personalDetails.timeOfBirth.period" value={form.personalDetails.timeOfBirth.period} onChange={handleChange} required>
              <option defaultValue={""}>Select</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </label>
        {/* Place of Birth */}
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "91px", top: "0px" }}>
            &nbsp;Place Of Birth <br></br>
          (Town/District)&nbsp;&nbsp;<a style={{ position: "relative", top: "-10px" }}>:</a>&nbsp;
          <input type="text"
           className="personal-details-input"
           name="personalDetails.placeOfBirth" 
           value={form.personalDetails.placeOfBirth} 
           onChange={handleChange} 
           style={{ width: 130,  position: "relative", top: "-10px" }} />
           </label>
        {/* Nativity */}
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "127px", top: "1px" }}>
           <a> Nativity &nbsp;<br></br>
            (Town & District)</a>&nbsp;&nbsp;<a style={{ position: "relative", top: "-8px" }}>:</a>&nbsp;
            <input type="text" 
            name="personalDetails.nativity" 
            className="personal-details-input"
            value={form.personalDetails.nativity} 
            onChange={handleChange}
            style={{ width: 150, position: "relative", top: "-10px" }} /></label>
      </div>
        {/* Mother Tongue and Marital Status */}
        <div className="personal-details-row">
        <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
          <label style={{flexDirection: "row", alignItems: "center", position: "relative", left: "36px", top: "4px" }}>
            Mother Tongue<span style={{ color: "red" }}>* </span>:&nbsp;
            <select 
            type="text" 
            name="personalDetails.motherTongue" 
            className="personal-details-input"
            value={form.personalDetails.motherTongue} onChange={handleChange} style={{ width: 155 }} 
            required>
              <option value="0">-Select-</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Others">Others</option>
            </select>
          </label>
        {/* Marital Status */}
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "97px", top:"4px" }}>
            Marital Status<span style={{ color: "red" }}>* </span>:&nbsp;
            <select 
            name="personalDetails.maritalStatus" 
            className="personal-details-input"
            value={form.personalDetails.maritalStatus} onChange={handleChange} 
            style={{ width: 148 }}>
              <option value="Unmarried">Unmarried</option>
              <option value="Widow/Widower">Widow/Widower</option>
              <option value="Divorce">Divorce</option>
            </select>
          </label>
        </div>
        </div>
        {/* Father's Name , Father's Alive, Father's Job */}
        <div className="personal-details-row">
        <div style={{ display: "flex", gap: 10, marginBottom: 8, position: "relative", left: "37px", top:"4px" }}>
          <label>Father&apos;s Name<span style={{ color: "red" }}>* </span>:&nbsp;
          <input type="text" 
          name="personalDetails.fatherName" 
          className="personal-details-input"
          value={form.personalDetails.fatherName} onChange={handleChange} 
          required
          style={{ width: 135 }} />
          </label>
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "65px", top: "0px" }}>
            Father&apos;s Alive   &nbsp;:&nbsp;&nbsp;
            <select
              name="personalDetails.fatherAlive"
              value={form.personalDetails.fatherAlive}
              className="personal-details-input"
              onChange={handleChange}
            >
              <option defaultValue={""}>-Select-</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          
          </label>
          {/* Father's Job */}
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "150px", top: "0px" }}>
            Father's Job :&nbsp;<input 
            type="text" 
          name="personalDetails.fatherJob" 
          className="personal-details-input"
          value={form.personalDetails.fatherJob} onChange={handleChange} 
          style={{ width: 150 }} />
          </label>
        </div>
        </div>
         {/* Mother's Name , Mother's Alive, Mother's Job */}
         <div className="personal-details-row">
        <div style={{ display: "flex", gap: 10, marginBottom: 8, position: "relative",  top:"4px", left:"35px" }}>
          <label>Mother&apos;s Name &nbsp;:&nbsp;
          <input 
          type="text" 
          name="personalDetails.motherName"
          className="personal-details-input" 
          value={form.personalDetails.motherName} onChange={handleChange} 
          style={{ width: 134 }} />
          </label>
         {/* Mother Alive */}
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "67px"}}>
            Mother's Alive : &nbsp;<select
              name="personalDetails.motherAlive"
              value={form.personalDetails.motherAlive}
              className="personal-details-input"
              onChange={handleChange}
            >
              <option defaultValue={""}>-Select-</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </label>
          <label style={{ flexDirection: "row", alignItems: "center", position: "relative", left: "148px"}}>
            Mother's Job :&nbsp;
            <input  
            type="text" 
            name="personalDetails.motherJob" 
            className="personal-details-input"
            value={form.personalDetails.motherJob} 
            onChange={handleChange} 
            style={{ width: 150 }} />
            </label>
        </div>
        </div>

        {/* Brothers and Sisters Table */}
        <div className="personal-details-row">
        <table style={{ margin: "10px 220px", border: "2px solid #2f2e2eff", borderCollapse: "collapse" , backgroundColor:"#d3e6faff" }}>
          <thead>
            <tr>
              <th style={{ border: "2px solid #555", fontSize: "18px", color:'#1b7a2eff', fontWeight:"bold" }}>Relationship</th>
              <th style={{ border: "2px solid #555", fontSize: "18px", color:'#088621ff', fontWeight:"bold" }}>Elder<br></br> Brother</th>
              <th style={{ border: "2px solid #555", fontSize: "18px", color:'#088621ff', fontWeight:"bold" }}>Younger<br></br> Brother</th>
              <th style={{ border: "2px solid #555", fontSize: "18px", color:'#088621ff', fontWeight:"bold" }}>Elder Sister</th>
              <th style={{ border: "2px solid #555", fontSize: "18px", color:'#088621ff', fontWeight:"bold" }}>Younger<br></br> Sister</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "2px solid #555", fontSize: "18px"  }}> &nbsp; &nbsp; &nbsp;Married</td>
              <td style={{ border: "2px solid #555" }}>
                <select name="personalDetails.siblings.married.elderBrothers" value={form.personalDetails.siblings.married.elderBrothers} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
              <td style={{ border: "2px solid #555" }}>
                <select style={{ width: 125 }} name="personalDetails.siblings.married.youngerBrothers" value={form.personalDetails.siblings.married.youngerBrothers} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
              <td style={{ border: "2px solid #555" }}>
                <select name="personalDetails.siblings.married.elderSisters" value={form.personalDetails.siblings.married.elderSisters} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
              <td style={{ border: "2px solid #555" }}>
                <select style={{ width: 110 }} name="personalDetails.siblings.married.youngerSisters" value={form.personalDetails.siblings.married.youngerSisters} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
            </tr>
            <tr>
              <td style={{ border: "2px solid #555", fontSize: "18px" }}> &nbsp; &nbsp;UnMarried</td>
              <td style={{ border: "2px solid #555" }}>
                <select name="personalDetails.siblings.unmarried.elderBrothers" value={form.personalDetails.siblings.unmarried.elderBrothers} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
              <td style={{ border: "2px solid #555" }}>
                <select style={{ width: 125 }} name="personalDetails.siblings.unmarried.youngerBrothers" value={form.personalDetails.siblings.unmarried.youngerBrothers} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
              <td style={{ border: "2px solid #555" }}>
                <select name="personalDetails.siblings.unmarried.elderSisters" value={form.personalDetails.siblings.unmarried.elderSisters} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
              <td style={{ border: "2px solid #555" }}>
                <select style={{ width: 110 }} name="personalDetails.siblings.unmarried.youngerSisters" value={form.personalDetails.siblings.unmarried.youngerSisters} onChange={handleChange}>{brotherSisterOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select>
              </td>
            </tr>
          </tbody>
        </table>
        </div>

        {/* Any Other Details */}
<div className="personal-details-row">
    <div
        style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center", // vertically center
        gap: "10px", // spacing between label and textarea
        position: "relative",
        left: "5px",
        marginBottom: "8px"
        }}>
       <label
       htmlFor="anyOtherDetails"
       style={{ fontSize: "17px", whiteSpace: "nowrap" }}>
       <a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Any Other Details&nbsp; <br></br>
       &nbsp;( Talents, Acheivements, Likes,&nbsp; &nbsp;: <br></br> 
       Visa Status, Family details, God <br></br>etc., )</a>
       </label>

       <textarea
      id="anyOtherDetails"
      name="personalDetails.AnyOtherDetails"
      className="personal-details-textarea"
      value={form.personalDetails.AnyOtherDetails}
      onChange={handleChange}
      rows={3}
      style={{ width: 430 }}/>
    </div>
</div>

      </fieldset>

      {/* PHYSICAL ATTRIBUTES */}
      <fieldset className="physical-attributes-section">
  <legend className="physical-attributes-legend"><b>Physical Attributes</b></legend>
  <div className="physical-attributes-row" >
    <label className="physical-attributes-label" style={{ position: "relative", left: "150px", fontSize: "15px" } }>
      Height :
      <select
        className="physical-attributes-select"
        name="physicalAttributes.height"
        value={form.physicalAttributes.height}
        onChange={handleChange}
      >
        {heightOptions.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
    <label className="physical-attributes-label" style={{ position: "relative", left: "200px", fontSize: "15px" } }>
      Weight :
      <select
        className="physical-attributes-select"
        name="physicalAttributes.weight"
        value={form.physicalAttributes.weight}
        onChange={handleChange}
      >
        {weightOptions.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
    <label className="physical-attributes-label" style={{ position: "relative", left: "240px", fontSize: "15px" } }>
      Blood Group :
      <select
        className="physical-attributes-select"
        name="physicalAttributes.bloodGroup"
        value={form.physicalAttributes.bloodGroup}
        onChange={handleChange}
      >
        {bloodGroupOptions.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  </div>
 
        <div className="physical-attributes-row">
        <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
          <label style={{ position: "relative", left: "150px" } }>Diet&nbsp;:&nbsp;
            <input type="radio" name="physicalAttributes.diet" value="Vegetarian" checked={form.physicalAttributes.diet === "Vegetarian"} onChange={handleChange} />Vegetarian
            <input type="radio" name="physicalAttributes.diet" value="NonVeg" checked={form.physicalAttributes.diet === "NonVeg"} onChange={handleChange} />Non-Vegetarian
            <input type="radio" name="physicalAttributes.diet" value="Eggetarian" checked={form.physicalAttributes.diet === "Eggetarian"} onChange={handleChange} />Eggetarian
          </label>
          <label style={{ position: "relative", left: "200px" } }>&nbsp;&nbsp;Disability (If any)&nbsp;:&nbsp;
            <input type="radio" name="physicalAttributes.physicalStatus" value="No" checked={form.physicalAttributes.physicalStatus === "No"} onChange={handleChange} />No
            <input type="radio" name="physicalAttributes.physicalStatus" value="PhysicallyChallenged" checked={form.physicalAttributes.physicalStatus === "Physically Challenged"} onChange={handleChange} />Yes
          </label>
        </div>
        </div>
        <div className="physical-attributes-row">
        <div style={{ marginBottom: 8 }}>
          <label style={{ position: "relative", left: "92px" } }>
            Complexion&nbsp;:&nbsp;
            <input type="radio" name="physicalAttributes.complexion" value="VeryFair" checked={form.physicalAttributes.complexion === "VeryFair"} onChange={handleChange} />Very Fair
            <input type="radio" name="physicalAttributes.complexion" value="Fair" checked={form.physicalAttributes.complexion === "Fair"} onChange={handleChange} />Fair
            <input type="radio" name="physicalAttributes.complexion" value="Wheatish" checked={form.physicalAttributes.complexion === "Wheatish"} onChange={handleChange} />Wheatish
            <input type="radio" name="physicalAttributes.complexion" value="Wheatishbrown" checked={form.physicalAttributes.complexion === "Wheatishbrown"} onChange={handleChange} />Wheatish Brown
            <input type="radio" name="physicalAttributes.complexion" value="Dark" checked={form.physicalAttributes.complexion === "Dark"} onChange={handleChange} />Dark
          </label>
        </div>
        </div>
      </fieldset>

      {/* EDUCATION, OCCUPATION */}
      <fieldset className="education-occupation-section">
  <legend className="education-occupation-legend"><b>Education & Occupation Details</b></legend>
  <div className="education-occupation-row">
    <label className="education-occupation-label" style={{ position: "relative", left: "60px" } }>
      Qualification :
      <input
        className="education-occupation-input"
        name="educationOccupation.qualification"
        value={form.educationOccupation.qualification}
        onChange={handleChange}
      />
    </label>
    <label className="education-occupation-label" style={{ position: "relative", left: "120px" } }>
      Job :
      <input
        className="education-occupation-input"
        name="educationOccupation.job"
        value={form.educationOccupation.job}
        onChange={handleChange}
      />
    </label>
    <label className="education-occupation-label" style={{ position: "relative", left: "185px" } }>
      Place Of Job :
      <input
        className="education-occupation-input"
        name="educationOccupation.placeOfJob"
        value={form.educationOccupation.placeOfJob}
        onChange={handleChange}
      />
    </label>
  </div>
  <div className="education-occupation-row">
    <label className="education-occupation-label" style={{ position: "relative", left: "20px" } }>
      Income Per Month :
      <input
        className="education-occupation-input"
        name="educationOccupation.income"
        value={form.educationOccupation.income}
        onChange={handleChange}
      />
    </label>
  </div>
</fieldset>

      {/* ASTROLOGY DETAILS */}
    <fieldset className="astrology-details-section">
  <legend className="astrology-details-legend"><b>Astrology Details</b></legend>
  <div className="astrology-details-row">
    <label className="astrology-details-label" style={{ position: "relative", left: "90px", fontSize: "15px" }}>
      Religion :&nbsp;
      <input
        className="astrology-details-input"
        name="astrologyDetails.religion"
        value={form.astrologyDetails.religion}
        onChange={handleChange}
      />
    </label>
    <label className="astrology-details-label" style={{ position: "relative", left: "140px", fontSize: "15px" }}>
      Caste :&nbsp;
      <input
        className="astrology-details-input"
        name="astrologyDetails.caste"
        value={form.astrologyDetails.caste}
        onChange={handleChange}
      />
    </label>
    <label className="astrology-details-label" style={{ position: "relative", left: "230px", fontSize: "15px" }}>
      Subcaste :&nbsp;
      <input
        className="astrology-details-input"
        name="astrologyDetails.subcaste"
        value={form.astrologyDetails.subcaste}
        onChange={handleChange}
      />
    </label>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
        <div className="astrology-details-row"></div>

          <label style={{ position: "relative", left: "120px" }}>Star : &nbsp;&nbsp;<select
          name="astrologyDetails.star"
          className="astrology-details-input"
          value={form.astrologyDetails.star}
          onChange={handleChange}
          style={{ width: 150 }}
        >
          {stars.map((star, i) => (
            <option key={i} value={star}>{star}</option>
          ))}
        </select>
          </label>

          <label style={{ display: 'flex', gap: 2, alignItems: 'center', position: "relative", left: "132px" }}>
          Raasi / Moon Sign :
          <select
           name="astrologyDetails.raasi"
           className="astrology-details-input"
             value={form.astrologyDetails.raasi || "0"}
                onChange={handleChange}
                style={{ width: 150 }}>
                <option value="0">-- Select Rasi --</option>
                <option value="MESHAM">MESHAM</option>
                <option value="RISHABAM">RISHABAM</option>
                <option value="MITHUNAM">MITHUNAM</option>
                <option value="KATAKAM">KATAKAM</option>
                <option value="SIMMAM">SIMMAM</option>
                <option value="KANNI">KANNI</option>
                <option value="VRICHIKA">VRICHIKA</option>
                <option value="THULAM">THULAM</option>
                <option value="MAGARAM">MAGARAM</option>
                <option value="KUMBHAM">KUMBHAM</option>
                <option value="MEENAM">MEENAM</option>
                <option value="DHANUSU">DHANUSU</option>
           </select>
          </label>

          <label style={{ display: 'flex', gap: 8, alignItems: 'center', position: "relative", left: "235px" }}>
          Padam :&nbsp;<select
           name="astrologyDetails.padam"
           className="astrology-details-input"
             value={form.astrologyDetails.padam || "0"}
               onChange={handleChange}
               style={{ width: 153 }}>
               <option value="0">-Select Padam--</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
           </select>
          </label>
          </div>
          <div className="astrology-details-row" >
            <label style={{ position: "relative", left: "80px" }}>Gothram :&nbsp; &nbsp;<input
              name="astrologyDetails.gothram"
              className="astrology-details-input"
              value={form.astrologyDetails.gothram}
              onChange={handleChange}
                style={{ width: 150 }}
              />
            </label>
          </div>
      </fieldset>

     
  {/* Communication Details Header */}
<fieldset className="communication-details-section">
  <legend className="communication-details-legend"><b>Communication Details</b></legend>
  <div className="communication-details-row">
    <label className="communication-details-label">
      Permenant Address :
      <textarea
        className="communication-details-textarea"
        name="contactDetails.permanentAddress"
        rows={2}
        value={form.contactDetails.permanentAddress || ""}
        onChange={handleChange}
      />
    </label>
    <label className="communication-details-label">
      Present Address :
      <textarea
        className="communication-details-textarea"
        name="contactDetails.presentAddress"
        rows={2}
        value={form.contactDetails.presentAddress || ""}
        onChange={handleChange}
      />
    </label>
    <label className="communication-details-label">
      Contact Person :
      <input
        className="communication-details-"
        name="contactDetails.contactPerson"
        type="text"
        style={{ textTransform: "capitalize" }}
        value={form.contactDetails.contactPerson || ""}
        onChange={handleChange}
      />
    </label>
  </div>
  <div className="communication-details-row">
    <label className="communication-details-label" style={{ color: "red", position: "relative", left: "10px" }}>
      * Contact Number :&nbsp;
      <input
        className="communication-details-input"
        name="contactDetails.mobileNumber"
        type="text"
        value={form.contactDetails.mobileNumber || ""}
        onChange={e => {
          const val = e.target.value.replace(/[^0-9()\-\s]/g, "");
          handleChange({ target: { name: "contactDetails.mobileNumber", value: val } });
        }}
      />
    </label>
  </div>
</fieldset>
     

{/* Horoscope Details */}

 <table style={{ width: '99.7%', border: '2px solid #006633', borderCollapse: 'collapse', margin: '-2px -2px -10px 1.7px', marginBottom: '20px' }}>
      <tbody>
        <tr>
          <td
            style={{
              backgroundColor: '#006633',
              padding: '5px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Horoscope Details
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: 'white' }}>
            <table width="100%" cellPadding="5" cellSpacing="0">
              <tbody>
                <tr>
                  <td align="center" >
                    <div style={{ textAlign: 'center', position: 'relative', top: '5px', fontSize: '15px', left: '-10px' }}>
                      Dasa Balance : &nbsp;
                      <input type="text" className="horoscope-details-input"
                      
                      name="astrologyDetails.horoscopeChart.balance.dasa" value={form.astrologyDetails.horoscopeChart.balance.dasa || ""}    onChange={handleChange}/>
                      &nbsp;Dasa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" className="horoscope-details-input" name="astrologyDetails.horoscopeChart.balance.years"  style={{ width: '60px' }} value={form.astrologyDetails.horoscopeChart.balance.years || ""}    onChange={handleChange} />
                      &nbsp;Year(s)&nbsp;&nbsp;
                      <input type="text" className="horoscope-details-input" name="astrologyDetails.horoscopeChart.balance.months"  style={{ width: '60px' }} value={form.astrologyDetails.horoscopeChart.balance.months || ""}    onChange={handleChange} />
                      &nbsp;Month(s)&nbsp;&nbsp;
                      <input type="text" className="horoscope-details-input" name="astrologyDetails.horoscopeChart.balance.days"  style={{ width: '60px' }} value={form.astrologyDetails.horoscopeChart.balance.days || ""}    onChange={handleChange} />
                      &nbsp;Day(s)
                    </div>
                  </td>
                </tr>

                {/* RASI & AMSAM Layout */}
                <tr>
                  <td>
                    <table width="100%">
                      <tbody>
                        <tr>
                          {/* RASI Grid */}
                          <td>
                            <table >
                              <tbody>
                                <tr>
                                  {[1, 2, 3, 4].map(i => {
                                    const name = `astrologyDetails.horoscopeChart.rasi.txtHoro${i}`;
                                    const value = form.astrologyDetails.horoscopeChart.rasi[`txtHoro${i}`];
                                  return (
                                <td
                                  key={i}
                                  style={{
                                  border: '2px solid #868686ff', 
                                  }}
                                  >
                                   <TextBox name={name} value={value} onChange={handleChange} />
                                </td>
                               );
                                })}
                                </tr>
                                
                                <tr>
                                  <td  style={{
                                        border: '2px solid #868686ff',
                                      }}>
                                    <TextBox name="astrologyDetails.horoscopeChart.rasi.txtHoro12" value = {form.astrologyDetails.horoscopeChart.rasi.txtHoro12} onChange={handleChange} />
                                    <TextBox name="astrologyDetails.horoscopeChart.rasi.txtHoro11" value = {form.astrologyDetails.horoscopeChart.rasi.txtHoro11} onChange={handleChange} />
                                  </td>
                                  
                                  <td align="center">
                                    <b style={{ color: '#008000', fontFamily: 'Arial', fontSize: '18px', position: 'relative' , left: '50px'  }}>RASI</b>
                                  </td>
                                  <td style={{ position: 'relative' , left: '113px', border: '2px solid #868686ff',
                                        width: '100px',}}>
                                    <TextBox name="astrologyDetails.horoscopeChart.rasi.txtHoro5" value = {form.astrologyDetails.horoscopeChart.rasi.txtHoro5} onChange={handleChange} />
                                    <TextBox name="astrologyDetails.horoscopeChart.rasi.txtHoro6" value = {form.astrologyDetails.horoscopeChart.rasi.txtHoro6} onChange={handleChange} />
                                  </td>
                                </tr>
                                <tr>
                                  {[10,9,8,7].map(i => {
                                    const name = `astrologyDetails.horoscopeChart.rasi.txtHoro${i}`;
                                    const value = form.astrologyDetails.horoscopeChart.rasi[`txtHoro${i}`];
                                  return (
                                <td
                                  key={i}
                                  style={{
                                  border: '2px solid #868686ff',
                                  width: '100px', 
                                  }}
                                  >
                                   <TextBox name={name} value={value} onChange={handleChange} />
                                </td>
                               );
                                })}
                                </tr>

                              </tbody>
                            </table>
                          </td>

                          <td style={{ width: '20px' }}></td>

                          {/* AMSAM Grid */}
                          <td style={{ width: '400px' }}>
                            <table width="100%">
                              <tbody>
                                <tr>
                                  {[1, 2, 3, 4].map(i => {
                                    const name = `astrologyDetails.horoscopeChart.amsam.txtAmsam${i}`;
                                    const value = form.astrologyDetails.horoscopeChart.amsam[`txtAmsam${i}`];
                                  return (
                                <td
                                  key={i}
                                  style={{
                                  border: '2px solid #868686ff',
                                  width: '100px', 
                                  }}
                                  >
                                   <TextBox name={name} value={value} onChange={handleChange} />
                                </td>
                               );
                                })}
                                </tr>
                                
                                <tr>
                                  <td style={{
                                        border: '2px solid #868686ff',
                                        width: '100px'  }}>
                                    <TextBox name="astrologyDetails.horoscopeChart.amsam.txtAmsam12" value = {form.astrologyDetails.horoscopeChart.amsam.txtAmsam12} onChange={handleChange} />
                                    <TextBox name="astrologyDetails.horoscopeChart.amsam.txtAmsam11" value = {form.astrologyDetails.horoscopeChart.amsam.txtAmsam11} onChange={handleChange} /> 

                                  </td>
                                  <td align="center">
                                    <b style={{ color: '#008000', fontFamily: 'Arial', fontSize: '18px' , position: 'relative' , left: '50px' }}>AMSAM</b>
                                  </td>
                                   <td style={{ position: 'relative' , left: '113px',  border: '2px solid #868686ff',
                                        width: '100px'}}>
                                    <TextBox name="astrologyDetails.horoscopeChart.amsam.txtAmsam5" value = {form.astrologyDetails.horoscopeChart.amsam.txtAmsam5} onChange={handleChange} />
                                    <TextBox name="astrologyDetails.horoscopeChart.amsam.txtAmsam6" value = {form.astrologyDetails.horoscopeChart.amsam.txtAmsam6} onChange={handleChange} />
                                  </td>
                                </tr>
                                <tr>
                                  {[10,9,8,7].map(i => {
                                    const name = `astrologyDetails.horoscopeChart.amsam.txtAmsam${i}`;
                                    const value = form.astrologyDetails.horoscopeChart.amsam[`txtAmsam${i}`];
                                  return (
                                <td
                                  key={i}
                                  style={{
                                  border: '2px solid #868686ff',
                                  width: '100px',
                                  }}
                                  >
                                   <TextBox name={name} value={value} onChange={handleChange} />
                                </td>
                               );
                                })}
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


{/* =============== PARTNER EXPECTATION DETAILS =============== */}
<fieldset className="partner-expectation-section">
  <legend className="partner-expectation-legend">
    Partner Expectation Details (வாழ்க்கை துணை பற்றிய எதிர்பார்ப்பு)
  </legend>
  <div className="partner-expectation-row" style={{ display: "flex", flexWrap: "wrap", gap: "14px 7px" }}>
    <label style={{ position: "relative", left: "100px" }}>Qualification: <input name="partnerExpectation.qualification" 
    value={form.partnerExpectation.qualification || ""} onChange={handleChange} style={{ width: 130 }} /></label>
    <label style={{ position: "relative", left: "160px" }}>Job: <input name="partnerExpectation.job" value={form.partnerExpectation.job || ""} onChange={handleChange} style={{ width: 110 }} /></label>
    <label style={{ position: "relative", left: "220px" }}>Job:&nbsp;
      <input type="radio" name="partnerExpectation.jobRequired" value="Must" checked={form.partnerExpectation.jobRequired==="Must"} onChange={handleChange} />Must&nbsp;
      <input type="radio" name="partnerExpectation.jobRequired" value="Optional" checked={form.partnerExpectation.jobRequired==="Optional"} onChange={handleChange} />Optional&nbsp;
      <input type="radio" name="partnerExpectation.jobRequired" value="Not required" checked={form.partnerExpectation.jobRequired==="Not required"} onChange={handleChange} />Not required
    </label>
    
    </div>
    <div className="partner-expectation-row" style={{ display: "flex", flexWrap: "wrap", gap: "14px 7px" }}>
      <label style={{ position: "relative", left: "60px" }}>Income Per Month: <input name="partnerExpectation.income" value={form.partnerExpectation.income || ""} onChange={handleChange} style={{ width: 110 }} /></label>
    <label style={{ position: "relative", left: "80px" }}>Preferred Age: 
      <select name="partnerExpectation.age.from" value={form.partnerExpectation.age.from || ""} onChange={handleChange}>
        <option value="">Select</option>
        {[...Array(31).keys()].slice(18).map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select> to 
      <select name="partnerExpectation.age.to" value={form.partnerExpectation.age.to || ""} onChange={handleChange}>
        <option value="">Select</option>
        {[...Array(31).keys()].slice(18).map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </label>
    <label style={{ position: "relative", left: "138.5px", top: "5px" }}>
  Diet: &nbsp;
  <input 
    type="checkbox" 
    name="partnerExpectation.diet.vegetarian" 
    checked={!!form.partnerExpectation.diet.vegetarian} 
    onChange={e => setForm(f => ({
      ...f, 
      partnerExpectation: { 
        ...f.partnerExpectation, 
        diet: { 
          ...f.partnerExpectation.diet, 
          vegetarian: !f.partnerExpectation.diet.vegetarian 
        }
      }
    }))} 
  />&nbsp;Vegetarian&nbsp;

  <input type="checkbox" name="partnerExpectation.diet.nonVegetarian" checked={!!form.partnerExpectation.diet.nonVegetarian} 
    onChange={e => setForm(f => ({
      ...f, 
      partnerExpectation: { 
        ...f.partnerExpectation, 
        diet: { 
          ...f.partnerExpectation.diet, 
          nonVegetarian: !f.partnerExpectation.diet.nonVegetarian 
        }
      }
    }))} 
  /> Non-Vegetarian &nbsp;
<br></br> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
  <input 
    type="checkbox" 
    name="partnerExpectation.diet.eggetarian" 
    checked={!!form.partnerExpectation.diet.eggetarian} 
    onChange={e => setForm(f => ({
      ...f, 
      partnerExpectation: { 
        ...f.partnerExpectation, 
        diet: { 
          ...f.partnerExpectation.diet, 
          eggetarian: !f.partnerExpectation.diet.eggetarian 
        }
      }
    }))} 
  /> &nbsp;Eggetarian&nbsp;

  <input 
    type="checkbox" 
    name="partnerExpectation.diet.any" 
    checked={!!form.partnerExpectation.diet.any} 
    onChange={e => setForm(f => ({
      ...f, 
      partnerExpectation: { 
        ...f.partnerExpectation, 
        diet: { 
          ...f.partnerExpectation.diet, 
          any: !f.partnerExpectation.diet.any 
        }
      }
    }))} 
  /> Doesn't Matter&nbsp;
</label>

    
</div>
  <div className="partner-expectation-row" style={{ display: "flex", flexWrap: "wrap", gap: "14px 7px" }}>
    <label style={{ position: "relative", left: "45px" }}>
      Horoscope Required:&nbsp;
      <input type="radio" name="partnerExpectation.horoscopeRequired" value="Yes" checked={form.partnerExpectation.horoscopeRequired==="Yes"} onChange={handleChange} /> Yes
      <input type="radio" name="partnerExpectation.horoscopeRequired" value="No" checked={form.partnerExpectation.horoscopeRequired==="No"} onChange={handleChange} /> No
    </label>
    <label style={{ position: "relative", left: "100px", fontSize: "15px" }}>
  Marital Status:&nbsp;
  <input 
    type="checkbox" 
    name="partnerExpectation.maritalStatus.unmarried" 
    checked={!!form.partnerExpectation.maritalStatus.unmarried} 
    onChange={e => setForm(f => ({
      ...f,
      partnerExpectation: {
        ...f.partnerExpectation,
        maritalStatus: {
          ...f.partnerExpectation.maritalStatus,
          unmarried: !f.partnerExpectation.maritalStatus.unmarried,
        }
      }
    }))} 
  /> Unmarried

  <input 
    type="checkbox" 
    name="partnerExpectation.maritalStatus.married" 
    checked={!!form.partnerExpectation.maritalStatus.married} 
    onChange={e => setForm(f => ({
      ...f,
      partnerExpectation: {
        ...f.partnerExpectation,
        maritalStatus: {
          ...f.partnerExpectation.maritalStatus,
          married: !f.partnerExpectation.maritalStatus.married,
        }
      }
    }))} 
  /> Married

  <input 
    type="checkbox" 
    name="partnerExpectation.maritalStatus.widow" 
    checked={!!form.partnerExpectation.maritalStatus.widow} 
    onChange={e => setForm(f => ({
      ...f,
      partnerExpectation: {
        ...f.partnerExpectation,
        maritalStatus: {
          ...f.partnerExpectation.maritalStatus,
          widow: !f.partnerExpectation.maritalStatus.widow,
        }
      }
    }))} 
  /> Widow/Widower

  <input 
    type="checkbox" 
    name="partnerExpectation.maritalStatus.divorce" 
    checked={!!form.partnerExpectation.maritalStatus.divorce} 
    onChange={e => setForm(f => ({
      ...f,
      partnerExpectation: {
        ...f.partnerExpectation,
        maritalStatus: {
          ...f.partnerExpectation.maritalStatus,
          divorce: !f.partnerExpectation.maritalStatus.divorce,
        }
      }
    }))} 
  /> Divorce

  <input 
    type="checkbox" 
    name="partnerExpectation.maritalStatus.any" 
    checked={!!form.partnerExpectation.maritalStatus.any} 
    onChange={e => setForm(f => ({
      ...f,
      partnerExpectation: {
        ...f.partnerExpectation,
        maritalStatus: {
          ...f.partnerExpectation.maritalStatus,
          any: !f.partnerExpectation.maritalStatus.any,
        }
      }
    }))} 
  /> Doesn't Matter
</label>
</div>
  <div className="partner-expectation-row" style={{ display: "flex", flexWrap: "wrap", gap: "14px 7px" }}>
 <div className="partner-expectation-row" style={{ flexBasis: "100%" }}></div> {/* Force new line */}
     <label style={{ position: "relative", left: "155px", fontSize: "15px" }}>Caste: <input name="partnerExpectation.caste" value={form.partnerExpectation.caste || ""} onChange={handleChange} style={{ width: 130 }} /></label>
    <label style={{ position: "relative", left: "190px", fontSize: "15px" }}>Sub Caste: <input name="partnerExpectation.subcaste" value={form.partnerExpectation.subcaste || ""} onChange={handleChange} style={{ width: 130 }} /></label>
  </div>
  <div className="partner-expectation-row" style={{ margin: "10px 0", flexDirection: "row" }}>
    <label style={{ position: "relative", left: "70px", fontSize: "15px", width: "50%"  }}>
      Any other Comments: <br />
      <textarea name="partnerExpectation.anyOtherExpectation" value={form.partnerExpectation.anyOtherExpectation || ""} onChange={handleChange} rows={3} style={{ width: "98%" }} />
    </label>
  </div>
</fieldset>

{/* ====================== PHOTO SECTION ====================== */}
<fieldset className="photo-section">
      <legend className="photo-section-legend">Photo</legend>
      <div className="photo-section-content">
      {[0, 1].map((idx) => (
        <div style={{ display: "flex", alignItems: "center", margin: "16px 0" }} key={idx}>
          <div style={{ textAlign: "center", marginRight: 16 }}>
            <div>Upload Photo {idx + 1} (Mb):</div>
            <img
              src={photos[idx].preview}
              alt="Preview"
              style={{
                width: 80,
                height: 80,
                border: "1px solid #ddd",
                display: "block",
                marginBottom: 4,
              }}
            />
            <input
              id={`photo-input-${idx}`}
              type="file"
              name={`photo${idx + 1}`}
              accept="image/*"
              style={{ width: 140 }}
              onChange={(e) => handleChangee(e, idx)}
            />
          </div>
          <div style={{ marginRight: 16, minWidth: 100 }}>
            <span>
              {photos[idx].file ? "Picture Attached" : "No Picture Attached"}
            </span>
          </div>
          <div>
            <button type="button" onClick={() => handleClear(idx)}>
              Clear
            </button>
          </div>
        </div>
      ))}
      </div>
    </fieldset>

{/* =================== SCHEME DETAILS =================== */}
<fieldset className="scheme-details-section">
  <legend className="scheme-details-legend">Scheme Details</legend>
   <div className="scheme-details-row" style={{ display: "flex", flexWrap: "wrap", gap: "14px 7px" }}>
    <label style={{ position: "relative", left: "10px", top: "10px", fontSize: "18px" }} >Scheme*:
      <select name="schemeDetails.scheme" value={form.schemeDetails.scheme || ""} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Registed">One Time Reg Charge</option>
        
      </select>
    </label>
    <label style={{ position: "relative", left: "30px", top: "10px", fontSize: "18px" }}>User Name (Login)*:
      <input type="email" name="schemeDetails.username" value={form.schemeDetails.username || ""} onChange={handleChange} placeholder="Eg: xxxxxxxx@yyyyy.com" required />
    </label>
    <label style={{ position: "relative", left: "133px", top: "10px", fontSize: "18px" }}>Password*:
      <input type="password" name="schemeDetails.password" value={form.schemeDetails.password || ""} onChange={handleChange} required />
    </label>

    <label style={{ position: "relative", left: "650px", top: "6px", fontSize: "18px" }}>Confirm Password*:
      <input type="password" name="schemeDetails.confirmPassword" value={form.schemeDetails.confirmPassword || ""} onChange={handleChange} required />
    </label>
    </div>
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, marginLeft: 10, fontSize: "18px", position: "relative", left: "40px"  }}>
      <input 
        type="checkbox" 
        name="schemeDetails.acceptTerms" 
        className="scheme-details-row"
        style={{ width: 18, height: 18 }} // <-- Increased size
        checked={!!form.schemeDetails.acceptTerms} 
        onChange={e => setForm(f => ({...f, schemeDetails: {
          ...f.schemeDetails,
          acceptTerms: e.target.checked  // update nested field, not root!
        }
      }))} required/>
      &nbsp;I accept the<div>
      {/* Trigger Link */}
      <span
        style={{ color: "#0066cc", textDecoration: "underline", cursor: "pointer" }}
        onClick={() => setShowPopup(true)}
      >
        Terms & Conditions
      </span>

      {/* Popup */}
      {showPopup && (
        <div className="terms-popup-overlay">
          <div className="terms-popup">
            {/* Close Button */}
            <button className="terms-close" onClick={() => setShowPopup(false)}>
              ×
            </button>

            {/* Popup Content */}
            <h2>Terms & Conditions</h2>
            <p>
              IF YOU DON'T KNOW TAMIL DON'T REGISTER IN{" "}
              <a href="http://www.SornamMatrimony.com" target="_blank" rel="noreferrer">
                www.SornamMatrimony.com
              </a>
            </p>

            <div className="terms-content">
              <p>
                சொர்ணம் மேட்ரிமோனி.காம் இங்கு நான் கொடுக்கப்பட்ட தகவல் அனைத்தும் உண்மை என உறுதி
                கூறுகிறேன். சொர்ணம்மேட்ரிமோனி.காம் திருமணத்துக்கான மணமகன்/மணமகலின் அறிமுக தகவல் பாலம்
                மட்டுமே என்பதை அறிவேன் ,மேற்படி எந்தவித பொறுப்பும் சொர்ணம் மேட்ரிமோனி.காம் க்கு இல்லை
                என்பதை ஏற்கிறேன்,
              </p>
              <p>
                சொர்ணம் மேட்ரிமோனி.காம் இல் தொடர்ந்து வரும் வரன்களின் தகவல்களின் உண்மை தரத்தை /
                உண்மை தன்மையும் அறிந்து புரிந்து பின் தாங்களே திருமண முயற்சி செய்து கொள்ளவேண்டும் இது
                விளம்பர பதிவாளர்களான வரன் / பெற்றோர்களான தங்களின் முழு பொறுப்பு
              </p>
              <p>
                வரன் பதிவுகள் அதிகபட்சம் மூன்று வருடம் மட்டுமே அதற்கு பின் இலவசமாக அதே பதிவு எண்ணில்
                பதிவாளரான தாங்களே இலவச மறு பதிவு செய்துகொள்ள வேண்டு அப்படி இல்லாத பட்சத்தில் பதிவு
                நீக்கப்பட சொர்ணம் மேட்ரிமோனி.காம் உரிமை உண்டு
              </p>
              <p>
                மேற்படி சொர்ணம் மேட்ரிமோனி.காம் இணையதளத்தின் தகவலின் எழுத்து ,வண்ணபடம் ,ஜாதகம்,தொலைபேசி எண் ,வேலை,படிப்பு ,சொத்து விபரங்கள்.... மற்ற விளம்பர தகவல்களில் ஏற்படும் தற்செயலான தட்டச்சு தவறுகள் தொழில்நுட்ப தவறுகள்/ எதிர்பாராத இணையத்தள தொழில்நுட்ப தவறுகளை தாங்கள்தான் தொடர்ந்து சரிபார்த்து எங்களிடம் சரிசெய்ய எங்கள் இணையதள மினஞ்சல் முகவரிக்கு அனுப்பி அல்லது தாங்களே நேரில் / இணையதள வழி சரி செய்துகொள்ள வேண்டும்
              </p>
              <p>
                சொர்ணம் மேட்ரிமோனி.காம் இணையதள விளம்பர சேவை மற்றும் சட்ட திட்டங்களில் எழும் சந்தேகங்களை அறிந்து புரிந்து பின் திருமண வரன்/ பெற்றோர் பதிவு செய்வது வரன் பதிவாளர் பொறுப்பு
</p>
              
              <p>
                சொர்ணம் மேட்ரிமோனி.காம் இல் பதிவான தகவல்கள் அனைத்தும் தனிப்பட்ட தகவல்கள் ஆகும் எனவே அந்த தகவல்களை சொர்ணம் மேட்ரிமோனி.காம் இல் பதிவு செய்தவரின் அனுமதி இல்லாமல் எந்தவித மூன்றாம் நபருக்கும் தெரியப்படுத்த மாட்டேன் என உறுதி கூறுகிறேன்
              </p>
              <p>
                சொர்ணம் மேட்ரிமோனி.காம் இல் பதிவான தகவல்களை தவறான வழிகளிலோ அல்லது வருமானம் சம்பாதிக்கும் செயல் செய்யமாட்டேன் என உறுதி கூறுகிறேன்
              </p>
              <p>
                சொர்ணம்மேட்ரிமோனி.காம் இல் பதிவான தகவல்களை தவறான வழிகளிலோ அல்லது வருமானம் சம்பாதிக்கும் செயல் செய்யமாட்டேன் என உறுதி கூறுகிறேன்
              </p>
              <p>
                திருமண வரன் பதிவாளர் / இலவச பார்வையாளர்களுக்காக ; சொர்ணம் மேட்ரிமோனி.காம் தகவல்களை தவறான படி பயன்படுத்த மாட்டேன் என்றும் சொர்ணம்மேட்ரிமோனி.காம் இன் அனுமதி இல்லாமல் எந்தவித தகவலையும் தவறான வழிகளிலோ அல்லது வருமானம் சம்பாதிக்கும் செயல் செய்யமாட்டேன் என உறுதி கூறுகிறேன், அப்படி நான் தவறு செய்தால் சொர்ணம் மேட்ரிமோனி.காம் எடுக்கும் சட்ட முறையீடுக்கு கட்டுப்படுகிறேன். மேற்படி இந்த இணையவழி திருமண சேவைக்கு எனது பாராட்டையும் நன்றியையும் சமர்ப்பிக்கிறேன் மேலும் மேலும் இந்த திருமண சேவை எல்லோரையும் சென்றடைய வாழ்த்துகிறேன்<br></br> நன்றி. ..நன்றி...நன்றி...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </label>

  <div style={{ margin: "18px 0 0", color: "#006633", fontWeight: "bold", fontSize: 18 }}>
    For 3 Years, Registration Fees Rs.1000 to advertise your profile in our SornamMatrimony.org website & Mobile App.
  </div>
  <div style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
    Note: After registered your profile in our website, Your Profile will be maintain only if you pay the registration amount within 1 day or else we will delete your profile.<br></br>
    Please send me your payment copy with Website registration number, name and mobile number by Email: <a href="mailto:Sornammatrimatrimony@gmail.com">Sornammatrimatrimony@gmail.com</a>,<br></br> WhatsApp or SMS to our Mobile : +91-8056484898
    For Enquiry Contact this <b>Mobile : +91-8056484898</b>
  </div>
</fieldset>

{/* ======= SUBMIT BUTTON ======= */}
{/* ======= SUBMIT BUTTON ======= */}
<div style={{ textAlign: "center", margin: "32px 0 40px" }}>
  <button
    type="submit"
    style={{
      background: "#006633",
      color: "#fff",
      fontWeight: "bold",
      padding: "10px 55px",
      fontSize: 18,
      border: "none",
      borderRadius: 7,
      boxShadow: "0 3px 8px #aaa",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#00994d";
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 4px 12px #888";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "#006633";
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 3px 8px #aaa";
    }}
    onMouseDown={(e) => {
      e.target.style.transform = "scale(0.97)";
    }}
    onMouseUp={(e) => {
      e.target.style.transform = "scale(1.05)";
    }}
  >
    Submit
  </button>
</div>


    </form>
  </div>
  );
};
