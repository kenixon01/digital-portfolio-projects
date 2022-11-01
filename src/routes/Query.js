import React from "react";
import { gql, useQuery } from '@apollo/client';
import { Navigate, useLocation } from 'react-router-dom';

const GET_PROJECT = gql`
    query getProject($name: String!) {
        getProject(name: $name) {
            id
            name
            url
            description
        }
    }
`;


const Query = () => {
    // const [modal, setModal] = useState(false)
    const {state} = useLocation();
    const {name} = state;

    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { name }
    });

    if (loading) return 'Loading...';
    if (error || data.getProject === null ) {
        return(
            <Navigate to={{ pathname: "*"}}/>
        )
    };

    return (
        <div style={{ backgroundColor:'#fefefe', padding:'100px 0', display:'flex', gap:'60px', justifyContent:'center', flexDirection:'column', alignItems:'center'}} > 
            <span style={{ position:'sticky', top:0, padding:'25px 0', backgroundColor:'teal', width:'100%', fontSize:'48px', fontFamily:'Quicksand', fontWeight:'400', textAlign:'center', color:'white'}}>{data.getProject.name}</span>
            <div style={{ display:'inline-block', margin:'0 35%', padding:'50px', textAlign:'center',  fontSize:'20px', fontFamily:'Quicksand', fontWeight:'400' }}>{data.getProject.description}</div>
            <div>
                <span style={{fontFamily:'Quicksand', fontStyle:'italic'}}>If you cannot view the frame below, </span>
                <a href={data.getProject.url} style={{textDecoration:'none', fontStyle:'italic', fontWeight:'600'}}>Click Here</a>
            </div>
            
           
            <iframe src={data.getProject.url} title={data.getProject.name} height={800} width={1500} style={{ border:'none' }}/>
        </div>
    )
}

export default Query;