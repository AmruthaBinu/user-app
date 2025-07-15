import React from 'react'
import UserDataNav from './UserDataNav'

const AddUser = () => {
  return (
    <div>
        <UserDataNav />
        <br />
        <div className="container">
            <div className="row">
                <h3 className="text-center text-primary">Add User</h3>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">

                            <label htmlFor="label" className="form-c">Name</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Address :</label>
                            
                            <div className="row g-3">
                                <div className="col col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <label htmlFor="" className="form-label">Street</label>
                                    <input type="text" className="form-control" />

                                </div>

                                <div className="col col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <label htmlFor="" className="form-label">Suite</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <label htmlFor="" className="form-label">City</label>
                                    <input type="text" className="form-control" />

                                </div>

                                <div className="col col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <label htmlFor="" className="form-label">Zipcode</label>
                                    <input type="text" className="form-control" />

                                </div>

                                <div className="col col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <label htmlFor="" className="form-label">Geo</label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Website</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Company :</label>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Catchphrase</label>
                                    <input type="text" className="form-control" />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Bs</label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser