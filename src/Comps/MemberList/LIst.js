import { useState } from "react";
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/mem1.jpeg';

const List = ({ memberList }) => {
    const days = ["Mon", "Tue", "Wed", "Fri", "Sat","Sun"]
    // const [date_,setDate_] = useState(memberList.date());
    // const year = date_.getFullYear();
    // const month = (date_.getMonth() + 1).toString().padStart(2, '0');
    // const day = date_.getDate().toString().padStart(2, '0');
    // const formattedDate = `${year}-${month}-${day}`;

    return (
        <>
            <ul className="list list-unstyled">
                {memberList.map(member => (


                    <li>
                        <Card>
                            <Card.Body className="d-flex">
                                <div>
                                    <img src={member.img} alt="avatar" />
                                </div>
                                <div className="ps-3" style={{ flex: 1 }}>
                                    <h6 className="fw-bold m-0">{member.name}</h6>
                                    <p>Added a new Member</p>
                                </div>
                                <div className="text-end">
                                    {member.date.getDate().toString().padStart(2, '0') + "/" +(member.date.getMonth()+1) + "/" +(member.date.getFullYear())}
                                </div>
                            </Card.Body>
                        </Card>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List;