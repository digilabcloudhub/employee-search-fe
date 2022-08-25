import React from 'react'

const Dept = ({data}) => {
  return (
        <>
        <ul>  {data.map((emp, index) => {
            if (emp.department==='Finance') {
              return  <li key={emp.id}>{emp.firstName}---{emp.lastName}--{emp.email}---{emp.department}</li>;
            }
            else if (emp.department==='IT')
            return  <li key={emp.id}>{emp.firstName}---{emp.lastName}---{emp.department}--{emp.tel}</li>;
            else
            return "";
          })}
          </ul></>
    
  )
}

export default Dept;