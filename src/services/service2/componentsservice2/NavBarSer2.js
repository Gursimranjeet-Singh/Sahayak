import React,{Component} from "react";

export default class NavBarSer2 extends Component{
    render(){
        return(
            <>
            <div style={{backgroundColor:"#f5f5f5",
            height:"5rem",
            borderTopLeftRadius: '1rem',
            borderTopRightRadius:'1rem',
            display:'flex',
            alignItems:'center',
            gap:'1rem',
            color:'black',
            

            }}>
             <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt="error"
              height={40}
              width={40}
            />
            <h1 style={{fontWeight:'900'}}>Sahayak </h1>
            <h3>Find wheelchair accessible tranportation frindly  places.</h3>


            </div>
            </>
        );
    }

}