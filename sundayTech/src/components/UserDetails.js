import React, { useState } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap';
import './userDetails.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { VscGraph } from 'react-icons/vsc'
export const UserDetails = ({ setShow, show, data }) => {

    console.log(show, " ", data)
    const handleClose = () => { setShow(false) };
    const handleShow = () => setShow(true);

    return (

        <div className="modal-background bodyUserDetails" onClick={handleClose} style={show ? { display: `` } : { display: `none` }}>
            <div className="side-panel" onClick={(e) => { e.preventDefault() }}>
                <div className='mt-3'>
                    <div className='d-flex justify-content-between p-4'>
                        <h4>User Details</h4>
                        <BsThreeDotsVertical />
                    </div>

                    <div className='mb-2'>
                        <Row>
                            <Col><img className='imga' src={data.image}></img>
                            </Col>
                            <Col >
                                <h6 className='d-flex justify-content-start'>
                                    {data.firstName} {data.lastName}
                                </h6>
                                <p className='d-flex justify-content-start text-secondary'>
                                    Username : {data.username}
                                </p>
                                <span className='d-flex justify-content-start active'>
                                    <p className='text-center activeB'> Active</p>

                                </span>
                            </Col>
                        </Row>
                    </div>

                    <hr className='mt-2' />
                </div>
                <div className=' Info'>
                    <Row>
                        <Col md={2}> <CgProfile size={20} className='d-flex justify-content-start' />
                        </Col>
                        <Col md={10}> <h6 className='d-flex justify-content-start'>Basic Account Details</h6>
                        </Col>
                    </Row>
                    <div className='mt-3'>
                        <h6 className='d-flex justify-content-start'>
                            {data.firstName} {data.lastName}
                        </h6>
                        <p className='d-flex justify-content-start text-secondary'>
                            Full Name
                        </p>
                    </div>
                    <div className='mt-4'>
                        <h6 className='d-flex justify-content-start'>
                            {data?.company?.title}
                        </h6>
                        <p className='d-flex justify-content-start text-secondary'>
                            User Role
                        </p>
                    </div>

                </div>
                <hr />
                <div className=' Info'>
                    <Row>
                        <Col md={2}> <VscGraph size={20} className='d-flex justify-content-start' />
                        </Col>
                        <Col md={10}> <h6 className='d-flex justify-content-start'>UserData</h6>
                        </Col>
                    </Row>
                    <div className='mt-4'>
                        <h6 className='d-flex justify-content-start mt-2'>
                            {data.birthDate}
                        </h6>
                        <p className='d-flex justify-content-start text-secondary'>
                            Last Login
                        </p>
                    </div>



                </div>
            </div>

        </div>
    );
};



