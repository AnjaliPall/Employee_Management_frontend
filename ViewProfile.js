import { Table } from "reactstrap";

const ViewProfile = ()=> {
    return(
        <>
        <Table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Employee Id</th>
      <th>Employee Name</th>
      <th>Email Address</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <th scope="row">1</th>
          <td>Mark</td>
          <td> Otto</td>
          <td>@mdo</td>
          <td>xyzabcde</td>
    </tr>
    <tr>
      <th scope="row"> 2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>pqrstuvw</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td> Larry</td>
      <td>the Bird</td>
      <td> @twitter</td>
      <td>jklmnopq</td>
    </tr>
  </tbody>
</Table>
        </>
    );
};
export default ViewProfile;