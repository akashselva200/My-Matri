import React from "react";

const UserFullView = ({ profile }) => {
  if (!profile) return <p>No profile data available</p>;

  return (
    <div className="profile-view-container">
      <h2>My Profile</h2>
      <table cellPadding="5" cellSpacing="0" className="profile-table">
        <tbody>
          <tr>
            <td><strong>Reg. No. :</strong></td>
            <td>{profile.regNo}</td>
          </tr>
          <tr>
            <td><strong>Name :</strong></td>
            <td>{profile.name}</td>
          </tr>
          <tr>
            <td><strong>Cell No :</strong></td>
            <td>{profile.cellNo}</td>
          </tr>
          <tr>
            <td><strong>Email ID :</strong></td>
            <td>{profile.email}</td>
          </tr>
          <tr>
            <td><strong>Scheme:</strong></td>
            <td>{profile.scheme}</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            <td>{profile.status}</td>
          </tr>
          <tr>
            <td><strong>Reg. Month:</strong></td>
            <td>{profile.regMonth}</td>
          </tr>
          <tr>
            <td><strong>Exp. Month:</strong></td>
            <td>{profile.expMonth}</td>
          </tr>
        </tbody>
      </table>

      <h3>Bio Data</h3>
      <table cellPadding="5" cellSpacing="0" className="profile-table">
        <tbody>
          <tr>
            <td><strong>Religion - Mother Tongue - Caste - Sub caste</strong></td>
            <td>{profile.religion} - {profile.motherTongue} - {profile.caste} - {profile.subCaste}</td>
          </tr>
          <tr>
            <td><strong>Gender</strong></td>
            <td>{profile.gender}</td>
          </tr>
          <tr>
            <td><strong>DOB - Time - Place</strong></td>
            <td>{profile.dob} - {profile.time} - {profile.place}</td>
          </tr>
          <tr>
            <td><strong>Gothram - Star - Rasi</strong></td>
            <td>{profile.gothram} - {profile.star} - {profile.raasi}</td>
          </tr>
          <tr>
            <td><strong>Padam - Laknam</strong></td>
            <td>{profile.padam} - {profile.laknam}</td>
          </tr>
          <tr>
            <td><strong>Qualification - Job - Place of Job</strong></td>
            <td>{profile.qualification} - {profile.job} - {profile.placeOfJob}</td>
          </tr>
          <tr>
            <td><strong>Income / month - Height - Complexion</strong></td>
            <td>{profile.incomePerMonth} - {profile.height} - {profile.complexion}</td>
          </tr>
          <tr>
            <td><strong>Disability (If any)</strong></td>
            <td>{profile.disability}</td>
          </tr>
          <tr>
            <td><strong>Father's Name - Alive - Job</strong></td>
            <td>{profile.fatherName} - {profile.fatherAlive} - {profile.fatherJob}</td>
          </tr>
          <tr>
            <td><strong>Mother's Name - Alive - Job</strong></td>
            <td>{profile.motherName} - {profile.motherAlive} - {profile.motherJob}</td>
          </tr>
          <tr>
            <td><strong>Relationship</strong></td>
            <td>
              Elder Brother: {profile.relationship.elderBrother} <br />
              Younger Brother: {profile.relationship.youngerBrother} <br />
              Elder Sister: {profile.relationship.elderSister} <br />
              Younger Sister: {profile.relationship.youngerSister}
            </td>
          </tr>
          <tr>
            <td><strong>Weight - Blood Group</strong></td>
            <td>{profile.weight} - {profile.bloodGroup}</td>
          </tr>
          <tr>
            <td><strong>Marital Status - Nativity</strong></td>
            <td>{profile.maritalStatus} - {profile.nativity}</td>
          </tr>
          <tr>
            <td><strong>Diet</strong></td>
            <td>{profile.diet}</td>
          </tr>
          <tr>
            <td><strong>Any Other Details</strong></td>
            <td>{profile.anyOtherDetails}</td>
          </tr>
        </tbody>
      </table>

      <h3>Expectations</h3>
      <table cellPadding="5" cellSpacing="0" className="profile-table">
        <tbody>
          <tr>
            <td><strong>Preferred Age</strong></td>
            <td>{profile.expectations.age}</td>
          </tr>
          <tr>
            <td><strong>Qualification</strong></td>
            <td>{profile.expectations.qualification}</td>
          </tr>
          <tr>
            <td><strong>Job</strong></td>
            <td>{profile.expectations.job}</td>
          </tr>
          <tr>
            <td><strong>Job - Income / month</strong></td>
            <td>{profile.expectations.jobIncome}</td>
          </tr>
          <tr>
            <td><strong>Caste - Sub Caste</strong></td>
            <td>{profile.expectations.caste} - {profile.expectations.subCaste}</td>
          </tr>
          <tr>
            <td><strong>Diet</strong></td>
            <td>{profile.expectations.diet}</td>
          </tr>
          <tr>
            <td><strong>Marital Status</strong></td>
            <td>{profile.expectations.maritalStatus}</td>
          </tr>
          <tr>
            <td><strong>Horoscope Required?</strong></td>
            <td>{profile.expectations.horoscopeRequired}</td>
          </tr>
          <tr>
            <td><strong>Any Other Expectation</strong></td>
            <td>{profile.expectations.anyOtherExpectation}</td>
          </tr>
        </tbody>
      </table>

      <h3>Contact Details</h3>
      <p><strong>Contact Person:</strong> {profile.contactPerson}</p>
      <p><strong>Present Address:</strong> {profile.presentAddress}</p>
      <p><strong>Permanent Address:</strong> {profile.permanentAddress}</p>
      <p><strong>Phone No:</strong> {profile.phoneNo}</p>
    </div>
  );
};

// Sample profile object for demo
export const sampleProfile = {
  regNo: "M15597",
  name: "NO NAME",
  cellNo: "",
  email: "",
  scheme: "One Time Marriage Registration Charge",
  status: "Married",
  regMonth: "23/06/2022",
  expMonth: "23/06/2023",
  religion: "Hindu",
  motherTongue: "Tamil",
  caste: "Mudaliyar",
  subCaste: "SENGUNTHAR / KAIKOLAR",
  gender: "Male",
  dob: "01/02/1996",
  time: "5:20 PM",
  place: "சென்னை",
  gothram: "சிவ கோத்திரம்",
  star: "THIRUVADIRAI",
  raasi: "MITHUNAM",
  padam: "KATAKAM",
  laknam: "",
  qualification: "B.E (MECH), M.E (ENG.DESIGN)",
  job: "M/S MAESTRO STEEL DETAILING Pvt.Ltd.",
  placeOfJob: "Chennai",
  incomePerMonth: "25000",
  height: "5ft 5in - 165cm",
  complexion: "Fair",
  disability: "No",
  fatherName: "K.Jayaprakasam",
  fatherAlive: "Yes",
  fatherJob: "EE/TNEB",
  motherName: "J.Sumathi",
  motherAlive: "Yes",
  motherJob: "Homemaker",
  relationship: {
    elderBrother: 1,
    youngerBrother: 0,
    elderSister: 0,
    youngerSister: 0
  },
  weight: "59 kg",
  bloodGroup: "A+",
  maritalStatus: "Unmarried",
  nativity: "பனப்பாக்கம்,இராணிப்பேட்டைமாவட்டம்",
  diet: "Non-Vegetarian",
  anyOtherDetails: "சொந்த வீடுகள்,கடைகள் மற்றும் வீட்டு மனைகள்.",
  expectations: {
    age: "Any",
    qualification: "Any Degree",
    job: "Must",
    jobIncome: "--",
    caste: "Mudaliyar",
    subCaste: "SENGUNTHAR / KAIKOLAR",
    diet: "Non vegetarian",
    maritalStatus: "UnMarried",
    horoscopeRequired: "Yes",
    anyOtherExpectation: ""
  },
  contactPerson: "K.Jayaprakasam & J.Sumathi",
  presentAddress: "J.HarishKumar ,M.E (ENG.DESIGN) 9444222520, 6380544549",
  permanentAddress: "No.323, Vivekanadhar street, T.V.Puram, Ponneri.",
  phoneNo: ""
};

export default UserFullView;
