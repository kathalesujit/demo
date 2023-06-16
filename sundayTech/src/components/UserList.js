import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import './Userlist.css'
// import { BiDotsVerticalRounded } from 'react-bootstrap-icons';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiFilter } from 'react-icons/ci'
import { BiSearch } from 'react-icons/bi'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { UserDetails } from './UserDetails'

export const UserList = () => {

    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(
                "https://dummyjson.com/users"
            );
            const result = await response.json();
            setUser(result.users);
            console.log(result.users);

        };
        fetchAPI();
    }, []);
    const HandleClick = (data) => {
        setShow(true)
        setData(data)
    }
    return (
        <>
            <div className={`container-fluid body ${show ? "hideScroll" : ""}`} >
                <div className={`userlist `}>


                    <div className='head'>
                        <div>
                            <h4>Users</h4>
                            <p className='para'>Here are all the users for this project</p>
                        </div>
                        <div>
                            <button className='btn btn-outline-primary addButton' ><AiOutlinePlus /> Add User</button>
                        </div>
                    </div>
                    <div>
                        <div className='rowStyle'>
                            <div className="searchdiv">
                                <BiSearch />
                                <input type="text" placeholder=" Search" className='searchStyle' />
                            </div>

                            <div className='filterStyle' ><CiFilter size={20} /> Filter</div>
                        </div>

                    </div>
                    <Card className='tCard'>
                        <Row className='tHead text-uppercase'>
                            <Col md={3}>Name <RiArrowUpDownLine /></Col>
                            <Col md={3}>Username <RiArrowUpDownLine /></Col>
                            <Col md={3}>Role <RiArrowUpDownLine /></Col>
                            <Col md={3}>Last Login <RiArrowUpDownLine /></Col>
                        </Row>
                    </Card>

                    <div>

                        {
                            user.map((el, index) =>
                                index < 5 ?
                                    <div className='tBCard' key={index} style={{ borderLeft: `7px solid ${el.eyeColor}` }} onClick={() => HandleClick(el)}>
                                        <Row className='tHead datarow'>
                                            <Col md={3}>
                                                <img src={el.image} className='imgB'></img>
                                                <span>{el.firstName} {el.lastName}</span>
                                            </Col>
                                            <Col md={3}>
                                                {el.username}
                                            </Col>
                                            <Col md={3}>{el.company.title}</Col>
                                            <Col className='gen' md={3}>{el.birthDate}<BsThreeDotsVertical /></Col>
                                        </Row>
                                    </div> : ""
                            )
                        }
                        <span className='mt-2 d-flex justify-content-start text-secondary'>Showing 1-5 of 5</span>
                    </div>

                </div>
            </div>
            <UserDetails setShow={setShow} show={show} data={data} />
        </>
    )
}
