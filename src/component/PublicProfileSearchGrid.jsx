// PublicProfileSearchGrid.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/PublicProfileSearchGrid.css';
import Header from './Header';

const GENDER_OPTIONS = ['Any','Female', 'Male'];
const LANGUAGE_OPTIONS = ['Any', 'Tamil', 'Telugu', 'Malayalam'];
// Populate all your caste and subcaste options here:
const CASTE_OPTIONS = [
  'Any', 'MUDALIYAR', 'Vanniya Kula Kshatriya', 'Maruthuvar', 'Chettiyar', 'Nadar', 'KULALAR / UDAYAR', 'KARUNEEGAR',
  'JANGAM / THAMBIRAAR', 'VISHVAKARMA', 'PILLAI', 'DEVAR', 'BHRAMIN / IYER', 'ADHI DRAVIDAR (SC)', 'VANNAR',
  'YADAVA', 'ARUNTHATHIYAR', 'BHRAMIN / IYENGAR', 'JAIN', 'CAST NO BAR / INTERCASTE', 'VEERAKKUDI VELLAALAR',
  'DEVENDRA KULA VELLALAR', 'PARUVATHA RAJA KULAM (MEENAVAR)', 'KONGU VELLALA GOUNDER', 'VETTAIKAARA NAYAKKAR',
  'PARKAVA KULAM (UDAIYAR)', 'VALLUVAR (SC)', 'Patel' // Add your own as needed
];
const SUBCASTE_OPTIONS = ['Any', 'Kadva Patel']; // Add more as needed
const MARITAL_OPTIONS = [
  { label: 'Any', value: '' }, { label: 'Unmarried', value: 'Unmarried' },
  { label: 'Widow/Widower', value: 'Widow/Widower' }, { label: 'Divorce', value: 'Divorce' },
  { label: 'Awaiting Divorce', value: 'Awaiting Divorce' }
];
const SORT_OPTIONS = [
  { label: 'ID(Descending Order)', value: 'desc' },
  { label: 'ID(Ascending Order)', value: 'asc' }
];
const AGE_OPTIONS = Array.from({ length: 28 }, (_, i) => 18 + i); // 18-45

function SearchForm({ formInputs, setFormInputs, setFilters, onSearch }) {
  // Handles all dropdown and input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs(f => ({
      ...f,
      [name]: value
    }));
  };

  // Handles form submit (Go button)
  const handleGo = (e) => {
    e.preventDefault();
    // Only update filters on submit
    setFilters(formInputs);
    onSearch();
  };

  return (
   
    <div className="Header-container" >
      <Header />
      <div className="advanced-search">
        <div className="search-header">
          <i>Advanced Search</i>
        </div>
        <form className="search-form-container" onSubmit={handleGo}>
          <table className="search-table">
            <tbody>
              <tr>
                <td>
                  <table className="inner-search-table">
                    <tbody>
                      <tr>
                        <td className="gender-select">
                          <label>
                            Select by : Gender{' '}
                            <select name="gender" value={formInputs.gender} onChange={handleChange}>
                              {GENDER_OPTIONS.map(opt => (
                                <option key={opt} value={opt === 'Any' ? '' : opt}>{opt}</option>
                              ))}
                            </select>
                          </label>
                        </td>
                        <td className="language-select">
                          <label>
                            Language{' '}
                            <select name="language" value={formInputs.language} onChange={handleChange}>
                              {LANGUAGE_OPTIONS.map(opt => (
                                <option key={opt} value={opt === 'Any' ? '' : opt}>{opt}</option>
                              ))}
                            </select>
                          </label>
                        </td>
                        <td className="caste-select">
                          <label>
                            Caste:{' '}
                            <select name="caste" value={formInputs.caste} onChange={handleChange}>
                              {CASTE_OPTIONS.map(opt => (
                                <option key={opt} value={opt === 'Any' ? '' : opt}>{opt}</option>
                              ))}
                            </select>
                          </label>
                        </td>
                        <td className="subcaste-select">
                          <label>
                            Subcaste:{' '}
                            <select name="subcaste" value={formInputs.subcaste} onChange={handleChange}>
                              {SUBCASTE_OPTIONS.map(opt => (
                                <option key={opt} value={opt === 'Any' ? '' : opt}>{opt}</option>
                              ))}
                            </select>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table className="inner-search-table">
                    <tbody>
                      <tr>
                        <td className="sort-by-select">
                          <label>
                            Sort by :
                            <select name="sortBy" value={formInputs.sortBy} onChange={handleChange}>
                              {SORT_OPTIONS.map((o, i) => (
                                <option key={i} value={o.value}>{o.label}</option>
                              ))}
                            </select>
                          </label>
                        </td>
                        <td className="age-select">
                          <label>
                            Age from{' '}
                            <select name="ageFrom" value={formInputs.ageFrom} onChange={handleChange}>
                              <option value="">Any</option>
                              {AGE_OPTIONS.map(val => <option key={val} value={val}>{val}</option>)}
                            </select>
                          </label>
                          &nbsp; To{' '}
                          <select name="ageTo" value={formInputs.ageTo} onChange={handleChange}>
                            <option value="">Any</option>
                            {AGE_OPTIONS.map(val => <option key={val} value={val}>{val}</option>)}
                          </select>
                        </td>
                        <td className="marital-status-select">
                          <label>
                            Marital Status
                            <select name="maritalStatus" value={formInputs.maritalStatus} onChange={handleChange}>
                              {MARITAL_OPTIONS.map(o =>
                                <option key={o.label} value={o.value}>{o.label}</option>
                              )}
                            </select>
                          </label>
                        </td>
                        <td className="search-button">
                          <button
                            type="submit"
                            style={{
                              width: 40,
                              height: 40,
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer"
                            }}
                          >
                            <img
                              src="images/SearchGo.jpg"
                              alt="Go"
                              style={{ width: 40 }}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
   
  );
}

function getAge(dateString) {
  if (!dateString) return null;
  const today = new Date();
  const dob = new Date(dateString);
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

// Utility: Returns the image path or a default fallback if missing
function getProfileImage(profile) {
  // Check the photos object first, then fall back to guessing the path.
  if (profile?.photos?.photo1) {
    return profile.photos.photo1;
  }
  return `/photos/${profile.id}_1.jpg`; // Fallback for older data
}

function ProfileGrid({ profiles }) {

  // Sort descending by id
  const sortedProfiles = [...profiles].sort((a, b) => b.id - a.id);
  const { id } = useParams();  // get id from URL
  
  return (
    <div className="profile-grid-container">
      <table className="profile-grid">
        <thead>
          <tr className="grid-header">
            <th>S.No</th>
            <th>Reg.No</th>
            <th>Name</th>
            <th>Caste</th>
            <th>Sub Caste</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {profiles.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', color: 'gray' }}>No Results Found</td>
            </tr>
          )}
          {profiles.map((profile, idx) => (
            <tr key={profile.id} className="grid-row">
              <td>{idx + 1}</td>
              <td>
                <Link to={`/profile/${profile.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {profile.id}
                </Link>
              </td>
              <td>
                <Link to={`/profile/${profile.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {profile.personalDetails?.txtName}
                  {profile.educationOccupation?.qualification ? `, ${profile.educationOccupation.qualification}` : ''}
                </Link>
              </td>
              <td>
                <Link to={`/profile/${profile.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {profile.astrologyDetails?.caste || '--'}
                </Link>
              </td>
              <td>
                <Link to={`/profile/${profile.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {profile.astrologyDetails?.subcaste || '--'}
                </Link>
              </td>
              <td>
                <Link to={`/profile/${profile.id}`}>
                  <img
                    src={getProfileImage(profile)}
                    alt="No Image"
                    onError={e => (e.target.src = '/photos/default.jpg')}
                    style={{ maxWidth: 100, height: 'auto', objectFit: "cover" }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// Main component
const PublicProfileSearchGrid = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'Female',
    language: '',
    caste: '',
    subcaste: '',
    ageFrom: '',
    ageTo: '',
    maritalStatus: '',
    sortBy: 'desc' // or 'asc'
  });
  const [formInputs, setFormInputs] = useState(filters);

  // Utility to get age from dateOfBirth (make sure this exists in your code)
  const getAge = (dateString) => {
    if (!dateString) return null;
    const today = new Date();
    const dob = new Date(dateString);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age;
  };

  // Filter & sort profiles based on filters
  const filterProfiles = () => {
    let result = allProfiles.filter(user => {
      if (filters.gender && filters.gender !== '' && user.personalDetails.gender !== filters.gender) return false;
      if (filters.language && filters.language !== '' && user.personalDetails.motherTongue !== filters.language) return false;
      if (filters.caste && filters.caste !== '' && user.astrologyDetails.caste !== filters.caste) return false;
      if (filters.subcaste && filters.subcaste !== '' && user.astrologyDetails.subcaste !== filters.subcaste) return false;
      if (filters.maritalStatus && filters.maritalStatus !== '' && user.personalDetails.maritalStatus !== filters.maritalStatus) return false;

      const userAge = getAge(user.personalDetails.dateOfBirth);
      const ageFrom = filters.ageFrom ? Number(filters.ageFrom) : null;
      const ageTo = filters.ageTo ? Number(filters.ageTo) : null;
      if (ageFrom && (userAge === null || userAge < ageFrom)) return false;
      if (ageTo && (userAge === null || userAge > ageTo)) return false;

      return true;
    });

    if (filters.sortBy === 'asc') {
      result = result.slice().sort((a, b) => a.id.localeCompare(b.id));
    } else {
      result = result.slice().sort((a, b) => b.id.localeCompare(a.id));
    }

    setFilteredProfiles(result);
  };

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setAllProfiles(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    filterProfiles();
  }, [filters, allProfiles]);

  // You can get params if needed
  const { id } = useParams();

  return (
    <div className="page-container">
      <SearchForm
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        setFilters={setFilters} // Pass setFilters here
        onSearch={filterProfiles}
      />
      <ProfileGrid profiles={filteredProfiles} />
    </div>
  );
};

export default PublicProfileSearchGrid;
