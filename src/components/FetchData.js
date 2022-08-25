
import { useEffect, useState } from 'react'
const FetchData = () => {
    const isActive='Y';
    const [list,setList]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchData = () => {
        setIsLoading(true);
        fetch(`http://localhost:5000/employees/${isActive}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                  }
                  else {
                    // If the API responds meaningful error message,
                    // then you can get it by calling response.statusText
                    throw new Error("Sorry something went wrong")
                  }
              
            })
            .then(data => {
              setList(data);
              setIsLoading(false);
            })
            .catch(error => {
               
                setError(error.message)
              })
        }
        
        useEffect(() => {
          fetchData()
        }, [isActive]);
        
  return (
            <>
            <h3>Active Users</h3>
           {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
          { list.length > 0 && (
        <ul>
            {list.map((emp)=>
            <li key={emp.id}>
                {emp.firstName}----{emp.lastName}----{emp.tel}----{emp.email}</li>)}
            </ul>
          )}
            </>
  )
}

export default FetchData;