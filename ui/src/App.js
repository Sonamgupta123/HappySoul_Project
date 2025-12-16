
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Component/NavComponent/Nav';
import Home from './Component/HomeComponent/Home';
import Footer from './Component/FooterComponent/Footer';
import { Route, Routes } from 'react-router-dom';
import Register from './Component/RegistrationComponent/Registration';
import ContactForm from './Component/ContactComponent/ContactForm';
import Login from './Component/LoginComponent/Login';
import Activities from './Component/ActivityComponent/Activities';
import UserDash from './Component/UserDashboardComponent/UserDashboard';
import AdminDash from './Component/AdminDashboardComponent/AdminDash';
import Logout from './Component/LogoutComponent/Logout';
import EditUser from './Component/EditProfileComponent/EditUserProfile';
import PasswordUser from './Component/ChangepswrdComponent/UserChangep';
import UserActivity from './Component/UserActivityComponent/UserActivity';
import MusicActivity from './Component/MusicActivityComponent/MusicActivity';
import DanceActivity from './Component/DanceComponent/DanceActivity';
import YogaActivity from './Component/YogaActivityComponent/YogaActivity';
import JokeCorner from './Component/JokeCornerComponent/JokeCorner';
import ExpertConsultant from './Component/ExpertConsultComponent/ExpertCosultant';
import AdminProfile from './Component/AdminChangeComponent/AdminPassword';
import ContactQueries from './Component/QueriesComponent/Queries';
import AdminMoodTracker from './Component/MoodTackerComponent/MoodAdmin';
import Auth from './Component/AuthComponent/Auth';
import EditAdmin from './Component/AdminEditPComponent/AdminEditP';
function App() {
 
  return (
    <>
    <Auth/>
    <Navbar/>
    
    <Routes>
       <Route path="/" element={<Home />}></Route> 
      <Route path="/register" element={<Register/>}></Route>
      <Route path ="/contact" element={<ContactForm/>}></Route>
      <Route path ="/login" element={<Login/>}></Route>
      <Route path ="/activities" element={<Activities/>}></Route>
      <Route path ="/user" element={<UserDash/>}></Route>
      <Route path ="/admin" element={<AdminDash/>}></Route>
      <Route path ="/logout" element={<Logout/>}></Route>
      <Route path ="/edit-profile" element={<EditUser/>}></Route>
      <Route path ="/change-password" element={<PasswordUser/>}></Route>
      <Route path ="/user-activities" element={<UserActivity/>}></Route>
      <Route path ="/music-activity" element={<MusicActivity/>}></Route>
      <Route path ="/dance-activity" element={<DanceActivity/>}></Route>
      <Route path ="/yoga-activity" element={<YogaActivity/>}></Route>
      <Route path ="/jokes" element={<JokeCorner/>}></Route> 
      <Route path ="/consult" element={<ExpertConsultant/>}></Route>
      <Route path ="/admin-profile" element={<AdminProfile/>}></Route>
      <Route path ="/admin-profile-edit" element={<EditAdmin/>}></Route>
      <Route path ="/queries" element={<ContactQueries/>}></Route>
      <Route path ="/mood-tracker" element={<AdminMoodTracker/>}></Route>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
