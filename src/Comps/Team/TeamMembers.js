import { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import mem1 from '../../assets/images/mem1.jpeg';
import mem2 from '../../assets/images/mem2.jpeg';
import mem3 from '../../assets/images/mem3.jpeg';

const TeamMembers = () => {

    const [members, setMembers] = useState([
        {
            img_: mem1,
            mem_name: 'Walium David',
            role: "Manager"
        },
        {
            img_: mem2,
            mem_name: 'Shahid Anwar',
            role: "Manager"
        },
        {
            img_: mem3,
            mem_name: "Amjad Ali",
            role: "Manager"
        }
    ])

    return (
        <div className="team-members">
            <Row>

                <div className="col-12">
                    <h2 className="fw-bold mt-5">Team Members</h2>
                </div>

                <div className="col-12">
                    <Row>
                        {members.map(member => (

                            <div className="col-sm-12" key={member.mem_name}>
                                <Card className="border-0 mb-2">
                                    <Card.Body className="d-flex alig-items-center justify-content-between mb-2">
                                        <div className="avatar d-flex align-items-center">
                                            <span className="">
                                                <img src={member.img_} alt="member" />
                                            </span>
                                            <div className="mem-desc ps-3">
                                                <p className="fw-bold mb-0">
                                                    {member.mem_name}
                                                </p>
                                                <p className="text-muted">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="operations">
                                            <Link to="" className="text-muted ms-2">
                                                <i className="fa fa-eye"></i>
                                            </Link>
                                            <Link to="" className="text-muted ms-2">
                                                <i className="fa ms-2 fa-pen"></i>
                                            </Link>
                                            <Link to="" className="text-muted ms-2">
                                                <i className="fa ms-2 fa-trash"></i>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>


                        ))}
                    </Row>
                </div>
            </Row>
        </div>
    );
}

export default TeamMembers;