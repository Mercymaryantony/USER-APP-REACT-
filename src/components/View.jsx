import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changedata]=useState([])
    const fetchData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (respone)=>{
                changedata(respone.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">USERNAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">PHONE</th>
                                    <th scope="col">WEBSITE</th>
                                    <th scope="col">COMPANY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, i) => {
                                        return <tr><th scope="row">{value.id}</th>
                                            <td>{value.name}</td>
                                            <td>{value.username}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.website}</td>
                                            <td>{value.company.name}</td>
                                            

                                        </tr>
                                    }
                                )

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View