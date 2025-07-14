import React from 'react'
import { Link } from 'react-router-dom'

const UserDataNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid w-100">
                    <Link className="navbar-brand" to="#">User_App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Add_User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search_User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/delete">Delete_User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">View_All</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserDataNav
