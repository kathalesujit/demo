import React, { useState } from 'react'
import './Login.css'
import { Form, Button, Row, Col, Collapse } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForpassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export const Login = () => {

    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [error, setError] = useState({
        email: false, password: false
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
        }

    }
    const HandleSubmit = () => {
        const data = JSON.parse(localStorage.getItem('cred'))
        console.log(formData)
        let check = false
        data.map((user) => {
            if (formData.email == user.email && formData.password == user.password) {
                check = true
            }
        })
        if (check) {
            Navigate('/userlist')
        }

    }
    return (
        <div className='container-fluid'>
            <Row className='row'>
                <Col className='p-0'>
                    <img src='/lab.jpg' className='bannerL'></img>
                </Col>
                <Col className='divCol'>
                    <div>
                        <div className='logoDiv'>
                            <img src="/ShipcomLogo1.jpg" className='logo' alt="logo" />
                        </div>

                        <h2 className='welcome'><b>Welcome</b></h2>
                        <p className='textPara'>Login to labs monitoring System</p>
                        <div className='formDiv'>
                            <Form className='loginN '>
                                <Form.Group controlId="formGroupEmail ">
                                    <Form.Label class="form-label">Email address</Form.Label>
                                    <Form.Control type="email" id="labelData" name="email" onChange={(e) => handleChange(e)} />
                                    {error.email ? <span className="errorMsg text-danger">*email is not valid</span> : ""}
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label class="form-label">Password</Form.Label>
                                    <Form.Control type="password" name="password" id="labelData" onChange={(e) => handleChange(e)} />
                                    {error.password ? <span className="errorMsg text-danger">*password is not valid</span> : ""}
                                </Form.Group>
                                <Button size="sm" className='loginButton' onClick={HandleSubmit}>
                                    Login
                                </Button>
                                <Link to="/"> <p className="forgetL">Forget Passwod</p></Link>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}






// import React, { useState } from 'react'
// import './Login.css'
// import { Form, Button, Row, Col } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
// const regForpassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

// export const Login = () => {
//     const Navigate = useNavigate()
//     const [formData, setFormData] = useState({
//         email: "", password: ""
//     })
//     const [error, setError] = useState({
//         email: false, password: false
//     })
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         switch (name) {
//             case 'email':
//                 setFormData(regForEmail.test(value) ? { ...formData, [name]: value } : { ...formData })
//                 setError(regForEmail.test(value) ? { ...error, [name]: false } : { ...error, [name]: true })
//                 break;

//             case 'password':
//                 setFormData(regForpassword.test(value) ? { ...formData, [name]: value } : { ...formData })
//                 setError(regForpassword.test(value) ? { ...error, [name]: false } : { ...error, [name]: true })
//                 break;
//         }

//     }
//     const HandleSubmit = () => {
//         const data = JSON.parse(localStorage.getItem('cred'))
//         console.log(formData)
//         let check = false
//         data.map((user) => {
//             if (formData.email == user.email && formData.password == user.password) {
//                 check = true
//             }
//         })
//         if (check) {
//             Navigate('/userlist')
//         }

//     }

//     return (
//         <div className='container-fluid'>
//             <Row>
//                 <Col md={6}>
//                     <img src='/lab.jpg' className='banner' alt="logo" />
//                 </Col>
//                 <Col md={6} className=" login container">
//                     <img src="/ShipcomLogo1.jpg" width="250" height="100" alt="logo" />
//                     <h2 className='welcome'><b>Welcome</b></h2>
//                     <p className=''>Login to labs monitoring System</p>

//                     <form >
//                         <div class="form-group">
//                             <label className='labelE'>Email address:</label>
//                             <input type="email" class="form-control  inputField" name="email" id="email" onChange={(e) => handleChange(e)} />
//                             {error.email ? <span className="errorMsg text-danger">*email is not valid</span> : ""}
//                         </div>
//                         <div class="form-group">
//                             <label className='labelP'>Password:</label>
//                             <input type="password" class="form-control inputField" name="password" id="password" onChange={(e) => handleChange(e)} />
//                             {error.password ? <span className="errorMsg text-danger">*password is not valid</span> : ""}
//                         </div>
//                         <button className='buttonStyle btn-sm ' type="button" onClick={HandleSubmit}>
//                             Login
//                         </button>
//                     </form>
//                     <Link to="/">
//                         <p className='forget mt-1'>Forgot Password?</p>
//                     </Link>
//                 </Col>
//             </Row>

//         </div>
//     )
// }
