import React from 'react';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import './dashboard.css';
import Profile from './profiledash.js/Profile.js';
import Emergency from './emergency/Emergency.js';
import Support from './supportandcomplaint/Support.js';

export default function Dashboard() {
    return (
        <>
            <div id='headdash'>
                <span>Sahayak Account</span>
                <span id='homedash'><Link to="/"><button>Home</button></Link></span> 
            </div>
            <div id='maincontent'>
                <div id='leftnavdash'>
                    <Link to="/dashboard"><button className='divleftdash'>Account Info</button></Link>
                    <Link to="/dashboard/emergency"><button className='divleftdash'>Emergency Contact Information</button></Link>
                    <Link><button className='divleftdash'>Assistance Request History</button></Link>
                    <Link><button className='divleftdash'>User Preferences</button></Link>
                    <Link to="/dashboard/supportandcomplaint"><button className='divleftdash'>Support & Complaint</button></Link>
                </div>
                <div id='rightcontentdash'>
                    <Routes>
                        <Route path="/" element={<Profile />} /> //  here / this means /dashboard/ as we have mentioned in app.js
                        <Route path="/supportandcomplaint" element={<Support />} />//  here /supportandcomplaint this means /dashboard/supportandcomplaint if /* is not mentioned in app.js then we cant use this
                        <Route path="/emergency" element={<Emergency />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
