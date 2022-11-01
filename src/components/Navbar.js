import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <div style={{ overflow:'hidden', margin:0, display: "flex", justifyContent:'space-between', alignItems:'center', width:'100%', height:'100px', position:'absolute',backgroundColor:'#eaeaea' }}>
            <div style={{ fontFamily:'Quicksand', fontSize:'36px', color:'teal', fontWeight:'400', padding:'0 50px', letterSpacing:'5px'}}>Khamilah Enjoli Nixon</div>
            <div style={{ fontSize:'24px', fontFamily:'Quicksand',display:'flex', gap:'50px', padding:'0 50px' }}>
                {/* NOTE: For demonstration purposes only, use <a></a> */}
                {/* After demonstration, change to <NavLink></NavLink> because GitHub Pages does not allow for static sites */}
                <NavLink exact to="/digital-portfolio-projects" style={{textDecoration:'none', color:'black'}}>Home</NavLink>
                <NavLink exact to="/digital-portfolio-projects/project" style={{textDecoration:'none', color:'black'}}>Projects</NavLink>
                <NavLink exact to="https://kenixon01.github.io/digital-portfolio/" style={{textDecoration:'none', color:'black'}}>Portfolio</NavLink>
            </div>
        </div>
    );
}

export default Navbar;