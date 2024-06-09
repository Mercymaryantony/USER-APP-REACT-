import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "email":"",
            "phone":"",
            "pass":"",
            "cofnpswd":""
        }
    )
    const inputhandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>NAME</b></label>
                                <input type="text" className="form-control" name='name' value={data.value} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>PHONE NO</b></label>
                                <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" name="pass" value={data.pass} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" name="cofnpswd" value={data.cofnpswd} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>REGISTER</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add