import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Dashboard/Navbar';
import Maincont from './Dashboard/Maincont';

const Dashboard = ({ token }) => {
    const [err, setErr] = useState(0);

    useEffect(() => {
        fetch('http://localhost/user',{credentials: "include"})
            .then(response => setErr(response.status));
    
    }, []);
    if(err==400 || err==401) return <Redirect to="/login?message='You need to login first!'" />
    return (
        <div className="Dashboard">
            <Navbar/>
            <Maincont/>
        </div>
    );
}

export default Dashboard;