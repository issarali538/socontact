import { useState } from "react";
import { Container, Button, Col, Card, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import List from "./LIst";
import avatar1 from '../../assets/images/mem1.jpeg';
import avatar2 from '../../assets/images/mem2.jpeg';
import avatar3 from '../../assets/images/mem3.jpeg';

const MemberProfile = () => {
    const [memberList, setMemberList] = useState([
        {
            name:"Amjad Ali",
            img:avatar1,
            date:new Date(),
        },
        {
            name:"Amjad Ali",
            img:avatar2,
            date:new Date()
        },
        {
            name:"Amjad Ali",
            img:avatar3,
            date:new Date()
        },
        {
            name:"Amjad Ali",
            img:avatar2,
            date:new Date()
        },
    ]);

    return (
        <>
            <div className="right-side">
                <Card className="tabs-card">
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Button variant="outline-info" >
                                <i className="fa-regular fa-envelope"></i>
                            </Button>
                            <Button variant="outline-info" >
                                <i className="fa fa-pen"></i>
                            </Button>
                            <Button variant="outline-info" >
                                <i className="fa fa-calendar"></i>
                            </Button>
                            <Button variant="outline-info" >
                                <i className="fa fa-download"></i>
                            </Button>
                            <Button variant="outline-info" >
                                <i className="fa fa-phone"></i>
                            </Button>
                            <Button variant="outline-info tab-btn-active" >
                                <i className="fa-regular fa-trash-can"></i>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                <div className="tabs-btns">
                    <div className="p-2">
                        <Button variant="warning" className="m-2">Analytics</Button>
                        <Button variant="outline-info" className="m-2">Task</Button>
                        <Button variant="outline-info" className="m-2">Notes</Button>
                    </div>
                </div>
                <div className="members-list">
                    <List memberList={memberList} />
                </div>
            </div>
        </>
    )
}

export default MemberProfile;