
import {  useNavigate } from "react-router-dom";
import { CardBody,Card,CardTitle,CardSubtitle,Button } from "reactstrap";
import Base from "../components/Base";
// import ViewProfile from './pages/ViewProfile';
function Employee (){

let navigate = useNavigate();
const routeViewProfile =()=>{
    let path='/employee/viewprofile';
    navigate(path);
};

let change= useNavigate();
const routeUpdateProfile =()=>{
    let path='/employee/updateProfile';
    change(path);
};

let navigate1= useNavigate();
const routeAssignedTask =()=>{
    let path='/employee/viewtask';
    navigate1(path);
};

const routeUpdateProgress =()=>{
    let path='/employee/updateprogress';
    navigate(path);
};

const routeApplyLeave =()=>{
    let path='/employee/applyleave';
    navigate(path);
};

const routeLeaveStatus =()=>{
    let path='/employee/leavestatus';
    navigate(path);
};

    return(
     <Base>
       <Card style={{ width: '20rem'}}>
           <CardBody>
                <CardTitle tag="h5"> YourProfile</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6"> View and Update your Profile</CardSubtitle>
           </CardBody>
           <CardBody>
               <Button onClick={routeViewProfile} color="dark" outline>View Profile</Button>
               <Button onClick={routeUpdateProfile} color="secondary" className="ms-2">Update</Button>
            </CardBody>
      </Card>
      <Card style={{ width: '20rem'}}>
           <CardBody>
                 <CardTitle tag="h5"> Task Management</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6"> Check assigned tasks and update your progress
                 </CardSubtitle>
           </CardBody>
           <CardBody>
               <Button onClick={routeAssignedTask} color="dark" outline>Assigned Tasks</Button>
               <Button onClick={routeUpdateProgress} color="secondary" className="ms-2">Update Progress</Button>
           </CardBody>
      </Card>
      <Card style={{ width: '20rem'}}>
           <CardBody>
                <CardTitle tag="h5"> Leave Management</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Apply for Leave and check your leave status
                 </CardSubtitle>
           </CardBody>
           <CardBody>
               <Button onClick={routeApplyLeave} color="dark" outline>Apply Leave</Button>
               <Button onClick={routeLeaveStatus} color="secondary" className="ms-2">Leave Status</Button>
            </CardBody>
      </Card>
       
     </Base> 
    );
};

export default Employee;