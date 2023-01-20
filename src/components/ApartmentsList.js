import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function ApartmentsList(props) {

    const [apartmentsArr, setApartmentsArr] = useState([]);

    useEffect(() => {
      getApartmentsFromApi();
    }, []);
  
  
    const getApartmentsFromApi = () => {
      axios.get(process.env.REACT_APP_API_URL + "/apartments")
        .then((response) => {
          console.log(response.data);
  
          setApartmentsArr(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }


    // const apartmentsToDisplay = apartmentsArr.filter ( (apartment) => {
    //     return apartment.name;
    //   });
    
    return (
        <>
            <h1>This is Apartments List</h1> 
            {apartmentsArr.map( (apartment) => {
        return(
            <div key={apartment._id}>
          <h3>{apartment.title}</h3>
          </div>
      )})}
        </>
    )
}

export default  ApartmentsList;