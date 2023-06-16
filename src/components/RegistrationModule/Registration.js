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
                <Col className='p-0'>
                    <img src='/lab.jpg' className='bannerR'></img>
                </Col>
                <Col className='divCol'>
                    <div>
                        <div className='logoDiv'>
                            <img src="/ShipcomLogo1.jpg" className='logo' alt="logo" />
                        </div>
                        <h2 className='welcome'><b>Welcome</b></h2>
                        <p className='textPara'>Register to labs monitoring System</p>
                        <div className='formDiv'>
                            <Form className='register'>
                                <Form.Group controlId="formGroupUsername">
                                    <Form.Label for="labelData" className="form-label" >Username</Form.Label>
                                    <Form.Control type="text" id="labelData" name="username" onChange={(e) => handleChange(e)} />
                                    {error.username ? <span className="errorMsg text-danger">* Enter username correctly</span> : ""}
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label for="labelData" className="form-label" >Email address</Form.Label>
                                    <Form.Control type="email" id="labelData" name="email" onChange={(e) => handleChange(e)} />
                                    {error.email ? <span className="errorMsg text-danger">*email is not valid</span> : ""}
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label for="labelData" className="form-label">Password</Form.Label>
                                    <Form.Control type="password" name="password" id="labelData" onChange={(e) => handleChange(e)} />
                                    {error.password ? <span className="errorMsg text-danger">*password is not valid</span> : ""}
                                </Form.Group>
                                <Button size="sm" className='registerButton' onClick={HandleSubmit}>
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
