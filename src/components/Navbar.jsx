import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Navbar = () => {

    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" > API Django</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-2">
                            <Link to="/articles" className='btn btn-primary'>Articles</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/projects" className='btn btn-primary'>Projects</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/users" className='btn btn-primary'>Users</Link>  
                        </li>
                    </ul>
                    {
                        ( user.username === "anonymous" )
                        ?
                        <Link to="/login" className='btn btn-primary'>Login</Link>
                        :
                        <Link to="/login" className='btn btn-primary'>Logout</Link> 
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;