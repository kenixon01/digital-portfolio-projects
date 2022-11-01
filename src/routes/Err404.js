import React from "react";
import Background from "../media/99.jpg"

const Err404 = () => {
    return(
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundImage:`url(${Background})`, backdropFilter:'blur(5px)', backgroundSize:'cover', height:'100vh' }}>
            <p style={{ color:'#f55', fontFamily:'Quicksand', fontWeight:'600', fontSize:'96px'}}>404 Error</p>
            <p style={{ fontStyle:'italic', fontSize:'24px'}}>Invalid page. Visit one of the links in the navigation bar above.</p>
        </div>
    )
}
export default Err404