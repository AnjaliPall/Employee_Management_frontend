import { Table } from "reactstrap";

const LeaveStatus = ()=> {
    return(
        <>
          <Table LeaveDeatails >
             <thead>
                     <tr>
                            <th> leave_id</th>
                            <th>manager_id</th>
                            <th>applied_date</th>
                            <th> date_from</th>
                            <th> date_to</th>
                            <th> emp_id</th>
                            <th>leave_status</th>
                            <th> reason</th>
                      </tr>
             </thead>
             <tbody>
                       <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td> Table cell</td>
                        </tr>
             </tbody>
          </Table>
      </>
    );
};
export default LeaveStatus;