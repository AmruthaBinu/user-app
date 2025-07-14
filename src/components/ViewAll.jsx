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
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address-street</th>
                                    <th scope="col">Address-suite</th>
                                    <th scope="col">Address-city</th>
                                    <th scope="col">Address-zipcode</th>
                                    <th scope="col">lat</th>
                                    <th scope="col">long</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Company name</th>
                                    <th scope="col">Company catchPhrase</th>
                                    <th scope="col">Company bs</th>
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