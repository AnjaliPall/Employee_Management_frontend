import { useEffect } from "react";
import { useState } from "react";
import { Card, CardBody, CardHeader, Container ,FormGroup,Label,Input, Button, Row, Col} from "reactstrap";
import Base from "../components/Base";

const Signup = () => {

 const [data,setData]=useState({
    name:'',
    email:'',
    department:'',
    password:'',
 })
 const [error,setError]= useState({
    errors:{},
    isError:false
 })

 useEffect(()=>{
    console.log(data);
 },[data])

 //handle change
 const handleChange=(event,property)=>{ 
   //dynamic setting the values
    setData({...data,[property]:event.target.value})
 }

 //reseting the form
 const resetData =()=>{
    setData({
        name:'',
        email:'',
        department:'',
        password:'',
    })
 }

 //submitting the form
 const submitForm =(event)=>{
     event.preventDefault()

     console.log(data);
     //data validate

     //call server api for sending data
 }

    return (
        <Base>
        <Container>
           <Row  className="mt-4">

              <Col sm={{ size: 6, offset: 3}} >
              <Card color="dark" inverse>
                <CardHeader>
                    <h3>SIGNUP</h3>
                    <h2>Fill Information to Register !!</h2>
                </CardHeader>
                <CardBody>
                     {/* Creating form*/}
                     <form onSubmit={submitForm}>
                        {/*Name field*/}
                        <FormGroup>
                            <Label for="name">Enter Name</Label>
                            <Input 
                              type="text" 
                              placeholder="Enter here" 
                              id="name" 
                              onChange={(e)=>handleChange(e,'name')} 
                              value={data.name}/>
                        </FormGroup>
                          {/*email field*/}
                          <FormGroup>
                            <Label for="email">Enter Email</Label>
                            <Input 
                               type="text"
                               placeholder="Enter here" 
                               id="email" 
                               onChange={(e)=>handleChange(e,'email')} 
                               value={data.email}/>
                        </FormGroup>
                        {/*Department field*/}
                        <FormGroup>
                            <Label for="department">Enter Department</Label>
                            <Input 
                               type="text" 
                               placeholder="Enter here" 
                               id="department" 
                               onChange={(e)=>handleChange(e,'department')} 
                               value={data.department}/>
                        </FormGroup>
                        {/*Password field*/}
                        <FormGroup>
                            <Label for="password">Enter Password</Label>
                            <Input 
                               type="text" 
                               placeholder="Enter here"  
                               id="password" 
                               onChange={(e)=>handleChange(e,'password')} 
                               value={data.password}/>
                        </FormGroup>

                         <Container className="text-center">
                            <Button color="light" outline>Register</Button>
                            <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
                         </Container>
                     </form>
                </CardBody>
              </Card>
              </Col>
           </Row>
        </Container>
        </Base>
    );

};

export default Signup;