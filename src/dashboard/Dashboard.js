import React from 'react';
import './dashboard.css';
import Profile from './profiledash.js/Profile.js';
import Emergency from './emergency/Emergency.js';
export default function Dashboard(){
    return(
        <>
        <div id='headdash'>
            <span>Sahayak Account</span>
        </div>
        <div id='maincontent'>
            <div id='leftnavdash'>
                    <button className='divleftdash'>Account Info</button>
                    <button className='divleftdash'>Emergency Contact Information</button>
                    <button className='divleftdash'>Assistance Request History</button>
                    <button className='divleftdash'>User Preferences</button>
                    {/* <button className='divleftdash'></button> */}
                    <button className='divleftdash'>Support & Complaint</button>  
            </div>
            <div id='rightcontentdash'>
                <Emergency/>
            </div>
        </div>
        
        </>
    );
}