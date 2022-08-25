import React from 'react'

const Table = ({data}) => {
  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Department</th>
            <th>Tel</th>
          </tr>
        </thead>
        <tbody>
         {  data.map((emp) => 
               <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.tel}</td>
                </tr>)
             }
        </tbody>
      </table>
    </div>
  )
}

export default Table