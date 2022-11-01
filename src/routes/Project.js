import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Background from '../media/99.jpg'



const Project = () => {

    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        return navigate(`:${message}`, {state: { name: message }})
    }
    
    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center',backgroundImage: `url(${Background})`, backgroundSize:'cover', height:'100vh' }}> 
            <form style={{display:'flex', gap:'30px', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <label style={{ fontSize:'64px', fontFamily:'Quicksand', fontWeight:'400' }}>Enter Project Name</label>
                <input 
                    id="search" 
                    type="text" 
                    name="search" 
                    value={message} 
                    onChange={handleChange} 
                    placeholder='Search...' 
                    style={{ height:'25px', width:'350px', fontSize:'24px' }}
                />
                <button 
                    onClick={handleClick} 
                    style={{ width:'150px', height:'50px', fontSize:'24px', color:'#eaeaea', borderRadius:'10px', backgroundColor:'teal',border: 'none' }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Project;