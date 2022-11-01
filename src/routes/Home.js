import React from "react";
import Background from '../media/99.jpg'
import Typewriter from "typewriter-effect";

const Home = () => {
    return(
        <div style={{display:'flex', justifyContent:'center', gap:'50px', alignItems:'center', backgroundImage:`url(${Background})`, backgroundSize:'cover', height:'100vh'}}>
            <p style={{ fontSize:'70px', fontFamily:'Quicksand',}}>Welcome</p>
            <div style={{width:'10px', height:'800px', backgroundImage:'radial-gradient(teal, transparent, transparent, transparent)'}}/>
            <div style={{ display:'flex', flexDirection:'column' }}>
                <span style={{ fontSize:'48px', marginBottom:'20px', fontFamily:'Quicksand'}}>Digital Portfolio Project Search</span>
                <div style={{ fontSize:'24px', fontFamily:'Quicksand'}}>
                    <Typewriter 
                        options={{
                            strings: [
                                "This website contains each of my project deployments.",
                                "Visit the links above to view my projects."
                            ],
                            autoStart: true,
                            pauseFor: 5000,
                            loop: true,
                            
                        }}
                        />
                </div>
            </div>
        </div>
    );
} 
export default Home;