import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import UserDataNav from './UserDataNav'
import axios from 'axios'

const ViewAll = () => {
    const [userData, changeUserData] = useState(
        [ ]
    )

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users ").then(
            (response)=>{
                changeUserData(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <UserDataNav />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="row g-3">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="table">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th colSpan="5">Address</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th colSpan="3">Company</th>
                                    </tr>
                                    <tr>
                                        <th colSpan="4"></th>
                                        <th>Street</th>
                                        <th>Suite</th>
                                        <th>City</th>
                                        <th>Zipcode</th>
                                        <th>Geo (Lat, Lng)</th>
                                        <th colSpan="5"></th>
                                    </tr>
                                    <tr>
                                        <th colSpan="11"></th>
                                        <th>Name</th>
                                        <th>Catch Phrase</th>
                                        <th>BS</th>
                                    </tr>
                                </thead>
                                {userData.map(
                                    (value, index) => {
                                        return (
                                            <tbody>
                                                <tr key={index}>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.name}</td>
                                                    <td>{value.username}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.address.street}</td>
                                                    <td>{value.address.suite}</td>
                                                    <td>{value.address.city}</td>
                                                    <td>{value.address.zipcode}</td>
                                                    <td>{value.address.geo.lat}, {value.address.geo.lng}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.website}</td>
                                                    <td>{value.company.name}</td>
                                                    <td>{value.company.catchPhrase}</td>
                                                    <td>{value.company.bs}</td>
                                                </tr>

                                            </tbody>
                                        )
                                    }
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll