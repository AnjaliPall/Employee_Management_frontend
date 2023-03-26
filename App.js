import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import ApplyLeave from './pages/ApplyLeave';
import Employee from './pages/Employee';
import ViewProfile from './pages/ViewProfile';
import UpdateProfile from './pages/UpdateProfile';
import ViewTask from './pages/ViewTask';
import UpdateProgress from './pages/UpdateProgress';
import LeaveStatus from './pages/LeaveStatus';


function App() {
  return (
     <BrowserRouter>
        <Routes>
           <Route path = "/" element = {<Home/>}></Route>
           <Route path = "/login" element = {<Login/>}></Route>
           <Route path = "/signup" element = {<Signup/>}></Route>
           <Route path = "/about" element = {<About/>}></Route>
           <Route path = "/employee" element = {<Employee/>}></Route>
           <Route path = "/employee/viewprofile" element = {<ViewProfile/>}></Route>
           <Route path = "/employee/updateProfile" element = {<UpdateProfile/>}></Route>
           <Route path = "/employee/viewtask" element = {<ViewTask/>}></Route>
           <Route path = "/employee/updateprogress" element = {<UpdateProgress/>}></Route>
           <Route path = "/employee/applyleave" element = {<ApplyLeave/>}></Route>
           <Route path = "/employee/leavestatus" element = {<LeaveStatus/>}></Route>

        </Routes>
     </BrowserRouter>
  );
};


export default App;
