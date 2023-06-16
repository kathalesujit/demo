import React, { useState } from 'react'
import './Register.css'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForpassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export const Registration = () => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "", email: "", password: ""
    })
    const [error, setError] = useState({
        username: false, email: false, password: false
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setFormData(regForEmail.test(value) ? { ...formData, [name]: value } : { ...formData })
                setError(regForEmail.test(value) ? { ...error, [name]: false } : { ...error, [name]: true })
                break;

            case 'password':
                setFormData(regForpassword.test(value) ? { ...formData, [name]: value } : { ...formData })
                setError(regForpassword.test(value) ? { ...error, [name]: false } : { ...error, [name]: true })
                break;

            case 'username':
                setFormData(value.length > 5 ? { ...formData, [name]: value } : { ...formData })
                setError(value.length > 5 ? { ...error, [name]: false } : { ...error, [name]: true })
                break;
        }

    }
    const HandleSubmit = () => {
        if (formData.email != '' && formData.username != '' && formData.password != '') {
            const localData = JSON.parse(localStorage.getItem("cred"))
            if (localData) {

                localStorage.setItem('cred', JSON.stringify([...localData, formData]))
            }
            else {
                localStorage.setItem('cred', JSON.stringify([formData]))

            }
            alert("Registration successful !!!")
            Navigate('/login')
        }
        else {
            alert("Please fill valid details !!")
        }
    }

    return (
        <div className='container-fluid'>
            <Row>
                <Col md={6}><img src="/lab.jpg" width="710" height="620" alt="logo" /></Col>
                <Col md={6} className=" register container">
                    <img src="/ShipcomLogo1.jpg" width="250" height="100" alt="logo" />
                    <h2 className='welcome'><b>Welcome</b></h2>
                    <p className=''>Register to labs monitoring System</p>

                    <form action="">
                        <div className="form-group">
                            <label for="username" className='labelU'>Username</label>
                            <input type="text" className="form-control inputField" name="username" id="text" onChange={(e) => handleChange(e)} />
                            {error.username ? <span className="errorMsg text-danger">* username must be greater than 5 letters</span> : ""}
                        </div>
                        <div className="form-group">
                            <label for="email" className='labelE'>Email address</label>
                            <input type="email" className="form-control  inputField" name="email" id="email" onChange={(e) => handleChange(e)} />
                            {error.email ? <span className="errorMsg text-danger">* email is not valid</span> : ""}
                        </div>
                        <div className="form-group">
                            <label for="pwd" className='labelP'>Password</label>
                            <input type="password" className="form-control inputField" name="password" id="password" onChange={(e) => handleChange(e)} />
                            {error.password ? <span className="errorMsg text-danger">* password is not valid</span> : ""}
                        </div>
                        <button className='buttonStyle btn-sm ' type="button" onClick={HandleSubmit}>
                            Create Account
                        </button>
                    </form>

                </Col>
            </Row>

        </div>
    )
}
