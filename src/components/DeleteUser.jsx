import React from 'react'
import UserDataNav from './UserDataNav'

const DeleteUser = () => {
  return (
    <div>
        <UserDataNav />
        <br />
        <div className="container">
            <div className="row">
                <h3 className="text-center text-primary">Delete User</h3>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteUser