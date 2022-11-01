import React from "react";
import { NavLink } from "react-router-dom";

const Pnf =()=>{
    return(
        <div>
            <h1 className='text-center text-danger m-5'> Page Not Found - 404 </h1>
            <NavLink to={'/'} className="d-flex justify-content-center align-content-center text-decoration-none"><button className="btn btn-success"> Back To Home</button></NavLink>
        </div>
    )
}

export default Pnf;