import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DropDown = () => {
    const [countery,setCountry] = useState([])
    const [state,setState] = useState([])
    useEffect(()=>{
        //component mount
        axios.get('http://localhost:8080/api/country/')
        .then((response)=>setCountry(response.data))
        .catch((error)=>console.log(error))
    },[])

    function countrySelected(e){
        const country_id = e.target.value;
        axios.get(`http://localhost:8080/api/state/${country_id}/`)
        .then((response)=>{
            setState(response.data);
        })
        .catch((error)=>console.log(error))
    }
    function stateSelector(e){
        console.log(e.target.value)
    }
    return (
        <center style={{marginTop:"40px"}}>
           <h1>Drop Down</h1>
           <hr></hr>
           <h3>Select Country</h3>
           {
            countery.length > 0 ?<select name='country' onChange={countrySelected}>
                <option>----------</option>
                {
                    countery.map((value,key)=>{
                        return <option key={key} value={value.id}>{value.country}</option>
                    })
                }
            </select>:<select></select>
           }
           <h4>Select State</h4>
           {
            state.length > 0 ?<select onChange={stateSelector}>
                <option>----------</option>
                {
                   state.map((value,key)=>{
                    return <option key={key} value={value.id}>{value.state}</option>
                }) 
                }
            </select>:<select></select>
           }
        </center>
    );
}

export default DropDown;
