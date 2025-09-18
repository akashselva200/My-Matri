import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SornamMatrimony from './component/Home.jsx';
import New_Registration from './component/New_Registration.jsx';
import LoginPage from './component/LoginPage';
import PublicProfileSearchGrid from './component/PublicProfileSearchGrid.jsx';
import ProfileHelper from './component/ProfileHelper.jsx';
import ProfileFullView from './component/ProfileFullView.jsx';
import UserFullView from './component/userFullView.jsx';
import MyProfile from "./component/MyProfile.jsx";

import ContactUs from "./component/ContactUs.jsx";



function App() {
  return (
  
    <Router>
      <div className="App">
        {/* You could add a persistent Header or Footer here */}
        <Routes>
          <Route path="/" element={<SornamMatrimony />} />
          <Route path="/registration" element={<New_Registration />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<PublicProfileSearchGrid />} />
          <Route path="/ProfileHelper" element={<ProfileHelper />} />
          <Route path="/profile/:id" element={<ProfileFullView />} />

          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          <Route path="/user/:id" element={<UserFullView />} />

       
          {/* Add other routes for login, registration, etc. */}
        </Routes>
      </div> 
    </Router> 

  );
}

export default App;

// npm start

// json-server --watch db.json --port 3001

//Terminal 2 (File Upload Server):   

// node upload-server.js


// npx https://github.com/google-gemini/gemini-cli
