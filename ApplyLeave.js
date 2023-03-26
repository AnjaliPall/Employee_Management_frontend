import { CardBody,Button, CardHeader, Container, FormGroup, Input, Label, Row,Col,Card,Form } from "reactstrap";
// import Base from "../components/Base";

const ApplyLeave = () => {
    return (          
           <Container>
               <Row className="mt-4">
                <Col sm={{ size: 6, offset: 3}}>
                    <Card color="dark" inverse>
                        <CardHeader>
                            <h3>Apply for Leave</h3>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                {/*Email Field*/}
                                <FormGroup>
                                    <Label for="text">Employee Id</Label>
                                    <Input type="text" placeholder="Enter here" id="text"/>
                                </FormGroup> 
                                 {/*Password Field*/}
                                 <FormGroup>
                                    <Label for="date">Date From</Label>
                                    <Input type="date" placeholder="yyyy-mm-dd" id="date"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="date">Date To</Label>
                                    <Input type="date" placeholder="yyyy-mm-dd" id="date"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="date">Applied Date</Label>
                                    <Input type="date" placeholder="yyyy-mm-dd" id="date"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="reason">Reason</Label>
                                    <Input type="textarea" placeholder="Enter here" id="reason"/>
                                </FormGroup>  
                                <Container className="text-center">
                                    <Button color="light" outline>Apply Leave</Button>
                                    <Button color="secondary" type="reset" className="ms-2">Reset</Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
               </Row>

           </Container>
    );

};

export default ApplyLeave;