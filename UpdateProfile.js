import { CardBody,Button, CardHeader, Container, FormGroup, Input, Label, Row,Col,Card,Form } from "reactstrap";

const UpdateProfile = ()=> {
    return(
        <>
         <Container>
               <Row className="mt-4">
                <Col sm={{ size: 6, offset: 3}}>
                    <Card color="dark" inverse >
                        <CardHeader>
                            <h3>Fill Details</h3>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                 {/*EmployeeId Field*/}
                                 <FormGroup>
                                    <Label for="empid">EmployeeId</Label>
                                    <Input type="text" placeholder="Enter EmployeeId" id="empid"/>
                                </FormGroup> 
                                 {/*Name Field*/}
                                 <FormGroup>
                                    <Label for="name">Employee Name</Label>
                                    <Input type="text" placeholder="Enter Name" id="name"/>
                                </FormGroup> 
                                {/*Email Field*/}
                                <FormGroup>
                                    <Label for="email">Email address</Label>
                                    <Input type="email" placeholder="Enter email" id="email"/>
                                </FormGroup> 
                                 {/*Password Field*/}
                                 <FormGroup>
                                    <Label for="password">Enter Password</Label>
                                    <Input type="password" placeholder="Enter password" id="password"/>
                                </FormGroup>  
                                <Container className="text-center">
                                    <Button color="light" outline>Update</Button>
                                    <Button color="secondary" type="reset" className="ms-2">Reset</Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
               </Row>

           </Container>
        </>
    );
};
export default UpdateProfile;